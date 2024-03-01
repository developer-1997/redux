import { Navigate } from "react-router-dom"


const AdminAuthMiddleware = (props) => {
    if(localStorage.getItem("user") && localStorage.getItem("user").includes("admin")) {
        return <>{props.children}</>
    }else {
        return  <Navigate to={{pathname:"/login"}} />
    }

}

const StudentAuthMiddleware = (props) => {

    if(localStorage.getItem("user") && localStorage.getItem("user").includes("student")) {
        return <>{props.children}</>
    }else {
        return  <Navigate to={{pathname:"/login"}} />
    }

}

export { AdminAuthMiddleware , StudentAuthMiddleware}