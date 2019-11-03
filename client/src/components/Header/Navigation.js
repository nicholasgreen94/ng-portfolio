import React from 'react'
import { Switch, Link } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import ReactSVG from 'react-svg'
import styled from 'styled-components'

class Navigation extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      menuText: 'MENU',
      toggleClass: 'menu-close'
    }
    // this.handleMouseDown = this.handleMouseDown.bind(this)
    // this.hideMenuOnDesktop = this.toggleMenu.bind(this)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(e) {
    e.stopPropagation()
    // If menu is visible, close it. If it's not then show it
    if (this.state.visible) {
      this.setState(state => ({
        visible: !this.state.visible,
        menuText: "MENU",
        toggleClass: "menu-close"
      }))
    } else {
      this.setState(state => ({
        visible: !this.state.visible,
        menuText: "CLOSE",
        toggleClass: "menu-open"
      }))
    }
  }

  render() {
    return(
      <div>
        <div className="logo-menu">
          <Link to="/" className='logo-link'>
            <ReactSVG src={Logo} />
          </Link>
          <span className='mobile-nav-button' onClick={this.toggleMenu}>{this.state.menuText}</span>
        </div>
        <nav className={`main-nav ${this.state.toggleClass}`}>
          <div className='nav-wrapper'>
            <Switch>
              <ul className="nav-list" key={1}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="mailto:nicholasgreendesigns@gmail.com">Contact</a></li>
              </ul>
            </Switch>
          </div>
        </nav>
      </div>
    )
  }
}

// const Nav = styled.div`
//   transform: translate3d(0, -50%, 0);
//   position: absolute;
//   top: 50%;
//   right: 0;
// `

export default Navigation
