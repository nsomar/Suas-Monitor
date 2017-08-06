import 'milligram'
import 'normalize.css'
import React = require('react')
import DeviceDiscovery from './containers/DeviceDiscovery'
import DeviceList from './containers/DeviceList'
import SuasMonitor from './containers/SuasMonitor'

export default class App extends React.Component<any, any> {
  render () {
    return <div>
      <DeviceDiscovery />
      <DeviceList />
      <SuasMonitor />
    </div>
  }
}
