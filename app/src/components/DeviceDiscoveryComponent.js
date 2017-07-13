import React, { PropTypes } from 'react';
import { findDevices } from '../services/DiscoveryService'

export default class DeviceDiscoveryComponent extends React.Component { 

    static propTypes = {
        deviceFound: PropTypes.func.isRequired
    };

    componentDidMount() {
        findDevices((device) => {
            this.props.deviceFound(device)
        })
    }

    render() {
        return <span/>
    }

}
