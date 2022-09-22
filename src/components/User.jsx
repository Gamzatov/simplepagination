import React from 'react'

const User = ({users}) => {
    console.log(users)
    return (
        <div>
            {
                users.map((el) =>
                    <div className='user-wrapper'>
                        <div className="user-avatar">
                            <img className='avatar' src={el.avatar} alt="avatar"/>
                        </div>
                        <div className="user-name">
                            <p>
                                {el.first_name} {el.last_name}
                            </p>
                            <p className="user-email">
                                {el.email}
                            </p>
                        </div>
                    </div>)
                }
        </div>

    )
}
export default User;
