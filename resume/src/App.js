import Navbar from "./Navbar";
import Achievement from "./pages/Achievement";
// import BasicDetails from "./pages/BasicDetails";
import Education from "./pages/Education";
// import Review from "./pages/Review";
import Skill from "./pages/Skill";
import Summary from "./pages/Summary";
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
    <>
      <Navbar/>
      <div className="h-[calc(100vh-60px)] pt-2 w-full">
      {/* <Skill/> */}
      {/* <BasicDetails/> */}
      {/* <Education/> */}
      {/* <Achievement/> */}
      {/* <WorkExperience/> */}
      <Summary/>
      {/* <Review/> */}</div>
    </>
  );
}

export default App;
