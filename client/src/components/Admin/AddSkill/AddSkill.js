import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import './AddSkill.css';
import {getSkills} from '../../../redux/actions/skillsActions';
const AddSkill = () => {
    const history = useHistory();
    const [name,setName] = useState('');
    const [perc,setPerc] = useState(1);
    const[added,setAdded] = useState('');
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSkills());
        if(!localStorage.getItem('loginToken')){
            history.push('/login')
            
        }
    },[dispatch,added])
    const handleSubmit =async (e) =>{
        e.preventDefault();
        setAdded('');
        const skill=await axios({
            method:'post',
            url:'/api/skills',
            headers:{
                'Authorization':'Bearer '+localStorage.getItem('loginToken')
            },
            data:{
                name:name,
                percentage:perc
            }
        })

    if(skill.status===200){
    setAdded('added')
    setName('')
    setPerc('')
    }
    else{
        setAdded('error')
    }

    }
    return (
        <div className='add__skill' >
            {
            added==='error'?
            <p className='error__message' id='error__message'>Skill Can not be added</p>:
            added==='added'?
            <p className='success__message' id='success__message'>New Skill Added successfully</p>:
            <p className='add__message'>
                Add Skill name and percentage
            </p>}
            <form onSubmit={handleSubmit}>
                <input placeholder='Skill Name' type='text' onChange={e=>setName(e.target.value)} value={name} />
                <input placeholder='%' type='number' min='1' max='100' onChange={e=>setPerc(e.target.value)} value={perc}/>
                <button type='submit' className='add__skill_btn'>Add</button>
            </form>
        </div>
    )
}

export default AddSkill
