/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
import React, { useState } from 'react';
import _ from 'lodash';
import InfoSection from './InfoSection';
import FriendsSelector from './FriendsSelector';
import { getFriendsList } from './ChatDetailsService';
import GroupMemberRow from './GroupMemberRow';
import './ChatDetails.css';

const ChatDetails = ({
  userName,
  setSenderUser,
  people,
  authInfo,
  onFriendAdded,
  onMemberLeft,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showFriendsSection, setshowFriendsSection] = useState(false);

  const handleShowInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleAddFriend = () => {
    setshowFriendsSection(true);
  };

  const renderGroupMembers = () => {
    if (_.isEmpty(people)) {
      return null;
    }

    return people.map((p) => {
      const { person } = p;

      return (
        <GroupMemberRow
          person={person}
          userName={userName}
          authInfo={authInfo}
          setSenderUser={setSenderUser}
          onMemberLeft={onMemberLeft}
        />
      );
    });
  };

  return (
    <div className="chat-details-container">
      <InfoSection
        showInfo={showInfo}
        handleShowInfo={handleShowInfo}
      />

      <div className="members-section">
        Group Members
        {renderGroupMembers()}
      </div>

      <button className="invite-friends" onClick={handleAddFriend}> Invite Friends </button>

      { showFriendsSection
        && (
        <FriendsSelector
          friends={getFriendsList(people)}
          authInfo={authInfo}
          onFriendAdded={onFriendAdded}
        />
        )}
    </div>
  );
};

export default ChatDetails;
