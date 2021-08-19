import React from 'react'

function Title(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.subtitle}
        </div>
    )
}

export default Title
