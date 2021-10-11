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
	  	creds 
	} = props;
	
  	const authInfo = {
		creds,
		chatID: activeChat
  	}
  	const chat = chats && chats[activeChat];
  	const people = getPeople(chat);
  	const chatTitle = getHeaderTitle(chat, people);

  	const [ detailsExpanded, setDetailsExpanded ] = useState(true);
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
					onFriendAdded={handleFriendAdded}
					onMemberLeft={handleMemberLeft}
				/> :
				null
			}
    	</div>
  	);
};

export default ChatFeed;
