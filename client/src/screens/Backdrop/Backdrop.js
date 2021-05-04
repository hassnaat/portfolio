import React from 'react';
import './Backdrop.css';

const Backdrop = ({click,show}) => {
    const backdropClass = ['backdrop']
    if(show){
        backdropClass.push('show__backdrop')
    }
    return (
        <div className={backdropClass.join(' ')} onClick={click}>
            
        </div>
    )
}

export default Backdrop
