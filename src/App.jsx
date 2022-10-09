import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import FormUsers from './components/FormUsers'

// URL 

const baseURL = 'https://users-crud1.herokuapp.com'

function App() {

  // STATES

  
  // THIS STATE CONTAINS INFORMATION ABOUT  USERS
  const [users, setUsers] = useState()
  
  // THIS STATE UPDATE AN USER
  const [updateInfo, setUpdateInfo] = useState()
  
  // THIS STATE RENDER THE FORM 
  const [form, setForm] = useState(false)


  // AXIOS (CALL API, METHODS HTTP (GET, POST, PATCH, DELETE))

  // AXIOS (GET) THIS METHOD GETS INFORMATION ABOUT USERS
  const getAllUsers  =() => {
    const url = `${baseURL}/users/`
    axios.get(url)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  // THIS METHOD CREATE A NEW USER AND SAVES THE USER IN THE DATABASE
  const createNewUser = (data) => {
    const url = `${baseURL}/users/`
    axios.post(url, data)
    .then(res => {
      console.log(res)
      getAllUsers()
    })
    .catch(err => console.log(err))


  }

  // THIS METHOD DELETE AN USER OF THE DATABASE
  const deleteUser = (id) => {
    const url = `${baseURL}/users/${id}/`
    axios.delete(url)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  // THIS METHOD UPDATE AN USER AND SAVES THE CHANGES
  const updateUser = (id, data) => {
    const url = `${baseURL}/users/${id}/`
    axios.patch(url, data) 
      .then(res => {
        console.log(res)
        getAllUsers()
      })
      .catch(err => console.log(err))

  }

// THIS USEEEFECT TAKES CARE OF EXECUTE THE REQUEST  TO DATABASE

  useEffect(()=> {
    getAllUsers()
  },[])

  // STRUCTURE OF THE APLICATION

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
