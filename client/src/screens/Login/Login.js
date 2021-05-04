import axios from 'axios';
import React, { useState } from 'react'
import './Login.css'
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const login =async (e)=>{
        e.preventDefault();
        try {
            const response = await axios({
                url:'/api/user/login',
                method:'post',
                data:{email,password}
            })
            if(response.data.error){
                return alert(response.data.error)
            }
            localStorage.setItem('loginToken',response.data.token)
            history.push('/admin')

        } catch (error) {
            alert('Can not login')
        }
    }
    return (
        <div className='login__wrapper'>
            <div className='login__box'>
                <h2>Admin Login</h2>
                <form onSubmit={login}>
                    <input name='email' type='email' placeholder='Email Address' value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input name='password' type='password' placeholder='Password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
