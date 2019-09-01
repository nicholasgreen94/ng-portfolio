import React from 'react';
import TestPage from './pages/test-page'
import { Route, Switch, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Typekit from 'react-typekit'
import Analytics from 'react-router-ga'
import logo from './assets/images/logo.png'
import logo2x from './assets/images/logo@2x.png'
import logo3x from './assets/images/logo@3x.png'
import './App.css';


class App extends React.Component {
  render() {
  return(
      <Route render={({location}) => (
        <div>
          <Analytics id="UA-114430954-1">
            <Typekit kitId="phl2bvx" />
            <Helmet>
              <meta charSet="utf-8" />
              <title>Nicholas Green &#8226; Mutli-disciplinary digital designer, developer, creator of websites, experiences, applications, and meaningful products. </title>
              <meta name="description" content="I'm a UI / UX Designer and Full Stack Developer living in New York City." />
              <meta http-equiv="x-ua-compatible" content="ie=edge" />
              <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
              <meta keywords="New York, New York City, NYC, Brooklyn, UI, UX, User Experience, User Interface, User Interaction, HTML, CSS, JavaScript, Websites, Website Design, Website Developer, Web Developer, Nicholas, Green, Nicholas Green, Graphic Design, Design" />
              <meta name='google-site-verification' content='hyzXFGFjk3fC3uZpibiq6tw6C4RBTDJRB4ARJ9U9PbY' />
            </Helmet>
            <a href="#skip" id="skip_nav">{"Skip Nav"}</a>
            <a id="skip">{''}</a>
            <div className="App">
              <img srcSet={logo + ' 1x, ' + logo2x + ' 2x, ' + logo3x + ' 3x'} src={logo2x} alt="Nicholas Green" />
            </div>
          </Analytics>
        </div>
      )} />
    )
  }
}

const AppRoutes = withRouter(App)

export default AppRoutes
