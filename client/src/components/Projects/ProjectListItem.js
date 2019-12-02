import React from 'react'
import { Link } from 'react-router-dom'

const ProjectListItem = ({project, counter}) => (
      <Link to={`/${project.uri_name}`}>
        <div className="project-image-text-wrap">
          <div className="image-wrapper">
            <img src={project.preview_photo[0]} srcSet={project.preview_photo[0] + ' 1x,' + project.preview_photo[1] + ' 2x' } alt={project.preview_photo[2]} />
          </div>
          <div className='project-name'>
            <h2>{project.name}</h2>
          </div>
        </div>
      </Link>
)

export default ProjectListItem
