import * as  projectsConstants from '../constants/projectConstants';
import axios from 'axios';
export const getProjects = ()=> async (dispatch) => {
    try {
        dispatch({
            type:projectsConstants.GET_PROJECTS
        })
        const project = await axios.get('/api/projects');
        dispatch({
            type:projectsConstants.GET_PROJECTS_SUCCESS,
            payload:project
        })
    } catch (error) {
        dispatch({
            type:projectsConstants.GET_PROJECTS_FAILED,
        })
    }
}