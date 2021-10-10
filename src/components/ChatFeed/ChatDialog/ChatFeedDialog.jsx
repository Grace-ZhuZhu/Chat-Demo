import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Message from '../Message/Message.jsx';
import { isMyMessage, getMessagesList, getSingleMessage, getDeteledMessagesList, getSystemNotificationType } from './ChatDialogService.jsx';
import ContextMenu from '../Message/ContextMenu.jsx';
import './ChatDialog.css';
import SystemNotification from '../Message/SystemNotification.jsx';

const ChatFeedDialog = (props) => {
    const { chat, userName, messages, authInfo, onEditMessage } = props;
    const [ systemNotification, setSystemNotification ] = useState({
        show: false,
        type: null,
        info: null
    });
    const [ messagesList, setMessagesList ] = useState([]);

    useEffect(() => {
        const list = getMessagesList(messages);
        setMessagesList(list);
    }, [messages])

    const handleDeleteMessage = (messageId) => {
        const message = getSingleMessage(messages, messageId);
        if(message) {
            const updatedList = getDeteledMessagesList(messagesList, messageId);
            setMessagesList(updatedList);
            setSystemNotification({ 
                show: true,
                type: getSystemNotificationType(message),
                info: {text: message.text}
            });
        }
    }   

    const renderMessages = () => {
        if (!chat) { 
            return <div /> 
        };

        const messagesList =  getMessagesList(messages);
        if(_.isEmpty(messagesList)) {
            return null;
        }
    
        return messagesList.map((message, index) => {
            return (
                <div key={`msg_${index}`} >
                    <Message 
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
                editMessage={onEditMessage}
            />
        </div>
    )
}

export default ChatFeedDialog
