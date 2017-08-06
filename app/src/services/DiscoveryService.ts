import { findAdbDevices } from './AdbService'
import { bonjourDiscovery } from './BonjourService'

const adbDiscovery = callback => {
  findAdbDevices(d => {
    callback(d)
    setInterval(() => { findAdbDevices(callback) }, 2000)
  })
}

export const findBonjourDevices = callback => {
  console.log('Looking for Bonjour Devices')
  bonjourDiscovery(callback)
}

export const findAndroidDevices = callback => {
  console.log('Looking for Android Devices')
  adbDiscovery(callback)
}
