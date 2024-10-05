import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Modal from "./components/Modal";
import EditingModal from "./components/EditingModal";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";
  const[users, setUsers] = useState();
  const[open, setOpen] = useState(false);
  const[eopen, setEopen] = useState(false);
  const[euser, setEuser] = useState();
  const navigate = useNavigate();

  async function fetchUsers(){
    const response = await axios.get(`${API_URL}/users`);
    console.log(response.data);
    setUsers(response.data);
  }

  async function insertUser(user){
    const final_user = {...user, id: users.length+1};
    await axios.post(`${API_URL}/users`, {final_user});
    setUsers((preValue) => {
      return [...preValue, final_user];
    });
    setOpen(false);
  }

  async function editUser(id){
    setEopen(true);
    console.log(id);
    const editUser = users.find(user => user.id == id);
    setEuser(editUser);
  }

  async function saveUser(user){
    await axios.put(`${API_URL}/users/${user.id}`, {user});
    const new_user = users.map(item => item.id == user.id ? {...item, ...user} : item);
    setUsers(new_user);
    setEopen(false);
  }

  async function deleteUser(id){
    await axios.delete(`${API_URL}/users/${id}`);
    const new_users = users.filter(item => item.id !== id);
    setUsers(new_users);
  }

  function handleOpen(){
    setOpen(true);
  }

  function navigateDetailed(id){
    const data = users.find(item => item.id == id);
    navigate('/detailed', {state: data});
  }

  const getRowStyle = (id) => {
    if(id % 2 == 0){
      return {backgroundColor: '#FEFAE0'};
    } else{
      return {backgroundColor: '#F2EED7'};
    }
  }

  useEffect(() => {
    fetchUsers()
  }, []);

    return (
      <div className="main-container">
          <button type="button" onClick={handleOpen} className="btn">Create New User</button>
          {open ? <Modal addUser={insertUser}/> : null}
          {eopen ? <EditingModal editUser={saveUser} euser={euser}/> : null}
          <table>
            <tbody>
            <tr className="header">
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
              <th></th>
              <td></td>
            </tr>
            {users ? 
            (users.map((user) => {
              return (
              <tr key={user.id} style={getRowStyle(user.id)} className="rows">
                <td onClick={() => navigateDetailed(user.id)} className="name-container">{user.name}</td>
                <td onClick={() => navigateDetailed(user.id)} className="name-container">{user.email}</td>
                <td onClick={() => navigateDetailed(user.id)} className="name-container">{user.website}</td>
                <td><button type="button" onClick={() => editUser(user.id)} className="btn">Edit</button></td>
                <td><button type="button" onClick={() => deleteUser(user.id)} className="btn">Delete</button></td>
                </tr>)
            })) : null
            } 
            </tbody>
          </table>
      </div>
    )
}

export default App
