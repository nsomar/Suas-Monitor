import { connect } from 'react-redux'
import SettingsButtonsComponent from '../components/SettingsButtonsComponent'
import { connectToDevice } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    connectToDevice: (device) => {
      dispatch(connectToDevice(device))
    }
  }
}

const SettingsButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsButtonsComponent)

export default SettingsButtons
