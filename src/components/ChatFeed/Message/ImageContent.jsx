import React from 'react'

const ImageContent = ({ file, isMyMessage }) => {

    return (
        <div className="message-block">
          	<img
            	src={ file }
            	alt="message-attachment"
        		className="message-image"
          	/>
		</div>
    )
}

export default ImageContent
