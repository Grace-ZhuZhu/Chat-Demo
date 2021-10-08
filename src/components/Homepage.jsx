
import React from 'react';
import { ChatEngineWrapper} from 'react-chat-engine';

import ChatEngine  from './ChatEngine.jsx';

const HomePage = (props) => {

    return (
        <ChatEngineWrapper>
            <ChatEngine {...props} />
        </ChatEngineWrapper>
    )
}

export default HomePage