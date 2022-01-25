import React from 'react';
import { useHistory } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'


function BackButton() {
    const history = useHistory();

    return <div>
        <FaArrowLeft size={25} onClick={() => history.goBack()} />

    </div>;
}

export default BackButton;
