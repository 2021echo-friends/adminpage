import React from 'react';

import './Button.css';

function DeleteButton(props) {
    return (
        <button className="delete-button" onClick={props.deleteData}>
            삭제
        </button>
    )
}

export default DeleteButton
