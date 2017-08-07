import React = require('react')
import { BottomButton } from '../elements/elements'
import { monitorChangeHack } from '../services/KeyboardHacks'
const path = require('path')

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
