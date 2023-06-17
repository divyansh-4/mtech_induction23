import './App.css';
// Installed a new ppm package called react-router-dom
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navb from './components/Navb';
function App() {
  return (
    <div className="App">
      <Navb />
      <Landing />

    </div>
  );
}

export default App;
