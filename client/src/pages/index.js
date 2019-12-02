import React, { Component } from 'react'
import styled from 'styled-components'
import ReactSVG from 'react-svg'
import { Grid, Row, Col } from 'react-flexbox-grid';
import NYC from '../assets/svg/nyc-white.svg'
import { TweenMax, Sine } from 'gsap'
import ScrollMagic from 'scrollmagic'
import IndexText from '../components/Text/IndexText'
import ProjectListItem from '../components/Projects/ProjectListItem'


class Index extends Component {
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
   TweenMax.to('.index-heading span', 0.48, { y: 0, ease: (.38,.23,.35,1), delay: 0.86 })

   const controller = new ScrollMagic.Controller()
   let revealElements = document.getElementsByClassName("project")
   let projArray = []
   for (let i=0; i<revealElements.length; i++) {
      projArray.push(revealElements[i]);
    }
    projArray.forEach((proj, i) => {
      new ScrollMagic.Scene({
        triggerElement: proj, // y value not modified, so we can use element as trigger as well
        offset: 100,												 // start a little later
        triggerHook: 0.9,
        // reverse: false,
      })
        .setClassToggle(proj, "visible") // add class toggle
        .addTo(controller)
    })

  }

  render() {
    let state = this.state.data
    const ProjectList = state.map(function(project, i){
       return (
         <Col xs={12} sm={6} className="project">
          <div key={project._id} data-title={project.name}>
              <ProjectListItem project={project} counter={i} />
          </div>
        </Col>
        )
      })

    return(
      <div className='index'>
        <div className='index-text-wrapper'>
          <h1>
            <IndexText />
          </h1>
        </div>
        <div className='image-location-wrap'>
          <div className='image-location'>
            <div id='my-image'></div>
            <ReactSVG src={NYC} className='nyc' />
          </div>
        </div>
        <div className='project-list'>
          <Grid fluid>
            <Row>
              { ProjectList }
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}


export default Index
