import { findAdbDevices } from './AdbService'
import { bonjourDiscovery } from './IosService'

export const findIosDevices = callback => {
  console.log('Looking for iOS Devices')
  bonjourDiscovery(callback)
}

export const findAndroidDevices = callback => {
  console.log('Looking for Android Devices')
  adbDiscovery(callback)
}

const adbDiscovery = callback => {
  findAdbDevices(d => {
    callback(d)
    setInterval(() => { findAdbDevices(callback) }, 2000)
  })
}
