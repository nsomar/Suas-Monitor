import React, { PropTypes } from 'react';

export default class DeviceListComponent extends React.Component { 

    static propTypes = {
        devices: PropTypes.array.isRequired,
        connectToDevice: PropTypes.func.isRequired
    };

    render() {

        let item = (d) => {
            return <li key={d.name + d.type} onClick={() => this.props.connectToDevice(d)}>
                {d.name}
            </li>
        }

        return <ul>
            {this.props.devices.map(d => item(d))}
        </ul>
    }

}
