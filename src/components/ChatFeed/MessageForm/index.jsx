import React, { useState } from 'react';
import { sendMessage } from 'react-chat-engine';
import UploadButton from './UploadButton.jsx';
import SubmitButton from './SubmitButton.jsx';
import { PLACE_HOLDER } from './MessageFormService.jsx';
import './MessageForm.css';

const MessageForm = (props) => {
  	const { chatId, creds } = props;
  	const [value, setValue] = useState('');

  	const handleChange = (event) => {
    	setValue(event.target.value);
  	};

  	const handleSubmit = (event) => {
    	event.preventDefault();

    	const text = value.trim();

    	if (text.length > 0) {
      		sendMessage(creds, chatId, { text });
    	}

    	setValue('');
  	};

  	const handleUpload = (event) => {
    	sendMessage(creds, chatId, { files: event.target.files, text: '' });
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