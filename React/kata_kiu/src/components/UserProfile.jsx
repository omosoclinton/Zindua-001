import React, {useState} from "react";

function UserProfile() {
    const [user, setUser] = useState({name:"", age: 0}); // User now contains an empty object
    // user = {name:'', age:0}

    // create a function that updates our user
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUser({...user, [name]: value});
    };

    return (
        <div>
            <input 
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleChange} />
            <input 
                type="number"
                name="age"
                placeholder="Age"
                value={user.age}
                onChange={handleChange} />
            <h2>{user.name}, {user.age} years old</h2>
        </div>
    );
}

export default UserProfile