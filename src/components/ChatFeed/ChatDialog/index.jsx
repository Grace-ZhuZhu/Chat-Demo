import React from 'react';
import _ from 'lodash';
import Message from '../Message/index.jsx';
import { isMyMessage, getMessagesList } from './ChatDialogService.jsx';

const ChatFeedDialog = (props) => {
    const { chat, userName, messages } = props;

    const renderMessages = () => {
        if (!chat) { 
            return <div /> 
        };

        if(_.isEmpty(messages)) {
            return null;
        }
        
        const messagesList = getMessagesList(messages);
    
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
        <>
            {renderMessages()}
        </>
    )
}

export default ChatFeedDialog
