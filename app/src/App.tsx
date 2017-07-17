import React = require('react')
import DeviceDiscovery from './containers/DeviceDiscovery'
import DeviceList from './containers/DeviceList'
import ReduxMonitor from './containers/ReduxMonitor'

export default class App extends React.Component<any, any> {
  render () {
    return <div>
      <DeviceDiscovery />
      <DeviceList />
      <ReduxMonitor />
    </div>
  }
}
