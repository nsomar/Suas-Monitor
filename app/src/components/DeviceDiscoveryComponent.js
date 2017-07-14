import React, { PropTypes } from 'react';
import { findAndroidDevices, findIosDevices } from '../services/DiscoveryService'

export default class DeviceDiscoveryComponent extends React.Component { 

    static propTypes = {
        deviceFoundAndroid: PropTypes.func.isRequired,
        deviceFoundiOS: PropTypes.func.isRequired
    };

    componentDidMount() {
        findAndroidDevices((device) => {
            this.props.deviceFoundAndroid(device)
        })
        findIosDevices((device) => {
            this.props.deviceFoundiOS(device)
        })
    }

    render() {
        return <span/>
    }

}
