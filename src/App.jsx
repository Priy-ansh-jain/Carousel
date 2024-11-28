// import CardLayout from "./components/aipage/CardLayout";
import SliderComponent from "./components/aipage/SliderComponent";

import ToggleButton from "./components/aipage/ToggleButton";
// import Carousel from "./components/icons/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/aipage/Navbar";
import SchedulingComponent from "./components/aipage/SchedulingComponent";
import DropdownCard from "./components/aipage/dropdowncard";
import InterviewButton from "./components/aipage/interviewButton/InterviewButton";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={

            <>
              {/* {/* <CardLayout /> */}
              <Navbar />
              <SchedulingComponent />
              <ToggleButton />
              <SliderComponent />
              <DropdownCard />
              <InterviewButton />
            </>
          }
        />


      </Routes>
    </Router >
  );
};

export default App;
