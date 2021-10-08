import React, { useState } from 'react';
import MessageForm from './MessageForm';
import ChatFeedHeader from './ChatFeedHeader';
import ChatDetailsSection from './ChatDetailsSection';
import ChatFeedDialog from './ChatFeedDialog';

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
      	
			<ChatFeedDialog 
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
