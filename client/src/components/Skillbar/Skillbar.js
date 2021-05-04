import React from 'react';
import './Skillbar.css';

const Skillbar = ({name,percentage}) => {
    const perc = Number(percentage)
    return (
            <div className='skill'>
                    <h4 className='skill__name'>{name}</h4>
                    <div className='skillbar'>
                        <div className='progress' style={{width:`${perc}%`}}></div>
                    </div>
            </div>
    )
}

export default Skillbar
