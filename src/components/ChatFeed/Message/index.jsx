import React from 'react';
import _ from 'lodash';
import TextMessage from './TextMessage';
import ImageMessage from './ImageMessage';
import './Message.css';

const Message = ({message, isMyMessage}) => {
    if (!_.isEmpty(message.attachments)) {
        return (
          		<ImageMessage
            		file={message.attachments[0].file}
            		isMyMessage={isMyMessage}
          		/>
        );
      }
    
      return (
		<TextMessage 
			text={message.text} 
			isMyMessage={isMyMessage}
		/>
      );
}

export default Message
