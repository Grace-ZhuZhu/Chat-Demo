import React, { useState } from 'react';
import MessageForm from './MessageForm/index.jsx';
import ChatFeedHeader from './ChatFeedHeader/index.jsx';
import ChatDetailsSection from './ChatDetails/index.jsx';
import ChatDialog from './ChatDialog/index.jsx';
import './ChatFeed.css';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const [state, setState] = useState({
    detailsExpanded: false,
  })

  const handleExpandDetails = () => {
		setState({...state, detailsExpanded: !state.detailsExpanded});
  }

  return (
    <div className="chat-feed-container">
		<div className="chat-feed">
     	 	<ChatFeedHeader 
	  			chat={chat} 
				onExpand={handleExpandDetails}
			/>
      	
			<ChatDialog 
				chat={chat}
				userName={userName}
				messages={messages}
			/>

       		<MessageForm {...props} chatId={activeChat} />
		</div>

		{
			state.detailsExpanded ?
			<ChatDetailsSection /> :
			null
		}
    </div>
  );
};

export default ChatFeed;
