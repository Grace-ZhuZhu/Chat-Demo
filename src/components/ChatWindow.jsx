/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ChatEngineWrapper } from 'react-chat-engine';

import ChatEngine from './ChatEngine';

const ChatWindow = (props) => (
  <ChatEngineWrapper>
    <ChatEngine {...props} />
  </ChatEngineWrapper>
);

export default ChatWindow;
