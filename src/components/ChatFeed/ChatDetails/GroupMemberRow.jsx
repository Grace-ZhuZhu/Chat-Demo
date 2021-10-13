import React from 'react';
import { removePerson } from 'react-chat-engine';
import { MinusOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import UserAvatar from '../Message/UserAvatar';
import { ADMIN_NAME, ADMIN_AUTHENTIFICATION_INFO } from '../../Constants/Authinfo';

const GroupMemberRow = ({
  person,
  userName,
  authInfo,
  setSenderUser,
  onMemberLeft,
}) => {
  const { username } = person;
  const isCurrentUser = person.username === userName;
  const userClass = isCurrentUser && 'sender';
  const isAdmin = username === ADMIN_NAME;

  const handleRemoveMember = () => {
    if (isCurrentUser) {
      setSenderUser(ADMIN_NAME);
    }

    const { chatID } = authInfo;
    removePerson(ADMIN_AUTHENTIFICATION_INFO, chatID, username, onMemberLeft);
  };

  const handleUserChange = () => {
    if (isCurrentUser) {
      return;
    }
    setSenderUser(username);
  };

  return (
    <div key="{username}_index">
      <UserAvatar user={person} />
      <span>
        {' '}
        {username}
        {' '}
      </span>

      { isAdmin
        ? <LockOutlined className="lock-icon" />
        : (
          <MinusOutlined
            className="minus-icon"
            onClick={() => handleRemoveMember(username)}
          />
        )}

      <UserOutlined
        className={`user-icon ${userClass}`}
        onClick={() => handleUserChange(username)}
      />
    </div>
  );
};

export default GroupMemberRow;
