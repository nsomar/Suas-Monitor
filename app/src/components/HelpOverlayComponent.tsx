import React = require('react')
import { Device, Title, DeviceName, DeviceType, DevicesHolder } from '../elements/elements'

interface IDeviceListComponentProps {
  bonjourDevices: Array<any>,
  androidDevices: Array<any>,
  connectToDevice?: ({ }) => {},
  selected: string
}

let H_LETTER_KEY = 72
let QUESTION_MARK_KEY = 191

export default class DeviceListComponent extends React.Component<IDeviceListComponentProps, any> {

  _handleKeyDown = (event) => {
    switch (event.keyCode) {
      case H_LETTER_KEY:
      case QUESTION_MARK_KEY:
        console.log('show overlay')
        break
      default:
        break
    }
  }

  componentWillMount () {
    document.addEventListener('keydown', this._handleKeyDown.bind(this))
  }

  render () {
    return <span />
  }
}
