import React from 'react'
import { getClassNameForMyOrOtherMessage } from './MessageService.jsx';

const TextMessage = ({text, isMyMessage}) => {
    const myOrOtherMessageClass = getClassNameForMyOrOtherMessage(isMyMessage);

    return (
        <div className="message-block">
        	<div className={ `message-text ${myOrOtherMessageClass}` }>
          		{text}
        	</div>
		</div>
    )
}

export default TextMessage
