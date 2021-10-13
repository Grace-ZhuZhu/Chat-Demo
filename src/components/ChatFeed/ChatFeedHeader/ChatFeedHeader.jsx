import React from 'react';
import './ChatFeedHeader.css';

const ChatFeedHeader = ({ title }) => (
  <div className="chat-title-container">
    <div className="chat-title">
      { title }
    </div>
  </div>
);

export default ChatFeedHeader;
