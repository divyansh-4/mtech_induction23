import './App.css';
// import '../fontface.css';
// Installed a new ppm package called react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navb from './components/Navb';
import Welcome from './components/Welcome';
import Menu from "./components/Menu";
import Speakers from "./components/Speakers";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <div className="App">
        {/*<Navb />*/}
        {/*<Welcome />*/}
        {/*<Speakers />*/}
        <Home/>
    </div>
  );
}

export default App;
