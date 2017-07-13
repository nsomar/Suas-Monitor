import { connect } from 'react-redux';
import { deviceFoundAction } from '../actions';

import DeviceDiscoveryComponent from '../components/DeviceDiscoveryComponent'

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        deviceFound: (device) => {
            dispatch(deviceFoundAction(device))
        }
    }
}

const DeviceDiscovery = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceDiscoveryComponent)

export default DeviceDiscovery