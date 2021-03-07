import React from 'react';
import brand from '../../images/brand.jpg';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavItem,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="photo" src={brand} alt='brand' />
        </NavLink>      
        <NavMenu>
          <NavLink to='/Men' activeStyle>
            Men
          </NavLink>
          <NavLink to='/Women' activeStyle>
            Women
          </NavLink>
          <NavLink to='/Kids' activeStyle>
            Kids
          </NavLink>  
          <NavItem to='/Cart' activeStyle>
            Cart
          </NavItem>
          <Bars />
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
