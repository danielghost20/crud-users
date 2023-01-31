import React from 'react'
import { AiFillDelete, AiFillEdit, AiOutlineGift } from "react-icons/ai";
import '../styles/user.css'

const User = ({user, deleteUser, setUpdateInfo, setForm}) => {

  // THIS FUNCTION EDIT AN USER AND DISPLAY THE FORM

  const handleEdit = () => {
    setUpdateInfo(user)
    setForm(false)
  }

  // STRUCTURE USERS (JSX)

  return (
    <article className='user_card'>
      <h2 className='user_card_title'>{user.first_name} {user.last_name}</h2>
      <ul className='user_card_ul'>
        <li><span>EMAIL</span>{user.email}</li>
        <li><span>BIRTHDAY</span><AiOutlineGift/>{user.birthday}</li>
      </ul>
      <div className='user_card_buttons'>
        <AiFillDelete className='button_delete' onClick={() => deleteUser(user.id)} />

        <AiFillEdit className='button_edit' onClick={handleEdit}/>
      </div>
    </article>
  )
}

export default User
