// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  width: 40%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? ' #334155' : '#1e293b')};
  border: none;
  cursor: pointer;
  outline: none;
  font-weight: 600;
  font-size: 14px;
  font-family: 'Roboto';
  background-color: #fff;
  padding-left: 24px;
  padding-right: 24px;
  padding: 12px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  width: 100%;
`
