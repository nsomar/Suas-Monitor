
export const DEVICE_DISCOVERED_ANDROID = 'DEVICE_DISCOVERED_ANDROID'
export const DEVICE_DISCOVERED_IOS = 'DEVICE_DISCOVERED_IOS'

export const CONNECT_DEVICE = 'CONNECT_DEVICE'
export const DISCONNECT_DEVICE = 'DISCONNECT_DEVICE'

export function deviceFoundAndroid(devices) {
  return { 
      type: DEVICE_DISCOVERED_ANDROID,
      devices
    }
}

export function deviceFoundiOS(device) {
  return { 
      type: DEVICE_DISCOVERED_IOS,
      device
    }
}

export function connectToDevice(device) {
  return { 
      type: CONNECT_DEVICE,
      device
    }
}

export function disconnect() {
  return { 
      type: DISCONNECT_DEVICE,
      device
    }
}