import './App.css';
// import '../fontface.css';
// Installed a new ppm package called react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navb from './components/Navb';
import Welcome from './components/Welcome';
import Menu from "./components/Menu";
function App() {
  return (
    <div className="App">
      <Navb />
      <Welcome />
      
     

    </div>
  );
}

export default App;
