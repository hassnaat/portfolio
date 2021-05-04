import * as skillConstants from '../constants/skillConstants'
const initialState = {
   loading:true,
   skills:{},
   error:false
}
export const skillsReducer = (state=initialState,action)=>{
   switch (action.type) {
      case skillConstants.GET_SKILLS:
         return {
            ...state,
            loading:true,
         }
         case skillConstants.GET_SKILLS_SUCCESS:
            return{
               loading:false,
               skills:action.payload,
               error:false
            }
         case skillConstants.GET_SKILLS_FAILED:
            return{
               loading:false,
               skills:{},
               error:true
            }
      default:
         return state;
   }
}
