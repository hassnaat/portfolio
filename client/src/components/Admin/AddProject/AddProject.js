import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {getProjects} from '../../../redux/actions/projectsAction'
import './AddProject.css'
import {useHistory} from 'react-router-dom'
const AddProject = () => {
    const history = useHistory();
    const [title,setTitle] = useState();
    const [filekey,setFilekey] = useState(' ');
    const [image,setImage] = useState();
    const [url,setUrl] = useState();
    const [add,setAdd]=useState('');
    const[added,setAdded] = useState('');
    const dispatch = useDispatch();


    const handleSubmit =async (e) => {
        e.preventDefault();
        setAdd('Adding...')
        const data = new FormData();
        data.append('file',image)
        data.append('upload_preset','portfolio_images')
        data.append('cloud_name','dlrvqc6za')
        axios({
                url:'https://api.cloudinary.com/v1_1/dlrvqc6za/image/upload',
                method:'post',
                data
            })
            .then(uploaded=>{       
            axios({
                url:'/api/projects',
                method:'post',
                data:{
                    title,url,image:uploaded.data.url
                },
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('loginToken')
                }
            })
            .then(project=>{
                if(project.data.error){
                    setAdded('error')
                    setAdd('Add')
                }
                setAdded('added')
                e.target.disabled=false
                setAdd('Add')
            })
        })

    }
    useEffect(()=>{
        dispatch(getProjects())        
        if(!localStorage.getItem('loginToken')){
            history.push('/login')
            
        }
        
    },[dispatch,added])
    return (
        <div className='add__project'>
        {
            added==='error'?
            <p className='error__message' id='error__message'>Project Can not be added</p>:
            added==='added'?
            <p className='success__message' id='success__message'>New Project Added successfully</p>:
            <p className='add__message'>
                Fill The Following Fields
            </p>}
            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                <input type='text' placeholder='Project Title' required onChange={e=>setTitle(e.target.value)} value={title} />
                <input type='text'  placeholder='Project URL' required onChange={e=>setUrl(e.target.value)} value={url}/>
                <input type='file' key={filekey} accept='image/*' required onChange={e=>setImage(e.target.files[0])} />
                <button type='submit' className='add_project__btn'> {add===''?'Add':add}</button>
                
            </form>
        </div>
    )
}

export default AddProject;
