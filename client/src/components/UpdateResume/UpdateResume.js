import axios from 'axios';
import React, { useState } from 'react'
import './UpdateResume.css'

const UpdateResume = () => {
    const [file,setFile] =useState();
    const update_resume = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file)
        formData.append('upload_preset','portfolio_images')
        formData.append('cloud_name','dlrvqc6za')
        axios({
                url:'https://api.cloudinary.com/v1_1/dlrvqc6za/image/upload',
                method:'post',
                data:formData
            })
        .then(uploaded =>{
            axios({
                url:'/api/resume',
                method:'put',
                data:{url:uploaded.data.url},
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('loginToken')
                }
            })
            .then(result=>{
                alert('updated successfully')
                console.log(result)
            })
            .catch(error=>{
                alert(error)
            })
        })
    }

    return (
        <div className='update__resume'>
            <form>
                <input type='file' className='resume__input' onChange={e=>setFile(e.target.files[0])} />
                <button className='resume_update__btn' onClick={update_resume}>Update</button>
            </form>
        </div>
    )
}

export default UpdateResume
