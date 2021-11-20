import React from 'react'
import "./Loaders.css"
import ReactLoading from 'react-loading';

const FullScreen = () => {
    return (
        <div className="fullscreen__loaders">
            <ReactLoading type={"cylon"} color={"white"} height={'20%'} width={'20%'} />
        </div>
    )
}

export default FullScreen
