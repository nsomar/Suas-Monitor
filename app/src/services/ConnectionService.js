
import { connectToProcess } from './AdbService'
import { openSocketToIOS } from './IosService'

var connection 

export const connectToDevice = (type, device, callback) => {
    if(type == 'adb') {
        connectToProcess(device.name, (socket) => {
            listenToSocket(socket, callback)
        })
    } else if (type == 'bonjour') {
        listenToSocket(openSocketToIOS(device.host, device.port), callback)
    }
}

export const closeConnection = () => {
    if(connection) {
        connection.end()
    }
}

const listenToSocket = (socket, callback) => {
    connection = socket
    var buffer = ""
    socket.on('data', (d) => {
        let string = ab2str(d)
        if(string.endsWith("\r\r")) {
            let rawJson = buffer + string.replace("\r\r", "")
            let json = JSON.parse(rawJson)
            callback(json)
            buffer = ""
        } else {
            buffer += string
        }
    })
}

const ab2str = (buf) => {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}