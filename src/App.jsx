import React from 'react';
import ChatWindow from './components/ChatWindow';

const projectID = '79f9e728-233e-419e-987b-4a832fba2c90';
const userName = 'Anna';
const userSecret='123456';

const App = () => {
  return (
      <ChatWindow
        height = '100vh' 
        projectID = {projectID}
        userName = {userName}
        userSecret = {userSecret}
      />
  );
};

export default App;