import React = require('react')
import { findAndroidDevices, findIosDevices } from '../services/DiscoveryService'

export default class DeviceDiscoveryComponent extends React.Component<IDeviceDiscoveryComponentProps, any> {
  componentDidMount () {
    findAndroidDevices((device) => {
      this.props.deviceFoundAndroid(device)
    })
    findIosDevices((device) => {
      this.props.deviceFoundiOS(device)
    })
  }

  render () {
    return <span />
  }
}

interface IDeviceDiscoveryComponentProps {
  deviceFoundAndroid: (device: any) => {}
  deviceFoundiOS: (device: any) => {}
}
