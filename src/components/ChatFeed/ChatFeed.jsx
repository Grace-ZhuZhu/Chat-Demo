import React, { useState } from 'react';
import MessageForm from './MessageForm/MessageForm.jsx';
import ChatFeedHeader from './ChatFeedHeader/ChatFeedHeader.jsx';
import ChatDetailsSection from './ChatDetails/ChatDetails.jsx';
import ChatDialog from './ChatDialog/ChatDialog.jsx';
import { 
	getPeople, 
	getHeaderTitle, 
	sendWelcomeMessage,
sendLeaveChatMessage 
} from './ChatFeedService.jsx';
import './ChatFeed.css';

const ChatFeed = (props) => {
  	const { 
	  	chats, 
	  	activeChat, 
	  	userName, 
	  	messages,
	  	creds,
		setSenderUser 
	} = props;
	
  	const authInfo = {
		creds,
		chatID: activeChat
  	}
  	const chat = chats && chats[activeChat];
  	const people = getPeople(chat);
  	const chatTitle = getHeaderTitle(chat, people);

  	const [ formContent, setFormContent ] = useState('');

  	const handleEditMessage = (content) => {
		setFormContent(content);
  	}

  	const handleFinishEdit = () => {
		setFormContent('');
  	}

  	const handleFriendAdded = (response) => {
		const { username } = response.person;
		sendWelcomeMessage(username, authInfo);
  	}
	
	const handleMemberLeft = (response) => {
		const { username } = response.person;
		sendLeaveChatMessage(username, authInfo);
  	}

  	return (
    	<div className="chat-feed-container">
			<div className="chat-feed">
     	 		<ChatFeedHeader 
	  				title={chatTitle} 
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

			<ChatDetailsSection 
				people={people} 
				authInfo={authInfo}
				onFriendAdded={handleFriendAdded}
				onMemberLeft={handleMemberLeft}
				setSenderUser={setSenderUser}
				userName={userName}
			/> 
    	</div>
  	);
};

export default ChatFeed;
