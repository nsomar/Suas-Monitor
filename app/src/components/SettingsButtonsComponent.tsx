import React = require('react')
import { BottomButton } from '../elements/elements'
import { monitorChangeHack } from '../services/KeyboardHacks'

interface ISettingsButtonsComponentProps {
}

export default class SettingsButtonsComponent extends React.Component<ISettingsButtonsComponentProps, any> {
  render () {
    return <BottomButton
      onClick={() => {
        monitorChangeHack()
      }}
    />
  }
}
