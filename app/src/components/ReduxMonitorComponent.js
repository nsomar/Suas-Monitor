import React, { PropTypes } from 'react';

import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import Inspector from 'redux-devtools-inspector'
import ChartMonitor from 'redux-devtools-chart-monitor'
import DiffMonitor from 'redux-devtools-diff-monitor'
import { Provider } from 'react-redux'

import { createDevTools } from 'redux-devtools'
import { createStore, compose } from 'redux'

import { connectToDevice, closeConnection } from '../services/ConnectionService'

export default class ReduxMonitorComponent extends React.Component {

    static propTypes = {
        device: PropTypes.object.isRequired
    };

    constructor(props){
        super(props)
        let devtools = this.getDevTools()
        let store = this.createMirrorStore(devtools) 
        this.state = {
            devtools: devtools,
            store: store
        }
    }

    componentDidMount() {
        const devtools = this.getDevTools()
        let store = this.createMirrorStore(devtools)
    }

    componentWillUpdate(nextProps, nextState) {
        if(!(JSON.stringify(nextState.device) === JSON.stringify(nextProps.device))) {
            console.log("CREATE STORE AND STUFF")
            closeConnection()
            
            this.setState({
                ...this.state,
                device: nextProps.device
            })

            connectToDevice(nextProps.device.type, nextProps.device.data, (data) => {

                let newState = data["state"]
                let actionType = data["action"]
                let actionData = data["actionData"] || {}
                
                this.state.store.dispatch({type: actionType, data: {
                    actionData: actionData,
                    newState: newState
                }})
            })

            this.state.store.dispatch({type: "RESET", data: {}})
        }
    }

    createMirrorStore(devtools) {
        let reducer = (state = {data: {}}, action) => {
            if(action.type == "RESET") {
                return {}
            } else if(action.data && action.data["newState"] && action.data["actionData"]) {
                return Object.assign({}, state, {data: action.data["newState"]})
            } else {
                return state
            }
        }

        return createStore(reducer, {}, compose(devtools.instrument()));
    }

    getDevTools(store) {
        return createDevTools(
            <DockMonitor
                    toggleVisibilityKey='ctrl-h'
                    changePositionKey='ctrl-q'
                    changeMonitorKey="ctrl-m"
                    defaultIsVisible={true}
                    defaultSize={0.65}
                    >
                <ChartMonitor transitionDuration={500} heightBetweenNodesCoeff={2} widthBetweenNodesCoeff={0.8} />
                <Inspector />
                <LogMonitor />
                <DiffMonitor />
            </DockMonitor>
        )
    }

    render() {
        let DevTools = this.state.devtools
        return <Provider store={this.state.store}><DevTools /></Provider>
    }
}

