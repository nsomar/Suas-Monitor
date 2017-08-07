import { connectToProcess } from './AdbService'
import { openSocketToBonjour } from './BonjourService'
import { showNotification } from '../services/Notification'

export default class ConnectionService {
  connection?: any
  isManualClosing: boolean

  connectToDevice = ({type, device, onConnection, onData, onCloseConnection, onError}) => {
    if (type === 'adb') {
      connectToProcess(device.name, (socket) => {
        this.listenToSocket(socket, onData)
        this.listenToConnectionEstablished(socket, type, device, onConnection)
        this.listenToDisconnect(socket, type, device, onCloseConnection)
        this.listenToError(socket, type, device, onError)
      })
    } else if (type === 'bonjour') {
      let socket = openSocketToBonjour(device.host, device.port)
      this.listenToConnectionEstablished(socket, type, device, onConnection)
      this.listenToSocket(socket, onData)
      this.listenToDisconnect(socket, type, device, onCloseConnection)
      this.listenToError(socket, type, device, onError)
    }

    // When we start a connection it sends the close, but async
    // We set the closing to 100 milliseconds and reset the reason to be not manual
    // There are better ways to sovlve this. Sure, this is good enough I think.
    setTimeout(() => { this.isManualClosing = false }, 100)
  }

  closeConnection = () => {
    // We stop listening when we close the connection by hand
    this.isManualClosing = true

    if (this.connection) this.connection.end()
  }

  listenToDisconnect = (socket, type, device, callback) => {
    socket.on('close', (_) => {
      callback(this.isManualClosing, type, device)
    })
  }

  listenToError = (socket, type, device, callback) => {
    socket.on('error', (_) => {
      callback(type, device)
    })
  }

  listenToConnectionEstablished = (socket, type, device, callback) => {
    socket.on('connect', () => {
      callback(type, device)
    })
  }

  listenToSocket = (socket, callback) => {
    this.connection = socket
    let buffer = ''

    socket.on('data', (d) => {
      let text = this.ab2str(d)

      if (text.includes('&&__&&__&&')) {
        let rawJson = (buffer + text).trim()
        buffer = ''

        let split = rawJson.split('&&__&&__&&')
        let items
        if (split[split.length - 1].trim() === '') {
          items = split
        } else {
          buffer = split[split.length - 1]
          items = split.slice(0, split.length - 1)
        }

        if (items.length > 0) {
          console.log(items)
          items
            .filter(d => d !== '')
            .map(j => JSON.parse(j))
            .forEach(d => callback(d))
        }

      } else {
        buffer += text
      }
    })
  }

  ab2str = (buf) => {
    return String.fromCharCode.apply(null, new Uint16Array(buf))
  }
}
