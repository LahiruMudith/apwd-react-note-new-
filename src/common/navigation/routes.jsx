import Dashboard from "../../pages/Dashboard/Dashboard.jsx";
import Home from "../../pages/Home/Home.jsx";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AddHomeIcon from '@mui/icons-material/AddHome';
import Axios from "../../pages/Axios/Axios.jsx";
import HomeMaxIcon from '@mui/icons-material/HomeMax';
import Task1Icon from '../../assets/icons8-task-50.png'
import Task1 from "../../pages/Task1/Task1.jsx";
import Student from "../../pages/Student/Student.jsx";

const routes = [
    {
        name: 'Dashboard',
        key: 'dashboard',
        path: '/dashboard',
        component: <Dashboard/>,
        icon: <InboxIcon/>
    },
    {
        name: 'Home',
        key: 'home',
        path: '/home',
        component: <Home/>,
        icon: <AddHomeIcon/>
    },
    {
        name: 'Axios',
        key: 'axios',
        path: '/axios',
        component: <Axios/>,
        icon: <HomeMaxIcon/>
    },
    {
        name: 'Axios Task 1',
        key: 'axiosTask1',
        path: '/axiosTask1',
        component: <Task1/>,
        icon: <img src={Task1Icon} style={{width:'25px'}}/>
    },
    {
        name: 'Student',
        key: 'student',
        path: '/student',
        component: <Student/>,
        icon: <InboxIcon/>
    }
]

export default routes;