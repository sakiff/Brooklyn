import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData'
import { css } from 'styled-components'
import { Button } from './Button'
import { CgMenuRight } from 'react-icons/cg'

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: rgba(6, 6, 6, 0.8);
`

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0rem 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`

const Logo = styled(Link)`
  ${NavLink}
`

const MenuBars = styled(CgMenuRight)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    background-size: contain;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavMenuLinks = styled(Link)`
  ${NavLink}
`

const Navbtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to='/'>BROOKLYN</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {MenuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <Navbtn>
        <Button to='/contact' primary='true'>
          Contact Us
        </Button>
      </Navbtn>
    </Nav>
  )
}

export default Navbar
