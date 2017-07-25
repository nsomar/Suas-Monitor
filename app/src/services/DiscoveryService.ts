import { findAdbDevices } from './AdbService'
import { bonjourDiscovery } from './IosService'

const adbDiscovery = callback => {
  findAdbDevices(d => {
    callback(d)
    setInterval(() => { findAdbDevices(callback) }, 2000)
  })
}

export const findIosDevices = callback => {
  console.log('Looking for iOS Devices')
  bonjourDiscovery(callback)
}

export const findAndroidDevices = callback => {
  console.log('Looking for Android Devices')
  adbDiscovery(callback)
}
