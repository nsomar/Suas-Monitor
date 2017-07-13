import { connect }  from 'react-redux';
import ReduxMonitorComponent from '../components/ReduxMonitorComponent';
import { connectToDevice } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    device: state.connection.connect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const ReduxMonitor = connect(
  mapStateToProps,
  mapDispatchToProps
)(ReduxMonitorComponent)


export default ReduxMonitor;