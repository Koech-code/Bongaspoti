import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import RegistrationForm from "./components/SignUp";
import Login from "./components/SignIn";
import DirectMessage from "./components/DirectMessage";
import EventPosts from "./components/Posts";

import Profiles from "./components/Profiles";
import MyProfile from "./components/MyProfile";
// import Search from './components/Search';
import SearchResult from "./components/SearchFrontend";
import ChatBox from "./components/Chats";
import ProfileFeeds from "./components/ProfileFeeds";
import Journals from "./components/Journals";
import ProfileAcademics from "./components/ProfileAcademics";
import ProfileAchievements from "./components/ProfileAchievements";
import Home from "./components/Home";

// import academicInfo from './components/academicInfo';

import PersonalInformation from "./components/PersonalInformation";
import ContactDetails from "./components/ContactDetails";
import AcademicInformation from "./components/AcademicInformation";
import AthleteInformation from "./components/AthleteInformation";
import EstablishContact from "./components/EstablishContact";
import KnowAthlete from "./components/KnowAthlete";
import Athlete from "./components/Athletes";

function App() {
  return (
    <div className="max-w-screen my-0 ">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feed" element={<HomePage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/direct-message" element={<DirectMessage />} />
          <Route path="/events" element={<EventPosts />} />
          <Route path="/registration" element={<MyProfile />}>
            <Route index element={<Navigate to="personalInfo" replace />} />
            <Route path="personalInfo" element={<PersonalInformation />} />
            <Route path="contacts" element={<ContactDetails />} />
            <Route path="athletesInfo" element={<AthleteInformation />} />
            <Route path="academicInfo" element={<AcademicInformation />} />
            <Route path="establishingContact" element={<EstablishContact />} />
          </Route>

          <Route path="/knowathlete" element={<KnowAthlete />} />
          <Route path="/athletes" element={<Athlete />} />
          <Route path="/prof" element={<Profiles />}>
            {/* <Route path='profeeds' element={<ProfileFeeds/>}/>
          <Route path='projournals' element={<Journals/>}/>
          <Route path='proacademics' element={<ProfileAcademics/>}/>
          <Route path='proachievements' element={<ProfileAchievements/>}/> */}
          </Route>
          <Route path="/search" element={<SearchResult />} />
          <Route path="/chats" element={<ChatBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
