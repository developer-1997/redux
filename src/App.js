import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import './App.css';
import PublicDashbord from "./pages/public/Dashbord";
import React , {lazy , Suspense} from "react";
const AdminDashbord =  lazy(() => import("./pages/admin/Dashbord"));

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/"  element={<PublicDashbord />} />
        <Route path="/admin"  element={
          <Suspense  fallback={<><h1>asdfghjklrtyuifghjkrtyuklcvbhnj</h1></>}>
            <AdminDashbord />
          </Suspense>
        } />
      </Routes>
    </Router>
   
  );
}

export default App;
