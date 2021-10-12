import React from 'react';
import './ChatFeedHeader.css';

const ChatFeedHeader = ({title}) => {
    return (
        <div className="chat-title-container">
            <div className="chat-title">
                { title }
            </div>
      </div>
    )
}

export default ChatFeedHeader
