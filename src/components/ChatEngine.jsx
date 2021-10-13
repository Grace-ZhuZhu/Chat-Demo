/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react';
import { ChatEngineContext, Socket } from 'react-chat-engine';
import ChatFeed from './ChatFeed/ChatFeed';

const ChatEngine = (props) => {
  const context = useContext(ChatEngineContext);
  const chatFeedProps = { ...context, ...props };

  return (
    <>
      <Socket {...props} />

      <ChatFeed {...chatFeedProps} />
    </>
  );
};

export default ChatEngine;
