
import bonjour from 'bonjour'
import net from 'net'


export const bonjourDiscovery = (callback) => {
    bonjour().find({ type: 'redux-monitor' }, function (service) {
        callback(service)
    })
}

export const openSocketToIOS = (address, port) => {
    let socket = new net.Socket()
    console.log("computer", address, port)
    socket.connect(address, port)
    return socket
}