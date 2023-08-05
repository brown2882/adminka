
import '../assets/style/stylees.scss'
import {memo, useEffect, useRef, useState} from "react";
import {useForm} from "react-hook-form";
export const Adminka = memo(() => {
    const [value, setvalue] = useState([
        {firstName: 'Mark', lastName:'Brown', gmail:'brown@gmail.com', age:20, id:1},
        {firstName: 'Cena', lastName: 'John', gmail: 'John@gmail.com', age:9, id:2},
        {firstName: 'Admin', lastName: 'admin', gmail: 'admin@gmail.com',age:80, id:3}
    ])
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const [gmail, setGmail] = useState('');
    const [age, setAge] = useState('');

    const addUser = () => {
        if (firstName && lastName && gmail) {
            const newUser = {
                id: value.length + 1,
                firstName,
                lastName,
                gmail,
                age,
            }

            setvalue((userss) => [...userss, newUser]);
            setFirstName('');
            setLastName('');
            setGmail('');
            setAge('');
        }
    }
    const delatee = (id) => {
        setvalue((userss) => userss.filter((user) => user.id !== id));
    };
    // const setview = useRef();

    //new homework
    const {register, handleSubmit, required} = useForm()
    const[loading, setloading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setloading(false)
    }, 2000)
    }, [])


    return(

        <>
            {loading === true
                ?
            <h1>Loading...</h1>
            :
            <>
            <table>
                <thead>
                    <tr className='head'>
                        <th className='th'>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email Id</th>
                        <th>Employee Age</th>
                        <th className='thl'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {value.map((user) => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.gmail}</td>
                        <td>{user.age}</td>
                        <td>
                            <button  className="delatee" onClick={() => delatee(user.id)}>Delate</button>
                            <button className="update">Update</button>
                            <button className="delatee" >View</button>
                        </td>
                    </tr>
                ))}

                </tbody>

                </table>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input type='text'
                       maxLength={4}
                       placeholder='Employee First Name'
                       value={firstName}
                       {...register("firstName", {required:true, maxLength:20 })}
                        onChange={(e) => setFirstName(e.target.value)}
                        // ref={setview}
                />
                <input type='text'
                       placeholder='Employee Last Name'
                        value={lastName}
                       {...register("lastName", { pattern: /^[A-Za-z]+$/i })}
                       onChange={(e) => setLastName(e.target.value)}
                />
                <input type='gmail'
                       placeholder='Employee Email Id'
                        value={gmail}
                       onChange={(e) => setGmail(e.target.value)}
                />
                <input type='number'
                       placeholder='00'
                       value={age}
                       {...register("age", {min:17, max:90 })}
                       onChange={(e) => setAge(e.target.value)}
                />
                <button className="add" onClick={addUser}
                    >Add</button>
            </form>
            </>
            }
        </>
    )

})
