export const DEVICE_DISCOVERED_ANDROID = 'DEVICE_DISCOVERED_ANDROID'
export const DEVICE_DISCOVERED_BONJOUR = 'DEVICE_DISCOVERED_BONJOUR'
export const CONNECT_DEVICE = 'CONNECT_DEVICE'
export const DISCONNECT_DEVICE = 'DISCONNECT_DEVICE'

export function deviceFoundAndroid (devices) {
  return {
    type: DEVICE_DISCOVERED_ANDROID, devices
  }
}

export function deviceFoundBonjour (device) {
  return {
    type: DEVICE_DISCOVERED_BONJOUR,
    device
  }
}

export function connectToDevice (device) {
  return {
    type: CONNECT_DEVICE,
    device
  }
}

export function disconnect (type, device) {
  return {
    type: DISCONNECT_DEVICE,
    deviceType: type,
    device
  }
}
