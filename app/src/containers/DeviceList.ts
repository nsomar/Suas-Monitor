import { connect } from 'react-redux'
import DeviceListComponent from '../components/DeviceListComponent'
import { connectToDevice } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    androidDevices: state.connection.devicesAndroid,
    bonjourDevices: state.connection.devicesBonjour,
    selected: state.connection.connect.data.name || ''
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    connectToDevice: (device) => {
      dispatch(connectToDevice(device))
    }
  }
}

const DeviceList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceListComponent)

export default DeviceList
