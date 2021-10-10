import React from 'react';
import { PlusCircleOutlined } from "@ant-design/icons";
import './ChatFeedHeader.css';

const ChatFeedHeader = ({title, onExpand}) => {
    return (
        <div className="chat-title-container">
            <div className="chat-title">
                { title }
            </div>
            <PlusCircleOutlined 
                className='plus-icon' 
                onClick={onExpand}
            />
      </div>
    )
}

export default ChatFeedHeader
