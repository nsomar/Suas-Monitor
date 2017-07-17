import React = require('react')
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import Inspector from 'redux-devtools-inspector'
import ChartMonitor from 'redux-devtools-chart-monitor'
import DiffMonitor from 'redux-devtools-diff-monitor'
import { Provider } from 'react-redux'
import { createDevTools } from 'redux-devtools'
import { createStore, compose, Reducer } from 'redux'
import ConnectionService from '../services/ConnectionService'

interface IReduxMonitorComponentProps {
  device: any
}

export default class ReduxMonitorComponent extends React.Component<IReduxMonitorComponentProps, any> {
  connectionService: ConnectionService
  devtools: any

  constructor (props) {
    super(props)

    this.devtools = this.getDevTools()
    let store = this.createMirrorStore(this.devtools)
    this.state = { store }

    this.connectionService = new ConnectionService()
  }

  componentDidMount () {
    const devtools = this.getDevTools()
    let store = this.createMirrorStore(devtools)
  }

  componentWillUpdate (nextProps, nextState) {
    if (!(JSON.stringify(nextState.device) === JSON.stringify(nextProps.device))) {
      console.log('CREATE STORE AND STUFF')
      this.connectionService.closeConnection()

      this.setState({
        ...this.state,
        device: nextProps.device
      })

      const { type, data } = nextProps.device

      this.connectionService.connectToDevice(type, data, data => {
        let newState = data['state']
        let actionType = data['action']
        let actionData = data['actionData'] || {}

        this.state.store.dispatch({
          type: actionType, data: { actionData, newState }
        })
      })

      this.state.store.dispatch({ type: 'RESET', data: {} })
    }
  }

  createMirrorStore (devtools) {
    let reducer: Reducer<any> = (state = { data: {} }, action) => {
      if (action.type === 'RESET') {
        return {}
      } else if (action.data && action.data['newState'] && action.data['actionData']) {
        return Object.assign({}, state, { data: action.data['newState'] })
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
        defaultSize={0.65}
      >
        <ChartMonitor transitionDuration={500} />
        <Inspector />
        <LogMonitor />
        <DiffMonitor />
      </DockMonitor>
    )
  }

  render () {
    let DevTools = this.devtools
    return <Provider store={this.state.store}><DevTools /></Provider>
  }
}
