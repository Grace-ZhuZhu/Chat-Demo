export const SYSTEM_NAME = 'System';

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