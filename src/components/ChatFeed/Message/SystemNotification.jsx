import React from 'react';
import { SYSTEM_NOTIFICATION_TYPES } from '../ChatDialog/ChatDialogService';

const SystemNotification = ({ show, type, info, editMessage}) => {
    if(!show) {
        return null;
    }

    if (type === SYSTEM_NOTIFICATION_TYPES.DELETE_TEXT) {
        return (
            <div>
                You have deleted a message. 
                <span onClick={editMessage}> edit </span> 
            </div>
        )
    }

    if (type === SYSTEM_NOTIFICATION_TYPES.DELETE_MEDIA) {
        return (
            <div>
                You have deleted a message. 
            </div>
        )
    }
    
    if (type === SYSTEM_NOTIFICATION_TYPES.WELCOME) {
        if (type === SYSTEM_NOTIFICATION_TYPES.DELETE_TEXT) {
            return (
                <div>
                    { `Welcome ${info.username}!` }
                </div>
            )
        }
    }

    return null;
}

export default SystemNotification
