import React, { PropTypes } from 'react';
import { Card, Table } from 'antd';

export default class DeviceListComponent extends React.Component { 

    static propTypes = {
        iosDevices: PropTypes.array.isRequired,
        androidDevices: PropTypes.array.isRequired,
        connectToDevice: PropTypes.func.isRequired,
        selected: PropTypes.string.isRequired
    };

    onDeviceSelected(record, index, event) {
        if(record.platform == "Android") {
            this.props.connectToDevice({type: 'adb', data: record.data})
        } else if(record.platform == "iOS") {
            this.props.connectToDevice({type: 'bonjour', data: record.data})
        }
    }

    isSelectedDevice(name) {
        if(name == this.props.selected) {
            return "✔"
        } else{
            return ""
        }
    }

    render() {
        const columns = [
        {   
            title: 'Selected',
            dataIndex: 'selected',
            key: 'selected',
        },{
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'Platform',
            dataIndex: 'platform',
            key: 'platform',
        }];

        const dataSource = [
            ...this.props.androidDevices.map((d, i) => ({key: i + d.name, name: d.name, platform: "Android", data: d, selected: this.isSelectedDevice(d.name)})),
            ...this.props.iosDevices.map((d, i) => ({key: i + d.name, name: d.name, platform: "iOS", data: d, selected: this.isSelectedDevice(d.name)}))
        ]

        return <Card bordered={false} style={{ width: 500, margin: '20px'}}>
            <Table dataSource={dataSource} columns={columns} pagination={false} onRowClick={this.onDeviceSelected.bind(this)}/>
        </Card>
    }

}
