import { combineReducers } from 'redux'
import {
  DEVICE_DISCOVERED_IOS, DEVICE_DISCOVERED_ANDROID, CONNECT_DEVICE, DISCONNECT_DEVICE
} from './actions'

function connection (state = { devicesAndroid: [], devicesiOS: [], connect: { data: {} } }, action) {
  switch (action.type) {

    case DEVICE_DISCOVERED_ANDROID:
      return {
        ...state,
        devicesAndroid: [...action.devices]
      }

    case DEVICE_DISCOVERED_IOS:
      // Remove old device with same fqdn
      let newDevicesiOS = state.devicesiOS
      newDevicesiOS = newDevicesiOS.filter((d: any) => { return d.fqdn !== action.device.fqdn })

      let devices = [...newDevicesiOS, action.device]

      return {
        ...state,
        devicesiOS: devices
      }

    case CONNECT_DEVICE:
      return {
        ...state,
        connect: { ...action.device }
      }

    case DISCONNECT_DEVICE:
      let devicesiOS = state.devicesiOS
      let devicesAndroid = state.devicesAndroid

      if (action.deviceType === 'bonjour') {
        devicesiOS = devicesiOS.filter((d: any) => { return d.fqdn !== action.device.fqdn })
        devicesAndroid = devicesAndroid.filter((d: any) => { return d.fqdn !== action.device.fqdn })
      }

      return {
        ...state,
        devicesAndroid: devicesAndroid,
        devicesiOS: devicesiOS,
        connect: { ...state.connect, data: {}}
      }

    default:
      return state
  }
}

const SuasMonitorReducer = combineReducers({ connection })

export default SuasMonitorReducer
