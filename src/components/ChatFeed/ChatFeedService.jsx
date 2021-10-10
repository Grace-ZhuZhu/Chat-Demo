import { SYSTEM_MESSAGE_TYPES } from './ChatDialog/ChatDialogService';
import { sendMessage } from 'react-chat-engine';

export const SYSTEM_NAME = 'System';

const SYSTEM_AUTHENTIFICATION_INFO = {
    projectID: '79f9e728-233e-419e-987b-4a832fba2c90',
    userName: SYSTEM_NAME,
    userSecret: '123456'
}

export const getPeople = (chat) => {
    if(!chat) {
        return [];
    }

    return chat.people.filter(p => p.person.username !== SYSTEM_NAME );
}

export const getHeaderTitle = (chat, people) => {
    const groupName = chat ? chat.title : 'Group';
    const numberOfMembers = people.length
    return `${groupName}(${numberOfMembers})`;
}

export const getSystemMessage = ({type, info}) => {
    if(type === SYSTEM_MESSAGE_TYPES.WELCOME) {
        return `Welcome ${info.userName}`;
    }
}

export const sendWelcomeMessage = (userName, authInfo) => {
		const { chatID } = authInfo;
        const creds = SYSTEM_AUTHENTIFICATION_INFO;
		const text = getSystemMessage({
			type: SYSTEM_MESSAGE_TYPES.WELCOME,
			info: { userName }
		})
		sendMessage(creds, chatID, { text });
}