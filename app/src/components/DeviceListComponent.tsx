import { debug } from 'util';
import React = require('react');

interface IDeviceListComponentProps {
  iosDevices: Array<any>,
  androidDevices: Array<any>,
  connectToDevice: ({ }) => {},
  selected: string
}

export default class DeviceListComponent extends React.Component<IDeviceListComponentProps, any> {
  onDeviceSelected = (item: any) => {
    const { data, platform } = item
    this.props.connectToDevice({
      type: platform === 'Android' ? 'adb' : 'bonjour',
      data
    })
  }

  isSelectedDevice (name) {
    return name === this.props.selected ? '✔' : ''
  }

  render () {
    const { androidDevices, iosDevices } = this.props
    const datasource = [
      ...androidDevices.map(d => ({ name: d.name, type: d.type, platform: 'Android', data: d, selected: this.isSelectedDevice(d.name) })),
      ...iosDevices.map(d => ({ name: d.name, type: d.type, platform: 'iOS', data: d, selected: this.isSelectedDevice(d.name) }))
    ]

    return <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Platform</th>
          </tr>
        </thead>
        <tbody>
          {
            datasource.map((item, i) => <tr
              onClick={() => {
                this.onDeviceSelected(item)
              }}
              key={i}
            >
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.platform}</td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  }
}
