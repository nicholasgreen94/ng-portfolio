import React from 'react'
import { Link } from 'react-router-dom'


const ProjectListItem = ({project, counter}) => (
  <Link to={`/${project.uri_name}`}>
    <img src={project.photos[0][0]} srcSet={project.photos[0][0] + ' 1x,' + project.photos[1][1] + ' 2x' } alt={project.photos[0][2]} />
  </Link>
)

export default ProjectListItem
