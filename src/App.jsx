// import CardLayout from "./components/aipage/CardLayout";
import SliderComponent from "./components/aipage/SliderComponent";

import ToggleButton from "./components/aipage/ToggleButton";
import Carousel from "./components/Carousel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={

            <>
              {/* {/* <CardLayout /> */}
              {/* <Navbar /> */}
              <SliderComponent />
              {/* <ToggleButton /> */}
            </>
          }
        />


      </Routes>
    </Router>
  );
};

export default App;
