
import '../assets/style/stylees.scss'
import {useState} from "react";
export function Adminka() {
    const [value, setvalue] = useState([
        {firstName: 'Mark', lastName:'Brown', gmail:'brown@gmail.com', id:1},
        {firstName: 'Cena', lastName: 'John', gmail: 'John@gmail.com', id:2},
        {firstName: 'Admin', lastName: 'admin', gmail: 'admin@gmail.com', id:3}
    ])
    const delatee = (id) => {
        setvalue((userss) => userss.filter((value) => value.id !== id));
    };

    return(
        <div>
            <table>
                <thead>
                    <tr className='head'>
                        <th className='th'>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th className='thl'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {value.map((user) => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gmail}</td>
                        <td>
                            <button  className="delatee" onClick={() => delatee(value.id)}>Delate</button>
                            <button>Update</button>
                            <button>View</button>
                        </td>
                    </tr>
                ))}

                </tbody>

                </table>
            <input type='text' placeholder='Employee First Name'/>
            <input type='text' placeholder='Employee Last Name'/>
            <input type='gmail' placeholder='Employee Email Id'/>
            <button>Add</button>
        </div>
    )
}