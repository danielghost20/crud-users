import React from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineGift } from "react-icons/ai";
import '../styles/user.css'

const User = ({user, deleteUser, setUpdateInfo, setForm}) => {

  const handleEdit = () => {
    setUpdateInfo(user)
    setForm(false)
  }

  return (
    <article className='user_card'>
      <h2 className='user_card_title'>{user.first_name} {user.last_name}</h2>
      <ul className='user_card_ul'>
        <li><p>EMAIL</p>{user.email}</li>
        <li><p>BIRTHDAY</p><AiOutlineGift/>{user.birthday}</li>
      </ul>
      <div className='user_card_buttons'>
        <AiFillDelete className='button_delete' onClick={() => deleteUser(user.id)} />
        <AiFillEdit className='button_edit' onClick={handleEdit}/>
      </div>
    </article>
  )
}

export default User
