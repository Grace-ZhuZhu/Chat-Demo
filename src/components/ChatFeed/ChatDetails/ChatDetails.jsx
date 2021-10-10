import React, { useState } from 'react';
import _ from 'lodash';
import UserAvatar from '../Message/UserAvatar';
import FriendsSelector from './FriendsSelector';
import { getFriendsList } from './ChatDetailsService';
import './ChatDetails.css'

const ChatDetails = ({ people, authInfo }) => {
    const [ showFriends, setShowFriends ] = useState(false);

    const handleAddFriend = () => {
        setShowFriends(true);
    }

    const renderGroupMembers = () => {
        if(_.isEmpty(people)) {
            return null;
        }

        return people.map(p => {
            const { person } = p;
            return (
                <div>
                    <UserAvatar user={ person } />
                    <span> {person.username} </span>
                </div>
            )
        })
    }

    return (
        <div className='chat-details-container'>
            <div className='members-section'>
                Group Members
                {renderGroupMembers()}
            </div>

            <div onClick={handleAddFriend}> Invite Friends </div>

            { showFriends && 
                <FriendsSelector 
                    friends={getFriendsList(people)} 
                    authInfo={authInfo}
                />
            }
        </div>
    )
}

export default ChatDetails
