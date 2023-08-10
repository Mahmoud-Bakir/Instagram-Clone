import { Routes, Route } from "react-router-dom"
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
    </Routes> 
  );
}

export default App;
