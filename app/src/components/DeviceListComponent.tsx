import React = require('react')
import { Device, Title, DeviceName, DeviceType } from '../elements/elements'

interface IDeviceListComponentProps {
  bonjourDevices: Array<any>,
  androidDevices: Array<any>,
  connectToDevice?: ({ }) => {},
  selected: string
}

export default class DeviceListComponent extends React.Component<IDeviceListComponentProps, any> {
  onDeviceSelected = (item: any) => {
    const { data, platform } = item

    if (this.props.connectToDevice) {
      this.props.connectToDevice({
        type: platform === 'Android' ? 'adb' : 'bonjour',
        data
      })
    }
  }

  isSelectedDevice (name) {
    return name === this.props.selected
  }

  render () {
    const { androidDevices, bonjourDevices } = this.props
    const datasource = [
      ...androidDevices.map(d => ({ name: d.name, platform: 'Android', data: d, selected: this.isSelectedDevice(d.name) })),
      ...bonjourDevices.map(d => ({ name: d.name, platform: 'Bonjour', data: d, selected: this.isSelectedDevice(d.name) }))
    ]

    return <div>
      <div>
        <Title>
          Applications
        </Title>
        <div>
          {
            datasource.map((item, i) => <Device
              onClick={() => {
                this.onDeviceSelected(item)
              }}
              key={i}
              selected={item.selected}
            >
              <DeviceName>
              {item.name}
              </DeviceName>
              <DeviceType selected={item.selected}>
              {item.platform}
              </DeviceType>
            </Device>)
          }
        </div>
      </div>
    </div>
  }
}
