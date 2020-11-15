import React, {useState, useEffect} from 'react';

import {getUsers} from '../api/jsonPlaceholder';
import UserCardComponent from './UserCardComponent';


function HomeComponent() {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(async () => {
        let jsonUsers;
        if(!localStorage.getItem('users')){
            jsonUsers = await getUsers();
            localStorage.setItem('users', JSON.stringify(jsonUsers));
        }else{
            jsonUsers = JSON.parse(localStorage.getItem('users'));
        }
        // setTimeout(() => {
        setUsers(jsonUsers);
        // }, 3000);
    },[]);

    const onSelectUser = userId => {
        const user = users.find(user => user.id === userId);
        setSelectedUser(user);
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Home Page</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>
            <div className="row">
                <div className="col-md-4">
                <ul className="list-group">
                    <li className="list-group-item active">Users</li>
                    {
                        users.map(user => <li key={user.id} 
                                              onClick={() => 
                                              onSelectUser(user.id)} className="list-group-item">{user.name}</li>)
                    }
                </ul>
                {
                    !users.length && <img src="images/loader.gif" />
                }
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-4">
                            <UserCardComponent user={selectedUser} />
                        </div>
                        <div className="col-md-4">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeComponent;