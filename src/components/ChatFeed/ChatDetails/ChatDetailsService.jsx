/* eslint-disable import/prefer-default-export */
import { ALL_USERS } from '../../Constants/Authinfo';

export const getFriendsList = (members) => {
  const memberNames = members.map((m) => m.person.username);
  return ALL_USERS.filter((friend) => !memberNames.includes(friend));
};
