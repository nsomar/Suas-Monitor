import { combineReducers } from 'redux';
import { DEVICE_DISCOVERED_IOS, DEVICE_DISCOVERED_ANDROID, CONNECT_DEVICE, DISCONNECT_DEVICE } from './actions'

function connection(state = {devicesAndroid: [], devicesiOS: [], connect: {data:{}}}, action) { 
    switch(action.type){

        case DEVICE_DISCOVERED_ANDROID:
            return {
                ...state,
                devicesAndroid: [...action.devices]
            }

        case DEVICE_DISCOVERED_IOS:
            let devices = [...state.devicesiOS, action.device]

            return {
                ...state,
                devicesiOS: devices
            }

        case CONNECT_DEVICE: 
            return {
                ...state,
                connect: {...action.device}
            }

        case DISCONNECT_DEVICE: 
            return {
                ...state,
                connect: {}
            }
        
        default: 
            return state
    }
}

const reduxMonitorReducer = combineReducers({
    connection
});

export default reduxMonitorReducer;