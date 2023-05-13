import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import RegistrationForm from "./components/Authentication/SignUp";
import Login from "./components/Authentication/SignIn";
import EventPosts from "./components/Posts";

import Profiles from "./components/Profiles";
import MyProfile from "./components/MyProfile";
// import Search from './components/Search';
import SearchResult from "./components/Search/SearchFrontend";
// import ChatBox from "./components/Chats";
import ProfileFeeds from "./components/ProfileFeeds";
import Journals from "./components/Journals";
import ProfileAcademics from "./components/ProfileAcademics";
import ProfileAchievements from "./components/ProfileAchievements";
import Home from "./components/Home/Home";
import GetAcademicInfo from "./components/Profiles/GetAcademicInfo";
import GetAthletesInfo from "./components/Profiles/GetAthletesInfo";
// import academicInfo from './components/academicInfo';
import AthletesMediaPosts from "./components/Profiles/AthletesMediaPosts";
import AthletesPersonal from "./components/Profiles/AthletesPersonal";

// import PersonalInformation from "./components/PersonalInformation";
// import ContactDetails from "./components/ContactDetails";
// import AcademicInformation from "./components/AcademicInformation";
// import AthleteInformation from "./components/AthleteInformation";
// import EstablishContact from "./components/EstablishContact";
import KnowAthlete from "./components/Athletes/KnowAthlete";
import Athlete from "./components/Athletes/Athletes";
import MyTeam from "./components/MyTeam";
// import Registration from "./components/Registration";
import RefinedRegForm from "./components/Registration/RefinedRegForm";
import VideoList from "./components/Registration/Videos";
import GetPosts from "./components/GetPosts";
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
          <Route path="/events" element={<EventPosts />} />
          <Route path="/registration" element={<RefinedRegForm />} />
          {/* <Route index element={<Navigate to="personalInfo" replace />} />
            <Route path="personalInfo" element={<PersonalInformation />} />
            <Route path="contacts" element={<ContactDetails />} />
            <Route path="athletesInfo" element={<AthleteInformation />} />
            <Route path="academicInfo" element={<AcademicInformation />} />
            <Route path="establishingContact" element={<EstablishContact />} /> */}
          <Route path="/videos" element={<VideoList />} />
          <Route path="/knowathlete" element={<KnowAthlete />} />
          <Route path="/athletes" element={<Athlete />} />
          <Route path="/profiles" element={<Profiles />}>
            <Route index element={<Navigate to="athletesInfo" replace />} />
            <Route path="athletesInfo" element={<GetAthletesInfo />} />
            <Route path="projournals" element={<Journals />} />
            <Route path="media" element={<AthletesMediaPosts />} />
            <Route path="personal" element={<AthletesPersonal />} />
            <Route path="academics" element={<GetAcademicInfo />} />
          </Route>
          <Route path="/team" element={<MyTeam />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/video/posts" element={<GetPosts />} />
          {/* <Route path="/chats" element={<ChatBox />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
