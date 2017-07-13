
export const DEVICE_DISCOVERED = 'DEVICE_DISCOVERED'
export const CONNECT_DEVICE = 'CONNECT_DEVICE'
export const DISCONNECT_DEVICE = 'DISCONNECT_DEVICE'

export function deviceFoundAction(device) {
  return { 
      type: DEVICE_DISCOVERED,
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