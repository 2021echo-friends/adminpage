import React from 'react';
import { useHistory } from 'react-router-dom';

import './Button.css';

function NewButton(props) {
    const history = useHistory();

    const onClickHandler = () => {
        if(props.path) {
            history.push(props.path);
        }
    }

    return (
        <button className="new-button" onClick={onClickHandler}>
            신규 등록
        </button>
    )
}

export default NewButton
