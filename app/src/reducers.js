import { combineReducers } from 'redux';
import { DEVICE_DISCOVERED, CONNECT_DEVICE, DISCONNECT_DEVICE } from './actions'

function connection(state = {devices: [], connect: {}}, action) { 
    switch(action.type){
        case DEVICE_DISCOVERED:
            return {
                ...state,
                devices: [...state.devices, action.device]
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