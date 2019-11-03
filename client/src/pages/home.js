import React, { Component } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import styled from 'styled-components'
import ReactSVG from 'react-svg'
import MyImage from '../assets/images/IMG_2893.jpg'
import NYC from '../assets/svg/nyc-white.svg'
import ProjectListItem from '../components/Projects/ProjectListItem'
const axios = require('axios')



class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      error: null,
    }
  }

  async componentDidMount() {
   try {
     const res = await fetch('/api/projects')
     const project = await res.json()
     this.setState({
       data: project
     })
   } catch (err) {
     console.log(err)
   }
  }

  render() {
    let state = this.state.data
    const ProjectList = state.map(function(project, i){
      {console.log(project)}
       return (
          <div className="project" key={project._id} data-title={project.name}>
            <ProjectListItem project={project} counter={i} />
          </div>
        )
      })
    return(
      <div>
        <IntroText>A mutli-disciplinary digital designer, developer, creator of websites, experiences, applications, and meaningful products.</IntroText>
        <div className='image-location' style={{ position: 'absolute', left: 0 }}>
          <img src={MyImage} alt="me" className='my-image' />
          <ReactSVG src={NYC} className='nyc' />
        </div>
        <div className="project-list">
          { ProjectList }
        </div>
      </div>
    )
  }
}

const IntroText = styled.h1`
  font-size: 34px;
  font-weight: 400;
  line-height: 1.2;
  max-width: 19rem;
`

export default Home
