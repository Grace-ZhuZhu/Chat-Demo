import React, { useContext } from 'react'
import { ChatEngineContext, Socket, ChatFeed, getLatestMessages } from 'react-chat-engine'

const ChatEngine = (props) => {
    const context = useContext(ChatEngineContext);
    const chatFeedProps = {...context, ...props};

    getLatestMessages(
        props, props.chatID, 45,
        (id, messages) => {
          context.setMessages(messages)
        }
      )

    return (
        <>
            <Socket {...props} />

            <ChatFeed {...chatFeedProps} /> 
        </>
    )
}

export default ChatEngine