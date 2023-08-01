import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Registration from "./pages/Registration";
import Result from "./pages/Result";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="wrapper">
       <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registration/>} />
          <Route path="/search" element={<PrivateRoute> 
             <Search/>
          </PrivateRoute>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/favorites" element={<Favorites/>} />
        
      </Routes>
     
    </div>
  );
}

export default App;
