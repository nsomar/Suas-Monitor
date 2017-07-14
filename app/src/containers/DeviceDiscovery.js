import { connect } from 'react-redux';
import { deviceFoundAndroid, deviceFoundiOS } from '../actions';

import DeviceDiscoveryComponent from '../components/DeviceDiscoveryComponent'

const mapStateToProps = (state, ownProps) => {
    return {    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        deviceFoundAndroid: (devices) => {
            dispatch(deviceFoundAndroid(devices))
        },
        deviceFoundiOS: (device) => {
            dispatch(deviceFoundiOS(device))
        }
    }
}

const DeviceDiscovery = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceDiscoveryComponent)

export default DeviceDiscovery