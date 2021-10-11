import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Message from '../Message/Message.jsx';
import { 
    isMyMessage, 
    getMessagesList, 
    getMessageById, 
    getDeletionType, 
    isSystemMessage 
} from './ChatDialogService.jsx';
import ContextMenu from '../Message/ContextMenu.jsx';
import SystemNotification from '../Message/SystemNotification.jsx';
import SystemMessage from '../Message/SystemMessage.jsx';
import './ChatDialog.css';

const ChatDialog = (props) => {
    const { chat, userName, messages, authInfo, onEditMessage } = props;
    const SYSTEM_NOTIFICATION_INITIAL_STATE = {
        show: false,
        type: null,
        info: null
    }
    const [ systemNotification, setSystemNotification ] = useState(SYSTEM_NOTIFICATION_INITIAL_STATE);
    const [ messagesList, setMessagesList ] = useState([]);
    const [ deletedMessage, setDeletedMessage ] = useState('');

    useEffect(() => {
        const list = getMessagesList(messages);
        setMessagesList(list);
    }, [messages])

    const handleDeleteMessage = (messageId) => {
        const message = getMessageById(messages, messageId);
        if(message) {
            setMessagesList(messagesList.filter(msg => msg.id !== messageId));
            setSystemNotification({ 
                show: true,
                type: getDeletionType(message)
            });
            message.text && setDeletedMessage(message.text);
        }
    }   

    const handleEditClick = () => {
        onEditMessage(deletedMessage);
        setSystemNotification(SYSTEM_NOTIFICATION_INITIAL_STATE)
    }

    const renderMessages = () => {
        if (!chat) { 
            return <div /> 
        };

        if(_.isEmpty(messagesList)) {
            return null;
        }
    
        return _.compact(messagesList).map((message, index) => {
            if(isSystemMessage(message)) {
                return (
                    <SystemMessage 
                        key={message.id} 
                        message={message} 
                    />
                )
            }
            
            return (
                <div key={`msg_${index}`} >
                    <Message 
                        key={message.id} 
                        message={message} 
                        isMyMessage={isMyMessage(userName, message)}
                    />
                </div>
            );
        });
    };

    return (
        <div className='chat-dialog-container'>
            <ContextMenu 
                authInfo={authInfo} 
                onDelete={handleDeleteMessage}
            />
            {renderMessages()}
            <SystemNotification 
                {...systemNotification} 
                editMessage={handleEditClick}
            />
        </div>
    )
}

export default ChatDialog
