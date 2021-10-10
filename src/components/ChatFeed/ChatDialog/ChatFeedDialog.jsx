import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import Message from '../Message/Message.jsx';
import { isMyMessage, getMessagesList, getDeteledMessagesList } from './ChatDialogService.jsx';
import ContextMenu from '../Message/ContextMenu.jsx';
import './ChatDialog.css';

const ChatFeedDialog = (props) => {
    const { chat, userName, messages, authInfo } = props;
    const [ messagesList, setMessagesList ] = useState(getMessagesList([]));

    useEffect(() => {
        const list = getMessagesList(messages);
        setMessagesList(list);
    }, [messages])

    const handleDeleteMessage = (messageId) => {
        const updatedList = getDeteledMessagesList(messagesList, messageId);
        setMessagesList(updatedList);
    }

    const renderMessages = () => {
        if (!chat) { 
            return <div /> 
        };

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
        </div>
    )
}

export default ChatFeedDialog
