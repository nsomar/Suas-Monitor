import React = require('react')
import { findDOMNode } from 'react-dom'
import { BottomButton, ButtonsHolder } from '../elements/elements'
import { monitorChangeHack } from '../services/KeyboardHacks'
import ReactTooltip = require('react-tooltip')

interface ISettingsButtonsComponentProps {
}

export default class SettingsButtonsComponent extends React.Component<ISettingsButtonsComponentProps, any> {
  render () {
    return <ButtonsHolder>
      <BottomButton
        data-tip='Cycle Monitor Types'
        onClick={() => {
          ReactTooltip.hide(findDOMNode(this.refs.foo))
          monitorChangeHack()
        }}
      />
      <ReactTooltip effect='solid' type='info' delayShow={700}/>
    </ButtonsHolder>
  }
}
