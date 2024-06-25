import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Achievement from "./pages/Achievement";
import BasicDetails from "./pages/BasicDetails";
import Education from "./pages/Education";
import Review from "./pages/Review";
import Skill from "./pages/Skill";
import Summary from "./pages/Summary";
import WorkExperience from "./pages/WorkExperience";
import Temp1 from "./templates/Temp1";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className="h-[calc(100vh-60px)] w-full">
      <Routes>
          <Route path="/skills" element={<Skill />} />
          <Route path="/basic-details" element={<BasicDetails />} />
          <Route path="/education" element={<Education />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      {/* <Temp1/> */}
      </div>
      </Router>
    </>
  );
}

export default App;
