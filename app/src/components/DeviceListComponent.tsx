import React = require('react')
import { Card, Table } from 'antd'

interface IDeviceListComponentProps {
  iosDevices: Array<any>,
  androidDevices: Array<any>,
  connectToDevice: ({ }) => {},
  selected: string
}

export default class DeviceListComponent extends React.Component<IDeviceListComponentProps, any> {
  onDeviceSelected = (record, index, event) => {
    switch (record.platform) {
      case 'Android':
        this.props.connectToDevice({ type: 'adb', data: record.data })
        break
      case 'iOS':
        this.props.connectToDevice({ type: 'bonjour', data: record.data })
        break
    }
  }

  isSelectedDevice (name) {
    return name === this.props.selected ? '✔' : ''
  }

  render () {
    const dataSource = [
      ...this.props.androidDevices.map(d => ({ name: d.name, type: d.type, platform: 'Android', data: d, selected: this.isSelectedDevice(d.name) })),
      ...this.props.iosDevices.map(d => ({ name: d.name, type: d.type, platform: 'iOS', data: d, selected: this.isSelectedDevice(d.name) }))
    ]

    return <Card bordered={false} style={{ width: 400, margin: '20px' }}>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        onRowClick={this.onDeviceSelected}
      />
    </Card>
  }
}

const columns = [
  {
    title: 'Selected',
    dataIndex: 'selected',
    key: 'selected'
  }, {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
  }, {
    title: 'Platform',
    dataIndex: 'platform',
    key: 'platform'
  }]
