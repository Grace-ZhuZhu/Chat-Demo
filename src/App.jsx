import React from 'react';
import ChatWindow from './components/ChatWindow';
import { PROJECT_ID, USER_PASSWORD } from './components/Constants/Authinfo.jsx';

const userName = 'Anna';

const App = () => {
  	return (
      	<ChatWindow
        	projectID = {PROJECT_ID}
        	userName = {userName}
        	userSecret = {USER_PASSWORD}
      	/>
  	);
};

export default App;