import React from 'react';

import './Title.css';

function Title(props) {
    return (
        <div className="title">
            <h2>{props.title}</h2>
            {props.subtitle}
        </div>
    )
}

export default Title
