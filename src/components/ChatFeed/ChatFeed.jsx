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
  const people = chat && chat.people;

  const [ detailsExpanded, setDetailsExpanded ] = useState(false);
  const [ formContent, setFormContent ] = useState('');

  const handleExpandDetails = () => {
		setDetailsExpanded(!detailsExpanded);
  }

  const handleEditMessage = (content) => {
		setFormContent(content);
  }

  const handleFinishEdit = () => {
		setFormContent('');
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
				onEditMessage={handleEditMessage}
			/>

       		<MessageForm 
			   authInfo={authInfo} 
			   content={formContent}
			   onFinishEdit={handleFinishEdit}
			/>
		</div>

		{
			detailsExpanded ?
			<ChatDetailsSection 
				people={people} 
				authInfo={authInfo}
			/> :
			null
		}
    </div>
  );
};

export default ChatFeed;
