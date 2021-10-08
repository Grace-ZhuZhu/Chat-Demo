import React, { useContext } from 'react'
import { ChatEngineContext, Socket } from 'react-chat-engine'
import ChatFeed from './ChatFeed/index.jsx';

const ChatEngine = (props) => {
    const context = useContext(ChatEngineContext);
    const chatFeedProps = {...context, ...props};

    return (
        <>
            <Socket {...props} />

            <ChatFeed {...chatFeedProps} /> 
        </>
    )
}

export default ChatEngine