import React, { useState } from 'react';
import MessageForm from './MessageForm/MessageForm.jsx';
import ChatFeedHeader from './ChatFeedHeader/ChatFeedHeader.jsx';
import ChatDetailsSection from './ChatDetails/ChatDetails.jsx';
import ChatDialog from './ChatDialog/ChatFeedDialog.jsx';
import './ChatFeed.css';

const ChatFeed = (props) => {
  const { 
	  chats, 
	  activeChat, 
	  userName, 
	  messages,
	  creds 
	} = props;

  const authInfo = {
	creds,
	chatID: activeChat
  }

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
				authInfo={authInfo}
			/>

       		<MessageForm authInfo={authInfo} />
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
