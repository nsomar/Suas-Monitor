import React = require('react')
import { findAndroidDevices, findBonjourDevices } from '../services/DiscoveryService'

export default class DeviceDiscoveryComponent extends React.Component<IDeviceDiscoveryComponentProps, any> {
  componentDidMount () {
    findAndroidDevices(device => this.props.deviceFoundAndroid(device))
    findBonjourDevices(device => this.props.deviceFoundBonjour(device))
  }

  render () {
    return <span />
  }
}

interface IDeviceDiscoveryComponentProps {
  deviceFoundAndroid: (device: any) => {}
  deviceFoundBonjour: (device: any) => {}
}
