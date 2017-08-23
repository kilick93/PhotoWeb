import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, NavItem} from 'react-materialize'
// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <Navbar brand='RobinOpra' right style={nav}>
      <NavItem><Link style={link} to='/'>Home</Link></NavItem>
      <NavItem><Link style={link} to='/e/photos'>Photos</Link></NavItem>
      <NavItem><Link style={link} to='/e/about'>About</Link></NavItem>
      <NavItem href='https://www.instagram.com/robinopra/'><a href='https://www.instagram.com/robinopra/'><img style={img} alt='instagram' src={require("../icons/ig.png")}/></a></NavItem>
    </Navbar>
  </header>
)


const img = {
  height:'20px',
  width:'20px',
  marginTop:'21px',
}

const nav = {
  backgroundColor : 'transparent',
}

const link = {
  color : 'black',
}
export default Header
