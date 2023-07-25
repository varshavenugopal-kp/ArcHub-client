import React from 'react';
import logo from './logo.svg';
import {Route,Routes} from 'react-router-dom'
import './App.css';
import UserLogin from './Pages/User/UserLogin';
import UserRegister from './Pages/User/UserRegister';
import UserHome from './Pages/User/UserHome';
import CompanyRegister from './Pages/Company/CompanyRegister';
import CompanyLogin from './Pages/Company/CompanyLogin';
import AdminLogin from './Pages/Admin/AdminLogin';
import SamoleHome from './Pages/User/SamoleHome';

import UserList from './Pages/Admin/UserList';
import CompanyHome from './Pages/Company/CompanyHome';
import HomeAdmin from './Pages/Admin/HomeAdmin';
import CompanyList from './Pages/Admin/CompanyList';
import Requests from './Pages/Admin/Requests';
// import AddProfile from './Pages/Company/AddProfile';
import Profile from './Pages/Company/Profile';
import JobAdd from './Pages/Company/JobAdd';
import Categories from './Pages/Admin/Categories';
import Userexplore from './Pages/User/Userexplore';
import CompanyDetails from './Pages/User/CompanyDetails';
import GetCompanies from './Pages/User/GetCompanies';
import Jobs from './Pages/User/Jobs';
import JobList from './Pages/Company/JobList';
import JobEdit from './Pages/Company/JobEdit';
import ViewCompany from './Components/User/CompanyView/ViewCompany';
import ApplyJobs from './Pages/User/ApplyJobs';

function App() {
  return (
    <Routes>
      <Route path='/login'  element={<UserLogin/>
    } />
     <Route path='/register'  element={<UserRegister/>
    } />
    <Route path='/'  element={<UserHome/>
    } />
    <Route path='/user/Register'  element={<CompanyRegister/>
    } />
    <Route path='/user/login'  element={<CompanyLogin/>
    } />
     <Route path='/admin/login'  element={<AdminLogin/>
    } />
    <Route path='/admin/user-list'  element={<UserList/>
    } />
    <Route path='/user'  element={<CompanyHome/>
    } />
    <Route path='/admin'  element={<HomeAdmin/>
    } />
     <Route path='/admin/company-list'  element={<CompanyList/>
    } />
     <Route path='/admin/requests'  element={<Requests/>
    } />
    <Route path='/user/profile'  element={<Profile/>
    } />
     <Route path='/user/addjob'  element={<JobAdd/>
    } />
    <Route path='/admin/categories' element={<Categories/>} />
    <Route path='/explore' element={<Userexplore/>} />
    <Route path='/company-view' element={<CompanyDetails/>} />
    <Route path='/companies' element={<GetCompanies/>} />
    <Route path='/jobs' element={<Jobs/>} />
    <Route path='/user/job-List' element={<JobList/>} />
    <Route path='/user/Editjob' element={<JobEdit/>} />
    <Route path='/viewCompany' element={<ViewCompany/>} />
    <Route path='/applyJobs' element={<ApplyJobs/>} />
    </Routes>
  );
}

export default App;
