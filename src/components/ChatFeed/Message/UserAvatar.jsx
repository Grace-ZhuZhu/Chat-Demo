import React from 'react';

const UserAvatar = ({ user }) => (
  <img src={user.avatar} alt="Avatar" className="avatar" />
);

export default UserAvatar;
