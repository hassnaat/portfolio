import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './AdminHeader.css';
const AdminHeader = () => {
    const history = useHistory();
    useEffect(()=>{
        if(!localStorage.getItem('loginToken')){
            history.push('/login')
            
        }
    },[])
    return (
        <div className='admin__header'>
            <Link to='/admin'><h1 className='admin__heading'>Admin Panel</h1></Link> <hr/>
        </div>
    )
}

export default AdminHeader
