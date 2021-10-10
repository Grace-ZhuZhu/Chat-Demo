

// Hard-coded for testing purpose
const ALL_FRIENDS = [
    'Anna', 'Lisa', 'Claus'
]

export const getFriendsList = (members) => {
    const memberNames = members.map(m => m.person.username);
    return ALL_FRIENDS.filter(friend => !memberNames.includes(friend));
}