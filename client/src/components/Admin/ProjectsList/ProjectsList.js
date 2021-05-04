import React , {useEffect} from 'react';
import './ProjectsList.css';
import {useDispatch,useSelector} from 'react-redux';
import {getProjects} from '../../../redux/actions/projectsAction';
import AddProject from '../AddProject/AddProject';
import axios from 'axios';

const ProjectsList = () => {
    const dispatch = useDispatch();
    const {loading,error,projects} = useSelector(state => state.projects);
    const deleteProject =async (e)=>{
        try{
            e.target.value='Deleting'
            const deleted = await axios({
                url:`/api/projects/${e.target.id}`,
                method:'delete',
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('loginToken')
                },
            })
            e.target.value='Deleted'
            e.target.disabled=true
        }
        catch(error){
            e.target.value='Delete'
            console.log(error)
        }
    }
    
    
    
    useEffect(()=>{
        dispatch(getProjects());
    },[])
    return (
        <div className='projects__list'>
            <div className='list'>
            <AddProject/>
            <table>
                    <tr>
                        <th>Image</th>
                        <th className='title'>Title</th>
                        <th>Delete</th>
                    </tr>
                    {
                    loading?<h2>Loading...</h2>:error?<h3>Can not load Projects</h3>:
                    <>
                        {
                            projects.data.map(project => (
                                <tr>
                                    <td><img className='admin_project__image' src={project.image}/></td>
                                    <td className='title'>{project.title}</td>
                                    <td><input type='submit' id={project._id} onClick={deleteProject} value='Delete' /></td>
                                </tr>                  
                            ))
                        }
                    </>
                }
                </table>
            </div>
        </div>
    )
}

export default ProjectsList;
