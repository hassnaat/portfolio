import * as projectsConstants from '../constants/projectConstants';
const initialState = {
   loading:true,
   projects:{},
   error:false
}
export const projectsReducer = (state=initialState,action)=>{
   switch (action.type) {
      case projectsConstants.GET_PROJECTS:
         return {
            ...state,
            loading:true,
         }
         case projectsConstants.GET_PROJECTS_SUCCESS:
            return{
               loading:false,
               projects:action.payload,
               error:false
            }
         case projectsConstants.GET_PROJECTS_FAILED:
            return{
               loading:false,
               projects:{},
               error:true
            }
      default:
         return state;
   }
}
