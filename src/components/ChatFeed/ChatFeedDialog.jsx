import React from 'react';
import _ from 'lodash'
import Message from './Message'

const isMyMessage = (userName, message) => {
    if(_.isEmpty(message, 'sender.username') || _.isEmpty(message, 'sender')) {
        return false;
    }

    return userName === message.sender.username;
}

const ChatFeedDialog = (props) => {
    const { chat, userName, messages } = props;

    const renderMessages = () => {
        if(_.isEmpty(messages)) {
            return null;
        }
        
        const keys = Object.keys(messages);
    
        return keys.map((key, index) => {
            const message = messages[key];
    
            return (
                <div key={`msg_${index}`} >
                    <div className="message-block">
                        <Message 
                            message={message} 
                            isMyMessage={isMyMessage(userName, message)}
                        />
                    </div>
                </div>
            );
        });
    };

    if (!chat) return <div />;

    return (
        <>
            {renderMessages()}
        </>
    )
}

export default ChatFeedDialog
