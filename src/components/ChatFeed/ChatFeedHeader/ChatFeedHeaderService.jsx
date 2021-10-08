export const getHeaderTitle = (chat) => {
    const groupName = chat ? chat.title : 'Group';
    const numberOfMembers = chat ? chat.people.length : 0 
    return `${groupName}(${numberOfMembers})`;
}