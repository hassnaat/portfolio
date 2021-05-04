import React,{useEffect,useState} from 'react';
import './SkillsList.css';
import {useDispatch,useSelector} from 'react-redux';
import {getSkills} from '../../../redux/actions/skillsActions';
import { Link } from 'react-router-dom';
import AddSkill from '../AddSkill/AddSkill';
import axios from 'axios';
const SkillsList = () => {
    const [skillId,setSkillId] = useState();
    const dispatch = useDispatch();
    const {loading,error,skills} = useSelector(state => state.skills);
    
    const deleteSkill =async (e)=>{
        try{
            const deleted = await axios({
                url:`/api/skills/${e.target.id}`,
                method:'delete',
                headers:{
                    'Authorization':'Bearer '+localStorage.getItem('loginToken')
                },

            })
            e.target.value='Deleted'
            e.target.disabled=true            
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        dispatch(getSkills());        
    },[dispatch])
    return (
        <div className='skills__list'>
            <div className='list'>
                <AddSkill />
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Percentage</th>
                        <th>Delete</th>
                    </tr>
                    {
                    loading?<h2>Loading...</h2>:error?<h3>Can not load skills </h3>:
                    <>
                        {
                            skills.data.map(skill => (
                                <tr>
                                    <td>{skill.name}</td>
                                    <td>{skill.percentage}%</td>
                                    <td><input type='submit' id={skill._id} onClick={deleteSkill} value='Delete' /></td>
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

export default SkillsList
