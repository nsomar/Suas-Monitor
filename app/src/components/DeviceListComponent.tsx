import React = require('react')
import styled from 'styled-components'

const TableRow = styled.tr`
  padding: 4em;
  background: ${props => props.selected ? '#F4F5F6' : 'white' };
`

interface IDeviceListComponentProps {
  iosDevices: Array<any>,
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
    const { androidDevices, iosDevices } = this.props
    const datasource = [
      ...androidDevices.map(d => ({ name: d.name, platform: 'Android', data: d, selected: this.isSelectedDevice(d.name) })),
      ...iosDevices.map(d => ({ name: d.name, platform: 'iOS', data: d, selected: this.isSelectedDevice(d.name) }))
    ]

    return <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Platform</th>
          </tr>
        </thead>
        <tbody>
          {
            datasource.map((item, i) => <TableRow
              onClick={() => {
                this.onDeviceSelected(item)
              }}
              key={i}
              selected={item.selected}
            >
              <td>{item.name}</td>
              <td>{item.platform}</td>
            </TableRow>)
          }
        </tbody>
      </table>
    </div>
  }
}
