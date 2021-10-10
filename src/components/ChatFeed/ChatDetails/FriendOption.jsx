import React from 'react'

const FriendOption = ({ friendName, key, onSelect }) => {

    const handleClick = (e) => {
        onSelect(e.target.value);
    }

    return (
        <div className='friend-option'>
            <input 
                type="checkbox" 
                name={key} 
                value={friendName} 
                onClick={handleClick}
            />
            <label for={key}> {friendName} </label>
        </div>
    ) 
}

export default FriendOption
