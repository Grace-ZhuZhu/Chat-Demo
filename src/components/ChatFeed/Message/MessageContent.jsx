import React from 'react'
import TextContent from './TextContent';
import ImageContent from './ImageContent';
import { hasAttachment } from './MessageService.jsx';

const MessageContent = ({ message }) => {
    if (hasAttachment(message)) {
        return (
              <ImageContent
                file={message.attachments[0].file}
              />
        );
      }
    
      return (
        <TextContent 
            text={message.text} 
        />
      );
}

export default MessageContent
