import * as userConstants from '../constants/userConstants';
const initialState = {
    loading:true,
    user:{},
    error:false
}
export const userReducer = (state=initialState,action)=>{
    switch (action.type) {
        case userConstants.GET_USER:
            return {
                loading:true,
                user:{},
                error:false,
            }
        case userConstants.GET_USER_SUCCESS:
            return {
                loading:false,
                user:action.payload,
                error:false,
            }
        case userConstants.GET_USER_FAILED:
            return {
                loading:false,
                user:{},
                error:true,
            }    
        default:
            return state;
    }
}
