import React from 'react'

export const List = ({header, list}) => {
    return (
        <div>
            <h2 className="list-header">
                {header}
            </h2>
            <span className="list-links">
                {list}
            </span>
        </div>
    )
}   

export default List

