
import bonjour from 'bonjour'
import { findAdbDevices } from './AndroidDiscovery'

export const findDevices = (callback) => {
    console.log("Looking for Devices")
    bonjourDiscovery(callback)
    //adbDiscovery(callback) // TODO
}

const bonjourDiscovery = (callback) => {
    bonjour().find({ type: 'redux-monitor' }, function (service) {
        callback(service)
    })
}

const adbDiscovery = (callback) => {
    findAdbDevices((d) => {
        callback(d)
        setInterval(() => { adbDiscovery(callback) }, 10000)
    })
}