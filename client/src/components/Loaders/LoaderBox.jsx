import React from 'react'
import "./Loaders.css"
import ReactLoading from 'react-loading';

const LoaderBox = () => {
    return (
        <div className="loader__box">
            <ReactLoading type={"cylon"} color={"white"} height={'20%'} width={'20%'} />
        </div>
    )
}

export default LoaderBox
