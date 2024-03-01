import AdminDashbord  from "../pages/admin/Dashbord";
import PublicDashbord from "../pages/public/Dashbord";
import  StudentDashbord  from "../pages/students/Dashbord";

const adminRoutes = [
    { path : "/admin/dashbord" , component: <AdminDashbord />} ,
]


const publicRoutes = [
    { path : "/public/dashbord" , component: <PublicDashbord />} ,
]


const studentRoutes = [
    { path : "/student/dashbord" , component: <StudentDashbord />} ,
]
export {adminRoutes , publicRoutes , studentRoutes}