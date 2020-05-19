import React, { useState, useEffect, useRef } from 'react'
import { ArticleNav } from './ArticleNav'

export const Section = ({ children }) => {
    const [articleIdx, setArticleIdx] = useState(0)
    const [height, setHeight] = useState(null)

    const initialSection = useRef(null)

    console.log(children)

    
     //use effect to retain the size styling calculating by the initial article?
    /*
    1st Render: children or children[0] is rendered, section height will be calculated from this
    useEffect: capture value of  
     */
    useEffect(() => {
        console.log(initialSection.current.clientHeight)
        if (Array.isArray(children)) { //only use this effect if there this component will receive multiple children
            // debugger;
            console.log('stateheight', height)
            console.log(initialSection.current.clientHeight)
            setHeight(initialSection.current.clientHeight)
        } 
    }, [])

    const handleNext = () => {
        console.log('current articleidx:', articleIdx)
        console.log(children.length)
        if (articleIdx === children.length - 1) {
            setArticleIdx(0)
            return
        }

        setArticleIdx(articleIdx + 1)
    }
    
    const handlePrev = () => {
        console.log('current articleidx:', articleIdx)
        if (articleIdx === 0) {
            setArticleIdx(children.length - 1)
            return
        }

        setArticleIdx(articleIdx - 1)
    }

    return (
        <div className="section" ref={initialSection} style={(height ? { height } : null)}>
            {Array.isArray(children) ?
                ([children[articleIdx],
                <ArticleNav handleNext={handleNext} handlePrev={handlePrev} />])
                : children}
        </div>
    )
}

export default Section
