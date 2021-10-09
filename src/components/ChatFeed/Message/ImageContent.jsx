import React from 'react'

const ImageContent = ({ file, isMyMessage }) => {

    return (
        <img
            src={ file }
            alt="message-attachment"
        	className="message-image"
        />
    )
}

export default ImageContent
