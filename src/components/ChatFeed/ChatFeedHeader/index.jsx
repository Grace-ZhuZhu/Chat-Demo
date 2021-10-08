import React from 'react';
import { PlusCircleOutlined } from "@ant-design/icons";
import { getHeaderTitle } from './ChatFeedHeaderService.jsx';
import './ChatFeedHeader.css';

const ChatFeedHeader = ({chat, onExpand}) => {
    return (
        <div className="chat-title-container">
            <div className="chat-title">
                { getHeaderTitle(chat) }
            </div>
            <PlusCircleOutlined 
                className='plus-icon' 
                onClick={onExpand}
            />
      </div>
    )
}

export default ChatFeedHeader
