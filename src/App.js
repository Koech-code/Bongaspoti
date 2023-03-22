import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import RegistrationForm from './components/SignUp';
import Login from './components/SignIn';
import DirectMessage from './components/DirectMessage';
import EventPosts from './components/Posts';
import Profiles from './components/Profiles';
import MyProfile from './components/MyProfile';
// import Search from './components/Search';
import SearchResult from './components/SearchFrontend';
import ChatBox from './components/Chats';
import ProfileFeeds from './components/ProfileFeeds';
import Journals from './components/Journals';
import ProfileAcademics from './components/ProfileAcademics';
import ProfileAchievements from './components/ProfileAchievements';
import Home from './components/Home';

function App() {
  return (
    <div>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route  path='' element={<Home/>} />
        <Route path="/feed" element={<HomePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path='/direct-message' element={<DirectMessage/>}/>
        <Route path='/events' element={<EventPosts/>}/>
        <Route  path='/profiles' element={<Profiles/>} />
        <Route path='/prof' element={<MyProfile/>}>
          <Route path='feeds' element={<ProfileFeeds/>}/>
          <Route path='journals' element={<Journals/>}/>
          <Route path='academics' element={<ProfileAcademics/>}/>
          <Route path='achievements' element={<ProfileAchievements/>}/>
        </Route>
        <Route path='/search' element={<SearchResult/>}/>
        <Route path='/chats' element={<ChatBox/>}/>
      </Routes>
    </BrowserRouter>

  </div>
  );
}

export default App;
