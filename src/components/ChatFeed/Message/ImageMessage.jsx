import React from 'react'

const ImageMessage = ({ file, isMyMessage }) => {
    const isMyMessageClass = isMyMessage ? 'my-message' : 'otherMessage';

    return (
        <div className="message-block">
          	<img
            	src={ file }
            	alt="message-attachment"
        		className={ `message-image ${isMyMessageClass}` }
          	/>
		</div>
    )
}

export default ImageMessage
