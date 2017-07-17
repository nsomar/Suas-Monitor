import * as net from 'net'
const bonjour = require('bonjour')()

export const bonjourDiscovery = callback => {
  bonjour.find({ type: 'redux-monitor' }, callback)
}

export const openSocketToIOS = (address, port) => {
  let socket = new net.Socket()
  socket.connect(port, address)

  return socket
}
