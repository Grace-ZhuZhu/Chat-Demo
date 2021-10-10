import React from 'react';
import { SYSTEM_NOTIFICATION_TYPES } from '../ChatDialog/ChatDialogService';

const SystemNotification = ({ show, type, info, editMessage}) => {
    if(!show) {
        return null;
    }

    if (type === SYSTEM_NOTIFICATION_TYPES.DELETE_TEXT) {
        return (
            <div className='system-notification'>
                You have deleted a message. 
                <span className='edit' onClick={editMessage}> edit massage </span> 
            </div>
        )
    }

    if (type === SYSTEM_NOTIFICATION_TYPES.DELETE_MEDIA) {
        return (
            <div className='system-notification'>
                You have deleted a message. 
            </div>
        )
    }

    return null;
}

export default SystemNotification
