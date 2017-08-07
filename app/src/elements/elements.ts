import styled from 'styled-components'

export const Device = styled.div`
  background: ${props => props.selected ? '#5A8DFB' : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
  font-weight: ${props => props.selected ? '600' : '400'};
  text-align: left;
  padding: 0px;
  padding-bottom: 14px;
  padding-top: 14px;
  border-bottom: 1px solid #F4F5F6;
  line-height: 18px;
`

export const DeviceName = styled.div`
  padding-left: 0.5em;
  font-size: 15px;
`

export const DeviceType = styled.div`
  padding-left: 0.6em;
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.selected ? 'white' : '#292929'};
`

export const Title = styled.div`
  padding-left: 0.6em;
  padding-top: 0.6em;
  padding-bottom: 5px;
  text-align: left;
  font-size: 20px;
  font-weight: 600;
  color: #CF639A;
  border-bottom: 1px solid #CF639A;
`
