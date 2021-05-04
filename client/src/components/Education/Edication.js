import React from 'react'
import './Education.css'
import {useSelector} from 'react-redux'
const Education = () => {
    const {loading,error,user} = useSelector(state=>state.user)
    return (
        <div className='education'>
            <div className='education__header'>
            <h1 className='education__heading'>Education :</h1> <hr/>
            </div>
            <div className='education__body'>
                <div className='education__date'>2017 - 2021</div>
                <div className='education__details'>
                    <div className='education__degree'>BS Information Technology</div>
                    <div className='education__institute'>PMAS ARID Agriculture University, Rawalpindi (Sahiwal Campus)</div>
                </div>
            </div>
        </div>

    )
}

export default Education
