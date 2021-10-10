import React from 'react'

const FriendOption = ({ friendName, id, onSelect }) => {

    const handleClick = (e) => {
        onSelect(e.target.value);
    }

    return (
        <div className='friend-option'>
            <input 
                type="checkbox" 
                name={id} 
                value={friendName} 
                onClick={handleClick}
            />
            <label htmlFor={id}> {friendName} </label>
        </div>
    ) 
}

export default FriendOption
