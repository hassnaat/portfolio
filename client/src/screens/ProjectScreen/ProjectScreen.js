import React, { useEffect } from 'react';
import Project from '../../components/Project/Project';
import './ProjectScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../redux/actions/projectsAction';


const ProjectScreen = () => {
    const dispatch = useDispatch();
    const { loading, error, projects } = useSelector(state => state.projects);
    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch])
    return (
        <div className='projectscreen'>
            <div className='projects__header'>
                <h1 className='projects__heading'>My Work!</h1> <hr />
                <div className='projects__list'>
                    {
                        loading ? <h2>Loading Projects...</h2> : error ? <h2>Failed to Load Projects</h2> :
                            <>
                                {
                                    projects.data.map(project => (
                                        <Project image_url={project.image} title={project.title} key={project._id} url={project.url} />
                                    ))
                                }
                            </>
                    }

                </div>
            </div>
        </div>
    )
}

export default ProjectScreen
