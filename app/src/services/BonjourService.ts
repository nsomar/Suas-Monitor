import * as net from 'net'
const bonjour = require('bonjour')()

export const bonjourDiscovery = callback => {
  bonjour.find({ type: 'suas-monitor' }, callback)
}

export const openSocketToBonjour = (address, port) => {
  let socket = new net.Socket()
  socket.connect(port, address)

  return socket
}
