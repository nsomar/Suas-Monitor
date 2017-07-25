import React = require('react')
import * as renderer from 'react-test-renderer'
import DeviceListComponent from '../DeviceListComponent'

test('renders device list', () => {
  const component = renderer.create(
    <DeviceListComponent
      iosDevices={[]}
      androidDevices={[]}
      selected='test'
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
