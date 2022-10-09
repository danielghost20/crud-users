import React from 'react'
import User from './User'

// THIS COMPONENT IS A LIST OF ALL USERS
const UserList = ({users, deleteUser, setUpdateInfo, setForm}) => {
  return (
    <div>

    <div className='list_users'>
      {users?.map (user => (
        <User 
        key={user.id}
          user={user}
          deleteUser = {deleteUser}
          setUpdateInfo = {setUpdateInfo}
          setForm = {setForm}
        />
      ))}
    </div>

    </div>
  )
}

export default UserList
