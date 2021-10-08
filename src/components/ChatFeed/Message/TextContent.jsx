import React from 'react'

const TextContent = ({text, isMyMessage}) => {

    return (
        <div className="message-block">
        	<div className='message-text'>
          		{text}
        	</div>
		</div>
    )
}

export default TextContent
