import React = require('react')
import DockMonitor from 'redux-devtools-dock-monitor'
import Inspector from 'redux-devtools-inspector'
import ChartMonitor from 'redux-devtools-chart-monitor'
import DiffMonitor from 'redux-devtools-diff-monitor'
import { Provider } from 'react-redux'
import { createDevTools } from 'redux-devtools'
import { createStore, compose, Reducer } from 'redux'
import ConnectionService from '../services/ConnectionService'

interface ISuasMonitorComponentProps {
  device: any
}

export default class SuasMonitorComponent extends React.Component<ISuasMonitorComponentProps, any> {
  connectionService: ConnectionService
  devtools: any

  constructor (props) {
    super(props)

    this.devtools = this.getDevTools()
    let store = this.createMirrorStore(this.devtools)
    this.state = { store }

    this.connectionService = new ConnectionService()
  }

  componentWillUpdate (nextProps, nextState) {

    if (JSON.stringify(nextState.device) === JSON.stringify(nextProps.device)) {
      // Data is similar, skip
      return
    }

    let hasData = Object.keys(nextProps.device.data).length > 0

    if (hasData) {
      // New device connected
      console.log('CREATE STORE AND STUFF')
      this.connectionService.closeConnection()

      this.setState({
        ...this.state,
        device: nextProps.device
      })

      const { type, data } = nextProps.device
      this.connectToDevice(type, data, nextProps.disconnect)
    } else {
      // Other? device disconnectedx
      this.setState({
        ...this.state,
        device: nextProps.device
      })
    }

  }

  connectToDevice (type, data, disconnect) {
    this.connectionService.connectToDevice({
      type,
      device: data,
      onData: (data) => {
        let newState = data['state']
        let actionType = data['action']
        let actionData = data['actionData'] || {}

        this.state.store.dispatch({
          type: actionType, data: { actionData, newState }
        })
      },
      onCloseConnection: (isManualClosing, type, device) => {
        if (!isManualClosing) {
          disconnect(type, device)
        }
      },
      onError: (type, device) => {
        disconnect(type, device)
      }
    })
  }
  createMirrorStore (devtools) {
    let reducer: Reducer<any> = (state = { data: {} }, action) => {
      const { data } = action

      if (action.type === 'RESET') {
        return {}
      } else if (data && data.newState && data.actionData) {
        return {...state, data: action.data['newState'] }
      }

      return state
    }

    return createStore(reducer, {}, compose(devtools.instrument()))
  }

  getDevTools () {
    return createDevTools(
      <DockMonitor
        toggleVisibilityKey='ctrl-h'
        changePositionKey='ctrl-q'
        changeMonitorKey='ctrl-m'
        defaultIsVisible={true}
        defaultSize={0.82}
      >
        <ChartMonitor transitionDuration={500} widthBetweenNodesCoeff={1} heightBetweenNodesCoeff={1.3} />
        <Inspector />
        <DiffMonitor />
      </DockMonitor>
    )
  }

  render () {
    let DevTools = this.devtools
    return <Provider store={this.state.store}><DevTools /></Provider>
  }
}
