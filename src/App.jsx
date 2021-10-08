import React from 'react';
import { ChatEngine } from 'react-chat-engine';

const projectID = '79f9e728-233e-419e-987b-4a832fba2c90';
const chatID = 61356;
const chatAccessKey = 'ca-4372875b-8719-402f-9926-257f6a796404';
const userName = 'Lisa';
const userSecret='123456';

const App = () => {
  return (
      <ChatEngine
        height = '100vh' 
        projectID = {projectID}
        userName = {userName}
        userSecret = {userSecret}
      />
  );
};

export default App;