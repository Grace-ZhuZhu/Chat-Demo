import React, { useState } from 'react';
import _ from 'lodash';
import { MinusOutlined, LockOutlined } from '@ant-design/icons'
import { removePerson } from 'react-chat-engine'; 
import UserAvatar from '../Message/UserAvatar';
import FriendsSelector from './FriendsSelector';
import { getFriendsList } from './ChatDetailsService';
import { ADMIN_NAME, ADMIN_AUTHENTIFICATION_INFO } from '../../Constants/Authinfo.jsx'
import './ChatDetails.css'

const ChatDetails = ({ 
    people, 
    authInfo, 
    onFriendAdded, 
    onMemberLeft
}) => {
    const [ showFriends, setShowFriends ] = useState(false);

    const handleAddFriend = () => {
        setShowFriends(true);
    }

    const handleRemoveMember = (username) => {
        const {chatID} = authInfo;
        removePerson(ADMIN_AUTHENTIFICATION_INFO, chatID, username, onMemberLeft);
    }

    const renderGroupMembers = () => {
        if(_.isEmpty(people)) {
            return null;
        }

        return people.map((p, index) => {
            const { person } = p;
            const { username } = person;
            const isAdmin = username === ADMIN_NAME;
            return (
                <div key={`{username}_index`}>
                    <UserAvatar user={ person } />
                    <span> {username} </span>

                    { isAdmin 
                        ? <LockOutlined /> 
                        : <MinusOutlined 
                            className='minus-icon'
                            onClick={(e) => handleRemoveMember(username)}
                        />
                    }
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

            <div className='invite-friends' onClick={handleAddFriend}> Invite Friends </div>

            { showFriends && 
                <FriendsSelector 
                    friends={getFriendsList(people)} 
                    authInfo={authInfo}
                    onFriendAdded={onFriendAdded}
                />
            }
        </div>
    )
}

export default ChatDetails
