import {createStore,combineReducers,applyMiddleware} from 'redux';
import {userReducer} from './reducers/userReducer';
import {skillsReducer} from './reducers/skillsReducer';
import {projectsReducer} from './reducers/projectsReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    user:userReducer,
    skills:skillsReducer,
    projects:projectsReducer
});

const middleware = [thunk]
const store = createStore(reducers,composeWithDevTools(applyMiddleware(...middleware)))

export default store;