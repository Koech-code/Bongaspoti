import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistrationForm from './components/SignUp';
import Login from './components/SignIn';
import DirectMessage from './components/DirectMessage';
import EventPosts from './components/Posts';
import Profiles from './components/Profiles';
import MyProfile from './components/MyProfile';
function App() {
  return (
    <div>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path='/direct-message' element={<DirectMessage/>}/>
        <Route path='/events' element={<EventPosts/>}/>
        <Route path='/profiles' element={<Profiles/>}/>
        <Route path='/prof' element={<MyProfile/>}/>
      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
