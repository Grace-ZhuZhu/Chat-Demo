import React from 'react';
import { PlusCircleOutlined } from "@ant-design/icons";
import './ChatFeedHeader.css';

const ChatFeedHeader = ({chat, onExpand}) => {
    return (
        <div className="chat-title-container">
            <div className="chat-title">
                {`${chat ? chat.title : 'Group'}(${chat ? chat.people.length : 0 })`}
            </div>
            <PlusCircleOutlined 
                className='plus-icon' 
                onClick={onExpand}
            />
      </div>
    )
}

export default ChatFeedHeader
