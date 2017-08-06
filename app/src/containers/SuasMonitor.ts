import { connect } from 'react-redux'
import SuasMonitorComponent from '../components/SuasMonitorComponent'
import { disconnect } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    device: state.connection.connect
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    disconnect: (type, device) => {
      dispatch(disconnect(type, device))
    }
  }
}

const SuasMonitor = connect(
  mapStateToProps,
  mapDispatchToProps
)(SuasMonitorComponent)

export default SuasMonitor
