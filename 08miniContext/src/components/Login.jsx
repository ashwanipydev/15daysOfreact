import React, {useState, useContext} from "react";

 export default function Login(){
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = ()=>{

    }
    return(
        <div>
            <h1>Loging</h1>
            <input 
                value={username}
                type="text" placeholder="username" />
            <input type="text" placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}