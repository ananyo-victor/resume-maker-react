import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Achievement from "./pages/Achievement";
import BasicDetails from "./pages/BasicDetails";
import Education from "./pages/Education";
import Review from "./pages/Review";
import Skill from "./pages/Skill";
import Summary from "./pages/Summary";
import WorkExperience from "./pages/WorkExperience";
import LeftNavigartion from "./components/hover_reveal_navigation_arrow/LeftNavigation"
import RightNavigation from "./components/hover_reveal_navigation_arrow/RightNavigation";
import Login from './login/Login';
import Registration from './registration/Registration';
import Landing from './pages/Landing';
import { AuthProvider } from './FormContext';
import Dashboard from './pages/Dashboard/Dashboard';
import AccountSetting from './pages/Dashboard/AccountSetting';
import ConnectedAccounts from './pages/Dashboard/ConnectedAccounts';
import PrivacyData from './pages/Dashboard/PrivacyData';
import ProfileInformation from './pages/Dashboard/ProfileInformation';
import SecuritySetting from './pages/Dashboard/SecuritySetting';
import SubscriptionBilling from './pages/Dashboard/SubscriptionBilling';
import SupportFeedback from './pages/Dashboard/SupportFeedback';
import CreateResume from './pages/Dashboard/CreateResume';
import MyResume from './pages/Dashboard/MyResume';
import Account from './pages/Dashboard/Account';
// import Temp1 from "./templates/Temp1";

function App() {
  const formRef = useRef(null);
  return (
    <AuthProvider>
      <Router>

        <div className="h-[calc(100vh-60px)] w-full relative">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/basic-details" element={<> <Navbar /> <LeftNavigartion formRef={formRef} /> <RightNavigation formRef={formRef} /> <BasicDetails formRef={formRef} /></>} />
            <Route path="/work-experience" element={<><Navbar /> <LeftNavigartion formRef={formRef} /> <RightNavigation formRef={formRef} /> <WorkExperience formRef={formRef} /> </>} />
            <Route path="/education" element={<> <Navbar /> <LeftNavigartion formRef={formRef} /> <RightNavigation formRef={formRef} /> <Education formRef={formRef} /></>} />
            <Route path="/skills" element={<> <Navbar /> <LeftNavigartion formRef={formRef} /> <RightNavigation formRef={formRef} /> <Skill formRef={formRef} /></>} />
            <Route path="/summary" element={<> <Navbar /> <LeftNavigartion formRef={formRef} /> <RightNavigation formRef={formRef} /> <Summary formRef={formRef} /></>} />
            <Route path="/achievement" element={<> <Navbar /> <LeftNavigartion formRef={formRef} /> <RightNavigation formRef={formRef} /><Achievement formRef={formRef} /></>} />
            <Route path="/review" element={<> <Navbar /> <LeftNavigartion formRef={formRef} /> <RightNavigation formRef={formRef} /> <Review formRef={formRef} /></>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/account-setting" element={<AccountSetting />} />
            <Route path="/connected-accounts" element={<ConnectedAccounts />} />
            <Route path="/privacy-data" element={<PrivacyData />} />
            <Route path="/profile-information" element={<ProfileInformation />} />
            <Route path="/security-setting" element={<SecuritySetting />} />
            <Route path="/subscription-billing" element={<SubscriptionBilling />} />
            <Route path="/support-feedback" element={<SupportFeedback />} />
            <Route path="/create-resume" element={<CreateResume />} />
            <Route path="/my-resume" element={<MyResume />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          {/* <Temp1/> */}
        </div>

      </Router>
    </AuthProvider>
  );
}

export default App;
