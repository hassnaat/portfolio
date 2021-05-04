import React from 'react';
import './Actions.css';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
const Actions = () => {
    const history = useHistory();
    const logout = ()=>{
        localStorage.removeItem('loginToken')
        history.push('/login')
    }
    return (
       
            <div className='admin__actions'>
                <Link  to='/admin/profile' >Update Profile</Link>
                <Link  to='/admin/skills' >Update Skills</Link>
                <Link  to='/admin/projects' >Update Projects</Link>
                <Link  to='/admin/resume' >Update Resume</Link>
                <button className='logout__btn' onClick={logout}> Logout</button>
            </div>
           )
}

export default Actions
