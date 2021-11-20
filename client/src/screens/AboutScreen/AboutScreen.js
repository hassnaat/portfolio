import React, { useEffect } from 'react';
import Skillbar from '../../components/Skillbar/Skillbar';
import './AboutScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { getSkills } from '../../redux/actions/skillsActions';
import About from '../../components/About/About';
import Education from '../../components/Education/Edication';
import LoaderBox from '../../components/Loaders/LoaderBox';
const AboutScreen = () => {
    const dispatch = useDispatch();
    const { loading, error, skills } = useSelector(state => state.skills);
    useEffect(() => {
        dispatch(getSkills());
    }, [dispatch])

    return (
        <div className='aboutscreen'>
            <div className='skills'>
                <div className='skills__header'>
                    <h1 className='skills__heading'>Skills :</h1> <hr />
                </div>
                {
                    loading ? <LoaderBox /> : error ? <h3>Can not load skills</h3> :
                        <>
                            {
                                skills.data.map(skill => (
                                    <Skillbar name={skill.name} percentage={skill.percentage} />
                                ))
                            }
                        </>
                }
            </div>
            <div className='education'>
                <About />
                <Education />
            </div>
        </div>
    )
}

export default AboutScreen
