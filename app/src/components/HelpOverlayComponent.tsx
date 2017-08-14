import React = require('react')
import ReactModal from 'react-modal'
import { InlineImage, Header1, Header2, ShortcutKey, ListItem, List } from '../elements/elements'
import { showNotification } from '../services/Notification'

interface IDeviceListComponentProps {
  bonjourDevices: Array<any>,
  androidDevices: Array<any>,
  connectToDevice?: ({ }) => {},
  selected: string
}

let H_LETTER_KEY = 72
let QUESTION_MARK_KEY = 191
let ESCAPE_KEY = 27

let modalStyle = {
  overlay: { zIndex: 999999999, backgroundColor: 'rgba(255, 255, 255, 0.6)'},
  content: {
    zIndex: 999999999,
    width: '700px',
    height: '600px',
    margin: 'auto',
    paddingLeft: '50px'
  }
}

export default class DeviceListComponent extends React.Component<IDeviceListComponentProps, any> {
  constructor (props) {
    super(props)

    document.addEventListener('keydown', this._handleKeyDown.bind(this))
    this.state = { isVisible: false }
  }

  componentDidMount () {
    showNotification({ text: '🤔 Press on \'?\' or \'h\' key at any time for Help'})
  }

  _handleKeyDown = (event) => {
    // Ctrl+R is handled in app main.ts
    if ((event.keyCode === H_LETTER_KEY) ||
      (event.keyCode === QUESTION_MARK_KEY && event.shiftKey)) {
      this.setState({
        isVisible: !this.state.isVisible
      })
    } else if (event.keyCode === ESCAPE_KEY) {
      this.setState({
        isVisible: false
      })
    }
  }

  render () {
    return <ReactModal
      isOpen={this.state.isVisible}
      contentLabel='Modal'
      style={modalStyle}
      shouldCloseOnOverlayClick={true}
      onRequestClose={() => {
        this.setState({ isVisible: false })
      }}
    >
      <Header1>General</Header1>
      <List>
        <ListItem>Choose the application from the list of applications on the left</ListItem>
        <ListItem>State changes will be displayed on the right pane</ListItem>
        <ListItem>Click on <InlineImage src='assets/change-monitor.svg' /> (bottom left) to change monitor type (3 available)</ListItem>
      </List>

      <Header2>Suas Monitor Types</Header2>
      Suas provides 3 monitor types:
      <List>
        <ListItem>Application state tree</ListItem>
        <ListItem>Action inspector</ListItem>
        <ListItem>Action and state diff</ListItem>
      </List>

      <Header2>Keyboard Shortcuts</Header2>
      <List>
        <ListItem><ShortcutKey>m</ShortcutKey>: Cycle Suas Monitor types</ListItem>
        <ListItem><ShortcutKey>?</ShortcutKey> / <ShortcutKey>h</ShortcutKey>: Toggle help dialog (this dialog)</ListItem>
        <ListItem><ShortcutKey>esc</ShortcutKey>: Close this dialog</ListItem>
        <ListItem><ShortcutKey>Ctrl + r</ShortcutKey>: Reload/Releaunch Suas Monitor app</ListItem>
      </List>
    </ReactModal>
  }
}
