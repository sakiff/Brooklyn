import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? '#000d1a' : 'CD835f')};
  white-space: nowrap;
  border: none;
  outline: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};
  color: ${({ primary }) => (primary ? '#fff' : '000d1a')};
  font-size: ${({ big }) => (big ? '24px' : '14px')};
  text-transform: uppercase;

  &:hover {
    transform: translateY(-2px);
  }
`
