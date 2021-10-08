import React, { useContext } from 'react'
import { ChatEngineContext, Socket, ChatFeed } from 'react-chat-engine'

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