import React from 'react';
import { useHistory } from 'react-router-dom';

import './Button.css';

function EditButton() {
    const history = useHistory();

    const onClickHandler = () => {
        history.goBack();
    }

    return (
        <button className="cancel-button" onClick={onClickHandler}>
            취소
        </button>
    )
}

export default EditButton
