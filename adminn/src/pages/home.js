import {Link, NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useState} from "react";


export function Home  ()  {
    const navigate = useNavigate();
    const{ register, handleSubmit } = useForm();
    const[login, setlogin] = useState([
        {login:'Mark', password:'Brown', id:1}
    ]);


    const onSumbit = (data) => {
        const { login: inputlogin, password: inputpassword } = data;
        const foundUser = login.find((user) => user.login === inputlogin && user.password === inputpassword
        );
        if (foundUser) {
            navigate("/Adminka");
        } else {
            alert("error");
        }
    }



    return(
        <>
            <form onSubmit={handleSubmit(onSumbit)}>
                <label>Login</label>
                <input
                    type='text'
                    {...register('login', {required:true})}
                ></input>
                <label>Password</label>
                <input
                    type='text'
                    {...register('password', {required:true} )}
                ></input>
                <button type='submit'>Send</button>
            </form>
        </>
    )
}