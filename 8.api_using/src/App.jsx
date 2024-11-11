import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'
const BASE_URL = "http://localhost:3005"

function App() {

  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  }
  const getUserById = async (userId) => {
    const response = await axios.get(BASE_URL + "/users/" + userId);
    console.log(response.data);
  }
  const createUser = async (newUser) => {
    const response = await axios.post(BASE_URL + "/users", newUser)
    console.log("response : " + response.data);
  }

  const updateUser = async (userId, updatedUser) => {
    await axios.put(BASE_URL + "/users/" + userId, updatedUser)
  }

  const deleteUserById = async (userId) => {
    const deletedResponse = await axios.delete(BASE_URL + "/users/" + userId)
    console.log(deletedResponse.data);
  }

  useEffect(() => {
    //getAllUsers();
    // getUserById(1);
    // const newUser = {
    // username: "bilal",
    // password: "1234"
    // }
    // createUser(newUser);
    //updateUser("b71e", {
    // username: "yakup",
    //password: "5555"
    //})
    //deleteUserById("b71e")

  }, [])

  return (
    <div>


    </div>
  )
}

export default App
