import { notify } from 'react-notify-toast'

let color = { background: '#CF639A', text: 'white' }

export let showNotification = ({text = '', style = 'custom', timeout = 5000}) => {
  notify.hide()
  notify.show(text, style, timeout, color)
}
