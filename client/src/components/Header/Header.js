import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, Row } from 'react-flexbox-grid';
import styled from 'styled-components'
import Navigation from './Navigation'

class Header extends React.Component{
  render() {
    return(
      <Grid fluid style={{ paddingRight: 0, paddingLeft: 0 }}>
        <Row style={{ marginRight: 0, marginLeft: 0 }}>
        <Head>
          <Navigation />
        </Head>
        </Row>
      </Grid>
    )
  }
}

const Head = styled.header`
width: 100%;
  position: relative;
  > a {
    display: inline-block;
  }
  .logo-link {
    display: inline-block;
    vertical-align: middle;
  }
  .main-logo {
    display: inline-block;
    width: 8.25rem;
    z-index: 1000;
    position: relative;
  }
`
export default Header
