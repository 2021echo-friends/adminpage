import React from 'react';
import { useHistory } from 'react-router-dom';

import './Button.css';

function EditButton(props) {
    const history = useHistory();

    const onClickHandler = () => {
        history.push(props.path);
    }

    return (
        <button className="edit-button" onClick={onClickHandler}>
            수정
        </button>
    )
}

export default EditButton
