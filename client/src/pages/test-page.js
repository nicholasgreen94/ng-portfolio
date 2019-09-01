import React, { Component } from 'react'
const axios = require('axios')


class TestPage extends Component {

  componentDidMount() {
    axios.get('/api/projects')
         .then((res) => console.log(res))
         .catch((err) => console.log(err))
  }

  render() {
    return(
      <div>
      </div>
    )
  }
}

export default TestPage
