import React from 'react'
import { Switch, Link } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import ReactSVG from 'react-svg'

class Navigation extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      visible: false,
      menuText: 'MENU',
      toggleClass: 'menu-close',
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu(e) {
    e.stopPropagation()
    // If menu is visible, close it. If it's not then show it
    if (this.state.visible) {
      this.setState(state => ({
        visible: !this.state.visible,
        menuText: "MENU",
        toggleClass: "menu-close",
      }))
    } else {
      this.setState(state => ({
        visible: !this.state.visible,
        menuText: "CLOSE",
        toggleClass: "menu-open",
      }))
    }
  }

  render() {
    return(
      <div>
        <div className='logo-menu'>
          <Link to='/' className='logo-link'>
            <ReactSVG src={Logo} />
          </Link>
          <span className='mobile-nav-button' onClick={this.toggleMenu}>{this.state.menuText}</span>
        </div>
        <nav className={`main-nav ${this.state.toggleClass}`} role='navigation'>
          <div className='nav-wrapper'>
            <Switch>
              <ul className='nav-list' key={'list'}>
                <li><Link to='/'><span className='number'>01</span>Home</Link></li>
                <li><Link to='/projects'><span className='number'>02</span>Projects</Link></li>
                <li><Link to='/about'><span className='number'>03</span>About</Link></li>
                <li><a href='mailto:nicholasgreendesigns@gmail.com'><span className='number'>04</span>Contact</a></li>
              </ul>
            </Switch>
          </div>
        </nav>
      </div>
    )
  }
}


export default Navigation
