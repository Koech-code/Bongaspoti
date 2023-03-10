import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistrationForm from './components/SignUp';
import Login from './components/SignIn';
import Post from './components/Post';
// import HomePage from './components/HomePage';
function App() {
  return (
    // <div>
    //   <div>
    //     <Navbar/>
    //   </div>
    //   <div>
    //     <HomePage/>
    //   </div>
    // </div>
    <div>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path='/post' element={<Post />}/>
      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
