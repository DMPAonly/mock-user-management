import { useState } from "react";

function Modal(props){

    const [user, setUser] = useState({});

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setUser((preValue) => {
            return {...preValue, [name]: value};
        });
    }

    function handleSubmit(event){
        event.preventDefault();
        props.addUser(user);
    }

    
        return (
            <div className="form-modal">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={handleChange} value={user.name} required/>
                    <br></br>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" onChange={handleChange} value={user.email} required/>
                    <br></br>
                    <label htmlFor="phone">Phone No.</label>
                    <input type="text" id="phone" name="phone" onChange={handleChange} value={user.phone} required/>
                    <br></br>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" onChange={handleChange} value={user.username} required/>
                    <br></br>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" name="address" onChange={handleChange} value={user.address} required/>
                    <br></br>
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" onChange={handleChange} value={user.company}/>
                    <br></br>
                    <label htmlFor="website">Website</label>
                    <input type="text" id="website" name="website" onChange={handleChange} value={user.website}/>
                    <br></br>
                    <button type="submit" className="btn">Add User</button>
                </form>
            </div>
        )
}

export default Modal;