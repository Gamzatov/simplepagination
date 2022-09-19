import React from 'react'

const User = ({ first_name,avatar, email, last_name, id }) => {
  return (
    <div className='user-wrapper'>
      <div className="user-avatar">
        <img className='avatar' src={avatar} alt="avatar" />
      </div>
      <div className="user-name">
        <p>
          {first_name} {last_name}
        </p>
        <p className="user-email">
          {email}
        </p>
      </div>
    </div>
  )
}
export default User;
