// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const net = require('net')

function devices() {
    let c = client()
    selectService(c, "host:devices", true, function(result) {
        console.log(result)
        c.end()
    }) 
}

function connectToProcess(result) {
    getProcessName(function(name) {
        let c = client()
        connectDevice(c, function(c1) {
            selectService(c1, "localabstract:" + name, false, function(p){
                console.log("-> " + p)
                c1.on('data', function(d){
                    console.log(ab2str(d))
                })
            })
        })
    })
}

function getProcessName(result) {
    let c = client()
    findProcess(c, function(name){
        c.end()
        result(name)
    })
}

function findProcess(c, result) {
    connectDevice(c, function(c1){
        selectService(c1, "shell:cat /proc/net/unix", true, function(d){
            let processes = d.split('\n')
            for(var i = 0; i < processes.length; i++) {
                let cols = processes[i].split(' ')
                if(cols.length < 8) {
                    continue;
                }

                if(!cols[7].startsWith("@redux_monitor")) {
                    continue;
                }

                if(parseInt(cols[3], 16) != 0x10000 || parseInt(cols[5], 16) != 1) {
                    continue;
                }

                result(cols[7].substring(1))
                break;
            }
        })
    })
}

function connectDevice(c, done) {
  selectService(c, "host:transport-any", false, function(result) {
    done(c)
  }) 
}

function selectService(socket, service, waitForEnd, result) {
    let msg = pad(service.length.toString(16), 4) + service
    socket.write(msg)

    var endResult = ""

    let listener = function(data) {
        let output = ab2str(data)
        if(!waitForEnd) {
            end();
            return;
        }
        endResult += output;
    }

    let end = function() {
        socket.removeListener('data', listener)
        socket.removeListener('end', end)
        result(endResult)
    }

    socket.on('data', listener)
    socket.on('end', end)
}

function client() {
    let socket = new net.Socket()
    socket.connect(5037, '127.0.0.1')
    return socket
}

function ab2str(buf) {
  return String.fromCharCode.apply(null, new Uint16Array(buf));
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

document.querySelector('#devices').addEventListener('click', devices)
document.querySelector('#process').addEventListener('click', connectToProcess)