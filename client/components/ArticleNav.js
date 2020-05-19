import React from 'react'

export const ArticleNav = (props) => {
    return (
        <div className="article-nav">
            <span onClick={props.handlePrev}> prev  </span>
            <span onClick={props.handleNext}> next </span>
        </div>
    )
}

export default ArticleNav
