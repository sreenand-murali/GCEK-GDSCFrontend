
import './App.css';
import GoogleCloudJam from './GoogleCloudJam';
import {  Routes, Route, HashRouter } from "react-router-dom";
import Homepage from './Homepage';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gcsj" element={<GoogleCloudJam/>}/>
        </Routes>
        </HashRouter>
      
    </div>
  );
}

export default App;
