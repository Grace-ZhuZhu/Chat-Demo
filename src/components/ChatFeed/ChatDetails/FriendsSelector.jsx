import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import FriendOption from './FriendOption.jsx';
import { getSelectedNames } from './FriendsSelectorService.jsx';
import { addPerson } from 'react-chat-engine';

const FriendsSelector = ({ friends, authInfo, onFriendAdded }) => {
    const {creds, chatID} = authInfo;
    const [ friendList, setFriendList ] = useState({});

    useEffect(() => {
        const selectedState = friends.reduce((result, friend) => {
            result[friend] = { selected: false };
            return result;
        }, {});
        setFriendList(selectedState)
    }, [friends]); 

    const handleSelet = (friendName) => {
        const current = friendList[friendName];
        setFriendList({ 
            ...friendList,
            [friendName]: {
                selected: !current.selected
            }
        });
    }

    const handleSubmit = (event, values) => {
        event.preventDefault();
        const selected = getSelectedNames(friendList);
        selected.forEach(name => {
            addPerson(creds, chatID, name, onFriendAdded);
        });
    }

    const renderFriendOptions = () => {
        return friends.map((friendName, index) => {
            const key =`${friendName}_${index}`;

            return(
                <FriendOption 
                   friendName={friendName}
                   key={key}
                   id={key}
                   onSelect={handleSelet}
               />
           );
        })
    }

    if(_.isEmpty(friendList)) {
        return <div> No more friends to invite </div>;
    }

    return (
        <div className='friends-section'>           
            <form 
                className='friends-select' 
                onSubmit={handleSubmit} 
            >
                { renderFriendOptions() }
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default FriendsSelector
