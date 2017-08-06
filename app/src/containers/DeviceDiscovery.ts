import { connect } from 'react-redux'
import { deviceFoundAndroid, deviceFoundBonjour } from '../actions'
import DeviceDiscoveryComponent from '../components/DeviceDiscoveryComponent'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    deviceFoundAndroid: devices => {
      dispatch(deviceFoundAndroid(devices))
    },
    deviceFoundBonjour: device => {
      dispatch(deviceFoundBonjour(device))
    }
  }
}

const DeviceDiscovery = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceDiscoveryComponent)

export default DeviceDiscovery
