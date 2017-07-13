import React, { PropTypes } from 'react';

import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import Inspector from 'redux-devtools-inspector'
import ChartMonitor from 'redux-devtools-chart-monitor'
import DiffMonitor from 'redux-devtools-diff-monitor'
import { Provider } from 'react-redux';

import { createDevTools } from 'redux-devtools'
import { createStore, compose } from 'redux'

import net from 'net'

export default class ReduxMonitorComponent extends React.Component {

    static propTypes = {
        device: PropTypes.object.isRequired
    };

    componentWillUpdate(nextProps, nextState) {
        if(nextState && nextState.store) {} 
        else {
            console.log("CREATE DEV TOOLS")
            const devtools = this.getDevTools()
            let store = this.createMirrorStore(devtools)

            this.setState({
                devtools: devtools,
                store: store
            })

            let con = this.socket(nextProps.device.port, nextProps.device.host)
            con.on('data', (d) => {
                console.log(d)
            })

            var buffer = ""
            con.on('data', (d) => {
                
                let string = this.ab2str(d)
                if(string.endsWith("\n")) {
                    
                    console.log(buffer + string)
                    let json = JSON.parse(buffer + string)
                    
                    let newState = json["state"];
                    let actionType = json["action"]
                    let actionData = {}
                    
                    console.log(json)

                    store.dispatch({type: actionType, data: {
                        actionData: actionData,
                        newState: newState
                    }})

                    buffer = ""
                } else {
                    buffer += string
                }
            })
        }
    }

    ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    }

    createMirrorStore(devtools) {
        let reducer = (state = {data: {}}, action) => {
            if(action.data && action.data["newState"] && action.data["actionData"]) {
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
                    defaultIsVisible={true}>
                <ChartMonitor transitionDuration={500} />
                <Inspector />
                <LogMonitor />
                <DiffMonitor />
            </DockMonitor>
        )
    }

    socket(port, address) {
        let socket = new net.Socket()
        socket.connect(port, address)
        return socket
    }

    render() {
        if(this.state && this.state.devtools && this.state.store) {
            let DevTools = this.state.devtools
            console.log(this.state)
            return <Provider store={this.state.store}><DevTools /></Provider>
        } else {
            return <h3>Please selecte a device</h3>
        }
    }
}

