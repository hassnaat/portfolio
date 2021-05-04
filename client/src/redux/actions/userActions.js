import * as  userConstants from '../constants/userConstants';
import axios from 'axios';
export const getUser = ()=> async (dispatch) => {
    try {
        dispatch({
            type:userConstants.GET_USER
        })
        const user = await axios.get('/api/user');
        dispatch({
            type:userConstants.GET_USER_SUCCESS,
            payload:user
        })
    } catch (error) {
        dispatch({
            type:userConstants.GET_USER_FAILED,
        })
    }
}