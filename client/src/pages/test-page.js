import React, { Component } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
const axios = require('axios')


class TestPage extends Component {

  componentDidMount() {
    // axios.get('/api/projects')
    //      .then((res) => console.log(res))
    //      .catch((err) => console.log(err))
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#js-scroll'),
      smooth: true,
      smoothMobile: true,
    });
  }

  render() {
    return(
      <div>
        <p>Hello there</p>
        <h1 data-scroll data-scroll-speed="1">Is this working</h1>
        <h2 data-scroll data-scroll-speed="2">Woah</h2>

      </div>
    )
  }
}

export default TestPage
