import 'milligram'
import 'normalize.css'
import React = require('react')
import DeviceDiscovery from './containers/DeviceDiscovery'
import DeviceList from './containers/DeviceList'
import SuasMonitor from './containers/SuasMonitor'
import SettingsButtons from './containers/SettingsButtons'
import { FullHeightDiv } from './elements/elements'

export default class App extends React.Component<any, any> {
  render () {
    return <FullHeightDiv>
      <DeviceDiscovery />
      <DeviceList />
      <SettingsButtons />
      <SuasMonitor />
    </FullHeightDiv>
  }
}
