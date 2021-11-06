// import logo from './logo.svg';
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home title='Portfolio | Home' />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About outline='false' title='Portfolio | About' />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects title='Portfolio | Projects' />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact title='Portfolio | Contact' />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
