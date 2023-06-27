import './App.css';
// import '../fontface.css';
// Installed a new ppm package called react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navb from './components/Navb';
import Welcome from './components/Welcome';
import Menu from "./components/Menu";
import Speakers from "./components/Speakers";
import Home from "./Pages/Home/Home";
import Schedule from './components/Schedule';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className={''}>
          <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/schedule'} element={<Schedule />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
