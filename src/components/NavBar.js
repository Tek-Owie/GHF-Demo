import React, { useState } from 'react';
import { Link} from "gatsby"
import { slide as Menu } from 'react-burger-menu'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faIdBadge, faClipboardList, faHome } from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {
  
  const [menuState, setMenuOpen] = useState({menuOpen: false});

  const closeMenu = () => {
    setMenuOpen({menuOpen: false})
  }

  
  return (
    <>
        <TopNav className="sticky-top">
            
            <NavItems>
              <Link to="/" ><FontAwesomeIcon icon={faHome} color= "#d4af37"/> Home</Link>
              <Link to="/Services" ><FontAwesomeIcon icon={faClipboardList} color= "#d4af37"/> Services</Link>
              <Link to="/About"><FontAwesomeIcon icon={faIdBadge} color= "#d4af37"/> About</Link>
              <Link to="/Contact"><FontAwesomeIcon icon={faAddressBook} color= "#d4af37"/> Contact</Link>
              {/* <Logo><Img src={data.logo.publicURL}></Img></Logo> */}

            </NavItems>

            

            <SideMenu>
              <Menu isOpen={ menuState.menuOpen }>

                <Link className="menu-item" to="/" onClick={() => closeMenu() }>
                <FontAwesomeIcon icon={faHome} color= "#d4af37"/> Home
                </Link>
                
                <Link className="menu-item" to="/Services" onClick={() => closeMenu() }>
                <FontAwesomeIcon icon={faClipboardList} color= "#d4af37"/> Services
                </Link>

                <Link className="menu-item" to="/About" onClick={() => closeMenu() }>
                <FontAwesomeIcon icon={faIdBadge} color= "#d4af37"/> About
                </Link>

                <Link className="menu-item" to="/Contact" onClick={() => closeMenu() }>
                <FontAwesomeIcon icon={faAddressBook} color= "#d4af37"/> Contact
                </Link>

              </Menu>
            </SideMenu>

        </TopNav>
    </>

)}



const TopNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: hsl(227,2%,12%);
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1101;
  top: 0;
  width: 100vw;
`
const Logo = styled.div`
  padding: 1em 1em 0 1em;
`

const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin-top: 1em;
  a {
    color: #d4af37;
    text-align: center;
    padding: 1em;
    text-decoration: none;
    font-size: 1em;
    &:hover {
      color: #b09438;
    }
  }
  @media(max-width: 721px) {
    display: none;
  }
`

const SideMenu =  styled.div`
    /* Individual item */
    .bm-item {
      display: inline-block;
      /* Our sidebar item styling */
      text-decoration: none;
      margin-bottom: 10px;
      color: #d4af37;
      transition: color 0.2s;
    }
    /* Change color on hover */
    .bm-item:hover {
      color: white;
    }
    /* The rest copied directly from react-burger-menu docs */
    /* Position and sizing of burger button */
    .bm-burger-button {
      position: fixed;
      width: 26px;
      height: 26px;
      right: 36px;
      top: 36px;
    }
    /* Color/shape of burger icon bars */
    .bm-burger-bars {
      background: #373a47;
    }
    /* Position and sizing of clickable cross button */
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    /* Color/shape of close button cross */
    .bm-cross {
      background: #bdc3c7;
    }
    /* General sidebar styles */
    .bm-menu {
      background: hsl(227,2%,12%);
      padding: 2.5em 1.5em 0;
      font-size: 1.15em;
    }
    /* Morph shape necessary with bubble or elastic */
    .bm-morph-shape {
      fill: #373a47;
    }
    /* Wrapper for item list */
    .bm-item-list {
      color: #d4af37;
    }
    /* Styling of overlay */
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    @media(min-width: 720px) {
      display: none;
    }
`