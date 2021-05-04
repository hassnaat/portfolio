import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './UpdateProfile.css';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'
import {getUser} from '../../../redux/actions/userActions';
const UpdateProfile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {loading,error,user} = useSelector(state => state.user);
    const [id,setId]=useState('');
    const [name,setName] = useState('');
    const [image,setImage] = useState();
    const [role,setRole] = useState('');
    const [desc,setDesc] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const getId = () =>{
            if(user.data){
                user.data.map(user=>{
                    setId(user._id)
                    setImageUrl(user.image)
            })
            }
    }
    useEffect(()=>{
        dispatch(getUser());
        getId();
        if(!localStorage.getItem('loginToken')){
            history.push('/login')
            
        }
    },[dispatch])
    
    const handleSubmit =async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('file',image)
        data.append('upload_preset','portfolio_images')
        data.append('cloud_name','dlrvqc6za')
        if(image){
            axios({
                url:'https://api.cloudinary.com/v1_1/dlrvqc6za/image/upload',
                method:'post',
                data
            })
            .then(uploaded=>{       
              console.log(uploaded.data.url)
            axios({
                url:'/api/user/'+id,
                method:'put',
                data:{
                    name,role,image:uploaded.data.url,description:desc,email,password
                },
                headers:{
                    "Authorization":'Bearer '+localStorage.getItem('loginToken')
                }
            })
            .then(user=>{
                if(user.data.error){
                    console.log(user.data.error)
                    alert('Can not be updated')
                }
                else{
                    console.log(user.data)
                    alert('Updated Successfuly')
                }
            })
        })
        }
        else{
            axios({
                url:'/api/user/'+id,
                method:'put',
                data:{
                    name,role,image:imageUrl,description:desc,email,password
                },
                headers:{
                    "Authorization":'Bearer '+localStorage.getItem('loginToken')
                },
            })
            .then(user=>{
                    alert('Updated Successfully')
                    console.log(user)
            })
            .catch(error=>{
                alert(error)        
            })
        }

    }
    return (
        <div className='update__profile'>
        {
            loading?<h2>Loading Profile Data..</h2>:error?<h2>Error while loading profile data..</h2>:
            <> 
            {
                user.data.map(user=>(
                 <> 
                    <form className='profile__form' id='update_form' onSubmit={handleSubmit}>
                    <input type='text' hidden id='user_id' defaultValue={user._id} onLoad={e=>setId(e.target.value)}/>
                    <input required className='update__inputs' name='name' defaultValue={user.name} placeholder='Full Name' type='text' onChange={e=>setName(e.target.value)} />
                    <input required className='update__inputs' name='name' defaultValue={user.email} placeholder='Email' type='email' onChange={e=>setEmail(e.target.value)} />
                    <input required className='update__inputs' name='name' defaultValue={user.password} placeholder='Password' type='password' onChange={e=>setPassword(e.target.value)} />
                    <input required className='update__inputs' name='role' defaultValue={user.role} placeholder='Role' type='text' onChange={e=>setRole(e.target.value)} />
                    <input  className='update__inputs' type='file' name='image' onChange={e=>setImage(e.target.files[0])}  />
                    <textarea required className='update__inputs' name='description' defaultValue={user.description} rows='4' onChange={e=>setDesc(e.target.value)}></textarea>
                    <button className='update__btn'>Update</button>
            </form></>
                ))
            }          
            
            </>
        }
           
        </div>
    )
}

export default UpdateProfile;
