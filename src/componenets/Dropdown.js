import React from 'react'
import styled from 'styled-components'
import { MenuData } from '../data/MenuData'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { Button } from './Button'

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(187, 131, 86, 0.95);
  diplay: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  top: 0;
`

const Icon = styled.div`
  position: absolute;
  cursor: pointer;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
`
const CloseIcon = styled(FaTimes)``
const DropdownWrapper = styled.div``

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: 15rem;
`
const DropdownLink = styled(Link)`
  diisplay: flex;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  list-style: none;
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {MenuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Button primary='true' round='true' big='true' to='/contact'>
            Contact Us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  )
}

export default Dropdown
