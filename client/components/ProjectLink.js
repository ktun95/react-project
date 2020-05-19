import React from 'react'

export const ProjectLink = ({title, link, description}) => {
    return (
        <p>
            <a href={link}>{title}</a>  //
            {description}
        </p>
    )
}

// export default ProjectLink


//add propTypes

