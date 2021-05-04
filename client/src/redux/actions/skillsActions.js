import * as  userConstants from '../constants/skillConstants';
import axios from 'axios';
export const getSkills = ()=> async (dispatch) => {
    try {
        dispatch({
            type:userConstants.GET_SKILLS
        })
        const skill = await axios.get('/api/skills');
        dispatch({
            type:userConstants.GET_SKILLS_SUCCESS,
            payload:skill
        })
    } catch (error) {
        dispatch({
            type:userConstants.GET_SKILLS_FAILED,
        })
    }
}