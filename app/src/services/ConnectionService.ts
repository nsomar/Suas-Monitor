import { connectToProcess } from './AdbService'
import { openSocketToIOS } from './IosService'

export default class ConnectionService {
  connection?: any

  connectToDevice = (type, device, callback) => {
    if (type === 'adb') {
      connectToProcess(device.name, (socket) => {
        this.listenToSocket(socket, callback)
      })
    } else if (type === 'bonjour') {
      this.listenToSocket(openSocketToIOS(device.host, device.port), callback)
    }
  }

  closeConnection = () => {
    if (this.connection) this.connection.end()
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