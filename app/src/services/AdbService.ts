import * as net from 'net'

export function findAdbDevices (callback) {
  let c = client()
  selectService(c, 'host:devices', true, function (result) {
    let devices = result.substring(8).trim().split('\n')
      .map(d => d.split('\t'))
      .map(d => ({ name: d[0], type: d[1] }))
    callback(devices)
    c.end()
  })
}

export function connectToProcess (device, result) {
  getProcessName(device, function (name) {
    let c = client()
    connectDevice(c, device, function (c1) {
      selectService(c1, `localabstract:${name}`, false, function (p) {
        result(c1)
      })
    })
  })
}

function getProcessName (device, result) {
  let c = client()
  findProcess(c, device, function (name) {
    c.end()
    result(name)
  })
}

function findProcess (c, device, result) {
  connectDevice(c, device, function (c1) {
    selectService(c1, 'shell:cat /proc/net/unix', true, function (d) {
      let processes = d.split('\n')
      for (let i = 0; i < processes.length; i++) {
        let cols = processes[i].split(' ')
        if (cols.length < 8) {
          continue
        }

        if (!cols[7].startsWith('@redux_monitor')) {
          continue
        }

        if (parseInt(cols[3], 16) !== 0x10000 || parseInt(cols[5], 16) !== 1) {
          continue
        }

        result(cols[7].substring(1))
        break
      }
    })
  })
}

function connectDevice (c, device, done) {
  selectService(c, `host:transport:${device}`, false, result => {
    done(c)
  })
}

function selectService (socket: net.Socket, service, waitForEnd, result) {
  let msg = pad(service.length.toString(16), 4) + service
  let endResult = ''

  socket.write(msg)

  let end = listenerParam => {
    socket.removeListener('data', listenerParam)
    socket.removeListener('end', end)
    result(endResult)
  }

  let listener = data => {
    let output = ab2str(data)
    if (!waitForEnd) {
      end(listener)
      return
    }

    endResult += output
  }

  socket.on('data', listener)
  socket.on('end', end)
}

function client () {
  let socket = new net.Socket()
  socket.connect(5037, '127.0.0.1')
  return socket
}

function ab2str (buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf))
}

function pad (n, width, z?: string) {
  z = z || '0'
  n = n + ''

  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
}
