
import '../assets/style/stylees.scss'
import {useRef, useState} from "react";
export function Adminka() {
    const [value, setvalue] = useState([
        {firstName: 'Mark', lastName:'Brown', gmail:'brown@gmail.com', id:1},
        {firstName: 'Cena', lastName: 'John', gmail: 'John@gmail.com', id:2},
        {firstName: 'Admin', lastName: 'admin', gmail: 'admin@gmail.com', id:3}
    ])
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const [gmail, setGmail] = useState('');

    const addUser = () => {
        if (firstName && lastName && gmail) {
            const setUser = {
                id: value.length + 1,
                firstName,
                lastName,
                gmail,
            }
        }
        setvalue((userss) => [...userss, {firstName: setFirstName, lastName: setLastName, gmail: setGmail}]);
        setFirstName('');
        setLastName('');
        setGmail('');
        // } else {
        //     alert('error');
        // }
    }
    const delatee = (id) => {
        setvalue((userss) => userss.filter((value) => value.id !== id));
    };
    const setview = useRef();
    return(
        <>
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
                            <button className="update">Update</button>
                            <button className="delatee" >View</button>
                        </td>
                    </tr>
                ))}

                </tbody>

                </table>
            {/*<form>*/}
                <input type='text'
                       placeholder='Employee First Name'
                       value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        ref={setview}
                />
                <input type='text'
                       placeholder='Employee Last Name'
                        value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                />
                <input type='gmail'
                       placeholder='Employee Email Id'
                        value={gmail}
                       onChange={(e) => setGmail(e.target.value)}
                />
                <button className="add" onClick={(setFirstName || setLastName  || setGmail === '' ? () => setview.current.focus() : {addUser})}
                    >Add</button>
            </>
    )
}