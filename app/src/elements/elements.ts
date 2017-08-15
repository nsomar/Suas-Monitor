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

export const DevicesHolder = styled.div`
  margin-bottom: 38px;
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

export const BottomButton = styled.div`
  background-image: url('assets/change-monitor.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 25px 25px;
  width: 37px;
  height: 37px;
  cursor: pointer;
  background-color: white;
  &:hover {
    background-image: url('assets/change-monitor-white.svg');
    background-color: #CF639A;
  }
  position: relative;
`

export const ButtonsHolder = styled.div`
  position: fixed;
  left:    0px;
  bottom:   0px;
  width: 20%;
  height: 37px;
  background-color: rgba(255, 255, 255, 0.8);
`

export const FullHeightDiv = styled.div`
  height: 100%;
`

export const InlineImage = styled.img`
  height: 20px;
  width: 20px;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: -3px;
`

export const Header1 = styled.h1`
  color: #CF639A;
  margin-bottom: .5em;
`

export const Header2 = styled.h4`
  color: #CF639A;
  margin-top: 1em;
  margin-bottom: .5em;
`

export const ShortcutKey = styled.code`
  font-weight: 600;
  background-color: #CF639A;
  color: white;
  padding: 0 0.3em;
  font-size: 15px;
  white-space: pre-wrap;
  display: inline-block;
  text-indent: 0px;
`

export const ListItem = styled.li`
  margin-bottom: 2px;
  text-indent: 0.5em;
  &:before {
    content: "■   ";
    font-size: 16px;
    font-weight: 600;
  }
`
export const List = styled.ul`
  list-style: none;
`
