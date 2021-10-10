import React from 'react';
import './Message.css';

const SystemMessage = ({ message }) => {
    return (
        <div className='system-message'>
            { message.text }
        </div>
    )
}

export default SystemMessage
