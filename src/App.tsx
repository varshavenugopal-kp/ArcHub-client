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
import Chat from './Components/Chat/Chat';
import SingleChat from './Pages/SingleChat';
import UProfile from './Pages/User/UProfile';
import List from './Pages/User/List';
import DashboardAdmin from './Pages/Company/DashboardCompany';
import UserProfile from './Pages/User/UserProfile';
import CompanyLists from './Components/User/CompanyList/CompanyLists';
import GetCatCompanies from './Pages/User/GetCatCompanies';
import Projects from './Pages/User/Projects';
import ResetPassword from './Pages/User/ResetPassword';
import PasswordReset from './Pages/User/PasswordReset';
import Applied from './Pages/User/Applied';
import Applicationslist from './Pages/Company/Applicationslist';
import Saved from './Pages/User/Saved';
import Projectss from './Pages/Company/Projectss';
import Dashboard from './Components/Admin/Dashboard';
import DashboardCompany from './Pages/Company/DashboardCompany';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import ApplyDetails from './Pages/Company/ApplyDetails';
import AppliedDetails from './Pages/User/AppliedDetails';
import ProtectedAdmin from './Components/ProtectedAdmin';
import ProtectedUser from './Components/ProtectedUser';
import CategoryFilter from './Pages/User/CategoryFilter';
import MsgRequests from './Pages/Company/MsgRequests';
import Error from './Components/User/ErrorPage/Error';
// import getApplied from './Pages/User/getApplied';

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
    <Route path='/admin/user-list'  element={<ProtectedAdmin><UserList/></ProtectedAdmin>
    } />
    <Route path='/user'  element={<AdminDashboard/>
    } />
    <Route path='/admin'  element={<HomeAdmin/>
    } />
     <Route path='/admin/company-list'  element={<ProtectedAdmin><CompanyList/></ProtectedAdmin>
    } />
     <Route path='/admin/requests'  element={<ProtectedAdmin><Requests/></ProtectedAdmin>
    } />
    <Route path='/user/profile'  element={<Profile/>
    } />
     <Route path='/user/addjob'  element={<JobAdd/>
    } />
    <Route path='/admin/categories' element={<ProtectedAdmin><Categories/></ProtectedAdmin>} />

    <Route path='/explore' element={<ProtectedUser><Userexplore/></ProtectedUser>} />

    <Route path='/company-view' element={<ProtectedUser><CompanyDetails/></ProtectedUser>} />

    <Route path='/companies' element={<ProtectedUser><GetCompanies/></ProtectedUser>} />

    <Route path='/jobs' element={<ProtectedUser><Jobs/></ProtectedUser>} />

    <Route path='/user/job-List' element={<JobList/>} />

    <Route path='/user/Editjob' element={<JobEdit/>} />

    <Route path='/viewCompany' element={<ProtectedUser><ViewCompany/></ProtectedUser>} />

    <Route path='/applyJobs' element={<ProtectedUser><ApplyJobs/></ProtectedUser>} />

    <Route path='/chat' element={<SingleChat role={'user'}/>} />

    <Route path='/user/chat' element={<SingleChat role={'company'}/>} />

    <Route path='/userProfile' element={<ProtectedUser><UProfile/></ProtectedUser>} />

    {/* <Route path='/getApplied' element={<getApplied/>}/> */}
    <Route path='/List' element={<List/>} />

    <Route path='/admin/dashboard' element={<ProtectedAdmin><DashboardCompany/></ProtectedAdmin>} />

    <Route path='*' element={<Error/>} />

    <Route path='/getCompanies' element={<ProtectedUser><GetCatCompanies/></ProtectedUser>} />

    <Route path='/getProjects' element={<Projects/>} />

    <Route path='/pswdReset' element={<ResetPassword/>} />

    <Route path='/resetPswd' element={<PasswordReset/>} />

    <Route path='/appliedJobs' element={<Applied/>} />

    <Route path='/user/applications' element={<Applicationslist/>} />

    <Route path='/savedJobs' element={<Saved/>} />

    <Route path='/cProject' element={<Projectss/>} />

    <Route path='/user/applicationsDetails' element={<ApplyDetails/>} />

    {/* <Route path='/user/userDashboard' element={<AdminDashboard/>} /> */}

    <Route path='/getAppliedDetails' element={<AppliedDetails/>} />

    <Route path='/getCategoryWise' element={<ProtectedUser><CategoryFilter/></ProtectedUser>} />

    <Route path='/user/msgRequests' element={<MsgRequests/>} />

    {/* <Route path='/resetPassword' element={<MsgRequests/>} /> */}

  
    
    
    </Routes>
  );
}

export default App;
