import { combineReducers } from 'redux'
import {
  DEVICE_DISCOVERED_BONJOUR, DEVICE_DISCOVERED_ANDROID, CONNECT_DEVICE, DISCONNECT_DEVICE
} from './actions'

function connection (state = { devicesAndroid: [], devicesBonjour: [], connect: { data: {} } }, action) {
  switch (action.type) {

    case DEVICE_DISCOVERED_ANDROID:
      return {
        ...state,
        devicesAndroid: [...action.devices]
      }

    case DEVICE_DISCOVERED_BONJOUR:
      // Remove old device with same fqdn
      let devices = [...removeBonjourDevice(state.devicesBonjour, action.device), action.device]

      return {
        ...state,
        devicesBonjour: devices
      }

    case CONNECT_DEVICE:
      return {
        ...state,
        connect: { ...action.device }
      }

    case DISCONNECT_DEVICE:
      return {
        ...state,
        devicesAndroid: state.devicesAndroid,
        // TODO: do we need to handle android disconnections?
        devicesBonjour: removeBonjourDevice(state.devicesBonjour, action.device),
        connect: { ...state.connect, data: {}}
      }

    default:
      return state
  }
}

function removeBonjourDevice (devices, device) {
  return devices.filter((d: any) => { return d.fqdn !== device.fqdn })
}

const SuasMonitorReducer = combineReducers({ connection })

export default SuasMonitorReducer
