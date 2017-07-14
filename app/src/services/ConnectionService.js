
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
        
        if(string.includes("&&__&&__&&")) {
            let rawJson = (buffer + string).trim()
            buffer = ""
            
            let split = rawJson.split("&&__&&__&&")
            let items;
            if(split[split.length - 1].trim() == '') {
                items = split
            } else {
                buffer = split[split.length - 1]
                items = split.slice(0, split.length - 1)
            }
            
            if(items.length > 0) {
                console.log(items)
                items
                    .filter(d => d != '')
                    .map(j => JSON.parse(j))
                    .forEach(d => callback(d))
            }

        } else {
            buffer += string
        }
    })
}

const ab2str = (buf) => {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
}