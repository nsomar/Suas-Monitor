import styled from 'styled-components'

export const Device = styled.div`
  ${props => props.selected ?
    'background-image: linear-gradient(-180deg, #5A8DFB -30%, #CF639A 100%);' :
    'background: white'
  };
  color: ${props => props.selected ? 'white' : 'black'};
  font-weight: ${props => props.selected ? '600' : '400'};
  text-align: left;
  padding: 0px;
  padding-bottom: 16px;
  padding-top: 16px;
  border-bottom: 1px solid #F4F5F6;
  line-height: 16px;
`

export const DeviceName = styled.div`
  padding-left: 0.9em;
  font-size: 15px;
`

export const DeviceType = styled.div`
  padding-left: 1em;
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.selected ? 'white' : '#292929'};
`

export const Title = styled.div`
  padding-left: 0.5em;
  padding-top: 0.6em;
  padding-bottom: 0.6em;
  letter-spacing: 1px;
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  color: #CF639A;
  border-bottom: 1px solid #CF639A;
`

export const BottomButton = styled.image`
  position: absolute;
  left:    0px;
  bottom:   0px;
  background-image: url('assets/change-monitor.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px 25px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  &:hover {
    background-image: url('assets/change-monitor-white.svg');
    background-color: #CF639A;
  }
`

export const FullHeightDiv = styled.div`
  height: 100%;
`
