import React from 'react'

const UserAvatar = ({ user }) => {
    return (
        <img src={user.avatar} alt="Avatar" className="avatar" />
    )
}

export default UserAvatar
