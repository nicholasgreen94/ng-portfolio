import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import ReactSVG from 'react-svg'


class Header extends React.Component{
  render() {
    return(
      <header className="main-header">
        <ReactSVG src={Logo} />
      </header>
    )
  }
}

export default Header
