import React, { useState, useEffect } from 'react';
import { sendMessage } from 'react-chat-engine';
import UploadButton from './UploadButton.jsx';
import SubmitButton from './SubmitButton.jsx';
import { PLACE_HOLDER } from './MessageFormService.jsx';
import './MessageForm.css';

const MessageForm = ({ authInfo, content, onFinishEdit }) => {
	const {creds, chatID} = authInfo;
  	const [value, setValue] = useState(content);
	
	useEffect(() => {
		content && setValue(content);
    }, [content])

  	const handleChange = (event) => {
    	setValue(event.target.value);
  	};

  	const handleSubmit = (event) => {
    	event.preventDefault();

    	const text = value.trim();

    	if (text.length > 0) {
      		sendMessage(creds, chatID, { text });
    	}

    	setValue('');
		content && onFinishEdit();
  	};

  	const handleUpload = (event) => {
    	sendMessage(creds, chatID, { files: event.target.files, text: '' });
  	};

  	return (
		<div className="message-form-container">
    		<form className="message-form" onSubmit={handleSubmit}>
      			<input
        			className="message-input"
        			placeholder={PLACE_HOLDER}
        			value={value}
        			onChange={handleChange}
        			onSubmit={handleSubmit}
      			/>

				<UploadButton upload={handleUpload} />
      			<SubmitButton />
    		</form>
		</div>
  );
};

export default MessageForm;