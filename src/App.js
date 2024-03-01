import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import './App.css';
import { AdminAuthMiddleware , StudentAuthMiddleware } from "./routes/route";
import { adminRoutes , publicRoutes , studentRoutes } from "./routes";
import PublicDashbord from "./pages/public/Dashbord";

function App() {
  return (
    
    <Router>
      <Routes>
        {
          adminRoutes.map((admin) => (
            <Route path="/admin/dashbord"  element={<AdminAuthMiddleware >{admin.component}</AdminAuthMiddleware>} />
          ))
        }

<Route path="/login"  element={<PublicDashbord />} />
      </Routes>
    </Router>
   
  );
}

export default App;
