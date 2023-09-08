
import './App.css';
import GoogleCloudJam from './GoogleCloudJam';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './Homepage';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      
      <h1>heloooo</h1>
      {/* <Navbar/>
      <BrowserRouter basename='/GCEK-GDSCFrontend'>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/gcsj" element={<GoogleCloudJam/>}/>
        </Routes>
        </BrowserRouter> */}
      
    </div>
  );
}

export default App;
