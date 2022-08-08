import SignUp from "./Component/SignUp";
import SignIn from "./Component/SignIn";
import ScrollToTop from "./ScrollToTop";
import Onboarding1 from "./Component/Onboarding1";
import Onboarding2 from "./Component/Onboarding2";
import Onboarding3 from "./Component/Onboarding3";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Onboarding1 />} />
        <Route path="/onboarding2" element={<Onboarding2 />} />
        <Route path="/onboarding3" element={<Onboarding3 />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dash" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
