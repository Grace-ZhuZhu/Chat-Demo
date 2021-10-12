import React, { useState } from 'react';
import _ from 'lodash';
import { MinusOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { removePerson } from 'react-chat-engine'; 
import UserAvatar from '../Message/UserAvatar';
import FriendsSelector from './FriendsSelector';
import { getFriendsList, isCurrentUser } from './ChatDetailsService';
import { ADMIN_NAME, ADMIN_AUTHENTIFICATION_INFO } from '../../Constants/Authinfo.jsx'
import './ChatDetails.css'

const ChatDetails = ({ 
    userName,
    setSenderUser,
    people, 
    authInfo, 
    onFriendAdded, 
    onMemberLeft
}) => {
  	const [ showInfo, setShowInfo ] = useState(false);
    const [ showFriendsSection, setshowFriendsSection ] = useState(false);

    const handleShowInfo = () => {
		setShowInfo(!showInfo);
  	}

    const handleAddFriend = () => {
        setshowFriendsSection(true);
    }

    const handleRemoveMember = (username) => {
        if(isCurrentUser(username, userName)) {
            setSenderUser(ADMIN_NAME);
        }

        const {chatID} = authInfo;
        removePerson(ADMIN_AUTHENTIFICATION_INFO, chatID, username, onMemberLeft);
    }

    const handleUserChange = (username) => {
        if(isCurrentUser(username, userName)) {
            return;
        }
        setSenderUser(username);
    }

    const renderGroupMembers = () => {
        if(_.isEmpty(people)) {
            return null;
        }

        return people.map((p, index) => {
            const { person } = p;
            const { username } = person;
            const isAdmin = username === ADMIN_NAME;
            const userClass = isCurrentUser(username, userName) && 'sender' ;

            return (
                <div key={`{username}_index`}>
                    <UserAvatar user={ person } />
                    <span> {username} </span>

                    { isAdmin 
                        ? <LockOutlined className='lock-icon' /> 
                        : <MinusOutlined 
                            className='minus-icon'
                            onClick={(e) => handleRemoveMember(username)}
                        />
                    }

                    <UserOutlined 
                        className={`user-icon ${userClass}`}
                        onClick={(e) => handleUserChange(username)}
                    />
                </div>
            )
        })
    }

    return (
        <div className='chat-details-container'>
            { showInfo && (
                <div className='info-section'>
                    Info:
                    <ul>
                        <li><MinusOutlined className='minus-icon'/>  Remove member </li>
                        <li><UserOutlined className='user-icon'/>  Login as current user </li>
                        <li>Right click - Delete a message </li>
                        <li>Each user can only delete his/her own messages </li>
                        <li>Sending messages takes a few seconds till the server responds, please be patient </li>
                    </ul>
                </div>
                )
            }
            <div className='info-button' onClick={handleShowInfo}>
                { showInfo? 'Hide Info' : 'Show info' }
            </div>

            <div className='members-section'>
                Group Members
                {renderGroupMembers()}
            </div>

            <div className='invite-friends' onClick={handleAddFriend}> Invite Friends </div>

            { showFriendsSection && 
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
