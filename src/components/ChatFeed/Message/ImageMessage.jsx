import React from 'react'
import { getClassNameForMyOrOtherMessage } from './MessageService.jsx';

const ImageMessage = ({ file, isMyMessage }) => {
    const myOrOtherMessageClass = getClassNameForMyOrOtherMessage(isMyMessage);

    return (
        <div className="message-block">
          	<img
            	src={ file }
            	alt="message-attachment"
        		className={ `message-image ${myOrOtherMessageClass}` }
          	/>
		</div>
    )
}

export default ImageMessage
