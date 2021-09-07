import React from 'react';

import './Button.css';

function AddButton(props) {
    return (
        <button className="delete-button" onClick={props.addData}>
            등록
        </button>
    )
}

export default AddButton
