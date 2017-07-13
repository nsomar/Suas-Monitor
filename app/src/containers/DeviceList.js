import { connect }  from 'react-redux';
import DeviceListComponent from '../components/DeviceListComponent';
import { connectToDevice } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    devices: state.connection.devices
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


export default DeviceList;