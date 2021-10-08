import React from 'react';
import _ from 'lodash';

const Message = ({message, isMyMessage}) => {
    const isMyMessageClass = isMyMessage ? 'my-message' : 'otherMessage';

    if (!_.isEmpty(message.attachments)) {
        return (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className={ `message-image ${isMyMessageClass}` }
          />
        );
      }
    
      return (
        <div className={ `message-text ${isMyMessageClass}` }>
          {message.text}
        </div>
      );
}

export default Message
