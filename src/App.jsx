import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import FormUsers from './components/FormUsers'

const baseURL = 'https://users-crud1.herokuapp.com'

function App() {

  const [users, setUsers] = useState()

  const [updateInfo, setUpdateInfo] = useState()

  const [form, setForm] = useState(false)


  const getAllUsers  =() => {
    const url = `${baseURL}/users/`
    axios.get(url)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  const createNewUser = (data) => {
    const url = `${baseURL}/users/`
    axios.post(url, data)
    .then(res => {
      console.log(res)
      getAllUsers()
    })
    .catch(err => console.log(err))


  }

  const deleteUser = (id) => {
    const url = `${baseURL}/users/${id}/`
    axios.delete(url)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const updateUser = (id, data) => {
    const url = `${baseURL}/users/${id}/`
    axios.patch(url, data) 
      .then(res => {
        console.log(res)
        getAllUsers()
      })
      .catch(err => console.log(err))

  }


  useEffect(()=> {
    getAllUsers()
  },[])

  return (
    <div className="App">
        <div className={form ? 'form_show' : 'users_form'}>
      <FormUsers 
        createNewUser = {createNewUser}
        updateInfo = {updateInfo}
        updateUser = {updateUser}
        setUpdateInfo = {setUpdateInfo}
        setForm = {setForm}
      />
    </div>
    <div className='App_title_button'>
    <h2>CRUD OF USERS</h2>
    <button onClick={() => setForm(false)}>Add user</button>
    </div>

    <div>
      <UserList 
        setForm = {setForm}
        users = {users}
        deleteUser = {deleteUser}
        setUpdateInfo = {setUpdateInfo}
      />
    </div>
    </div>
  )
}

export default App
