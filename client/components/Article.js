import React from 'react'

export const Article = ({header, content}) => {
   
    return (
        <div className="article">
            <h2 className="article-header">{header}</h2>
            <div className="article-content">{content}</div>
        </div>
    )
}

// export default Article

