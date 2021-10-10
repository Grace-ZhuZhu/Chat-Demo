import React, { useState, useEffect } from 'react';
import FriendOption from './FriendOption.jsx';
import { getSelectedNames } from './FriendsSelectorService.jsx';

const FriendsSelector = ({ friends, authInfo }) => {
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
    }

    const renderFriendOptions = () => {
        return friends.map((friendName, index) => {
            const key = `${friendName}_${index}`;
            return(
                <FriendOption 
                   friendName={friendName}
                   key={key}
                   onSelect={handleSelet}
               />
           );
        })
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
