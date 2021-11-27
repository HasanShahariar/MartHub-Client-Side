import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch(`https://pure-spire-90343.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleMakeAdmin = (user) =>{
        const id = user._id;
        // user.type = "admin";
        const url = `https://pure-spire-90343.herokuapp.com/users/${id}`;
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                alert("Update Successful")
            }
        })
    }
    return (
        <div className = " container justify-content-around mt-5 shadow rounded-3 p-5">
            
            {
                
                users.map(user => (
                    <div>
                        
                        <h4>{user.name}</h4>
                        <button onClick={() => handleMakeAdmin(user)} className="btn btn-warning">Make Admin</button>
                    </div>
                ))
            }
        </div>
    );
};

export default MakeAdmin;