import { ALL_USERS } from '../../Constants/Authinfo';

export const getFriendsList = (members) => {
  const memberNames = members.map((m) => m.person.username);
  return ALL_USERS.filter((friend) => !memberNames.includes(friend));
};

export const isCurrentUser = (username, userName) => username === userName;
