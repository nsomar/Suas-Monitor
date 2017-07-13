import React from 'react';

import DeviceDiscovery from './containers/DeviceDiscovery'
import DeviceList from './containers/DeviceList'
import ReduxMonitor from './containers/ReduxMonitor'

export default class App extends React.Component { 
    render() {
        return <div> 
            <DeviceDiscovery />
            <DeviceList />
            <ReduxMonitor />
        </div>
    }
}