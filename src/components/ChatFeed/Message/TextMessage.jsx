import React from 'react'

const TextMessage = ({text, isMyMessage}) => {
    const isMyMessageClass = isMyMessage ? 'my-message' : 'otherMessage';

    return (
        <div className="message-block">
        	<div className={ `message-text ${isMyMessageClass}` }>
          		{text}
        	</div>
		</div>
    )
}

export default TextMessage
