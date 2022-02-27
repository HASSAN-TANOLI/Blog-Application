
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {

  const user = false;
  return (
    <Router>
      <TopBar/>

      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={user ? <Home/> : <Login/>} />
        <Route exact path="/Register" element={user ? <Home/> : <Register/>} />
        <Route exact path="/Settings" element={user ? <Settings/> : <Register/>} />
        <Route exact path="/post/:postId" element={<Single/>} />
        <Route exact path="/Write" element={ user ? <Write/> : <Register/>} />
        
      </Routes>
    
    
   

    </Router>
  );
}

export default App;
