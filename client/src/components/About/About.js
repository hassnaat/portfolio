import React from 'react'
import './About.css'
import { useSelector } from 'react-redux'
import LoaderBox from '../Loaders/LoaderBox'
const About = () => {
    const { loading, error, user } = useSelector(state => state.user)
    return (
        <div className='about'>
            <div className='about__header'>
                <h1 className='about__heading'>About Me :</h1> <hr />
            </div>
            {
                loading ? <LoaderBox /> : error ? <h3>Something Went Wrong</h3> :
                    <>
                        {user.data.map(user => (
                            <p className='user__details'>{user.description}</p>
                        ))}
                    </>
            }
        </div>

    )
}

export default About
