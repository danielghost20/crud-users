import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import '../styles/users_form.css'
import { AiFillCloseCircle } from "react-icons/ai";
const FormUsers = ({createNewUser, updateInfo, updateUser, setUpdateInfo, setForm}) => {

    const valorDefault = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        birthday: ''
    }

    const {handleSubmit, register, reset} = useForm ()

    useEffect(() => {
      if (updateInfo) {
        reset(updateInfo)
      }
    }, [updateInfo])

    const submit = data => {

      if (updateInfo) {
        updateUser(updateInfo.id, data)
        setUpdateInfo()
      } else { 
        createNewUser(data)
      }

        reset(valorDefault)
        setForm(true)
    }

    
  return (
    <form onSubmit={handleSubmit(submit)} className='form '> 
    <h3>{updateInfo ? 'Update User' : 'Create User'}</h3>
    <AiFillCloseCircle className='form_icom_close' onClick={() => setForm(true)} />

      <label htmlFor='first_name' >First Name</label>
      <input type='text' id='first_name' placeholder='write your first name' {...register('first_name')} />

      <label htmlFor='last_name' >Last Name</label>
      <input type='text' id='last_name' placeholder='write your last name' {...register('last_name')} />

      <label htmlFor='email' >Email</label>
      <input type='email' id='email' placeholder='write your email' {...register('email')} />

      <label htmlFor='password' >Password</label>
      <input type='password' id='password' placeholder='write your password' {...register('password')} />

      <label htmlFor='birthday' >Birthday</label>
      <input type='date' id='birthday'  {...register('birthday')} />

      <button className='form_button' >{updateInfo ? 'update' : 'create'}</button>

    </form>
  )
}

export default FormUsers
