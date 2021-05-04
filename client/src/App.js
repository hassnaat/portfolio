import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Backdrop from './screens/Backdrop/Backdrop';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import ProjectScreen from './screens/ProjectScreen/ProjectScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import Actions from './components/Admin/Actions/Actions';
import AdminHeader from './components/Admin/AdminHeader/AdminHeader';
import UpdateProfile from './components/Admin/UpdateProfile/UpdateProfile';
import SkillsList from './components/Admin/SkillsList/SkillsList';
import AddSkill from './components/Admin/AddSkill/AddSkill';
import ProjectsList from './components/Admin/ProjectsList/ProjectsList';
import Login from './screens/Login/Login';
import UpdateResume from './components/UpdateResume/UpdateResume';
function App() {
  const [sidebar,setSidebar] = useState(false);
  const [login,setLogin] = useState(false);
  
  useEffect(()=>{
    setLogin(localStorage.getItem('loginToken'))
  },[login])
  return (
    <Router>
      <div className='app'>
      <Navbar hide={sidebar} click={()=>setSidebar(true)}/>
        <div className='wrapper'>
          <div className='app__left'>
            <Backdrop show={sidebar} click={()=>setSidebar(false)}/> 
            <Sidebar show={sidebar} click={()=>setSidebar(false)}/>
          </div>
          <div className='app__right'>
            <Switch>
              <Route path='/' exact component={HomeScreen} />
              <Route path='/about' exact component={AboutScreen} />
              <Route path='/projects' exact component={ProjectScreen} />
              <Route path='/contact' exact component={ContactScreen} />
              <Route path='/login' exxact component={Login} />
              <Route path='/admin' exact render={()=>(
              
                <>
                  <AdminHeader/>
                  <Actions />
                </>
              )} />
              <Route path='/admin/profile' exact render={()=>(
                
                <>
                  <AdminHeader/>
                  <UpdateProfile />
                </>
              )} />
              <Route path='/admin/skills' exact render={()=>(
                
                <>
                  <AdminHeader/>
                  <SkillsList />
                </>
              )} />
               
              <Route path='/admin/projects' exact render={()=>(
                
                <>
                  <AdminHeader/>
                  <ProjectsList />
                </>
              )} />
              <Route path='/admin/resume' exact render={()=>(
                
                <>
                  <AdminHeader/>
                  <UpdateResume/>
                </>
              )} />
 
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
