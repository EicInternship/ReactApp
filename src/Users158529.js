import React from "react";
import { useState} from "react";
import { useEffect } from "react";
import { UserService158529 } from "./Service158529/UserService158529";
import './Users158529.css';




export const Users158529=()=>{
    const [users,setUsers]= useState([]);
    
useEffect(()=>{
    UserService158529().then((res) => setUsers(res.data));

},[]);
    
    
    
    
    return(
        <div className="user__info">

            {users.length>0 &&(

               <table className="table-style">

                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Images</th>
                    <th>Node_Id</th>
                    <th>Type</th>
                    
                    </tr>
                    {users.map(user1=>(
                    <tr key={user1.id}>
                    <td>{user1.id}</td>
                    <td>{user1.login}</td>
                    <td><img src={user1.avatar_url} alt="No Image"/></td>
                    <td>{user1.node_id}</td>
                    <td>{user1.type}</td>
                    </tr>
                ))}

            </table>
            


            )

            }
            
        </div>
    );
}