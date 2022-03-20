import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Layouts/Navbar/Navbar';
import Footer from './Components/Layouts/Footer/Footer';
import Home from './Components/Home/Home';
import webFont from 'webfontloader';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobDetailsComponent from './Components/Jobs/JobDetails/jobDetailsComponent';

function App() {

  React.useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/job/:id' element={<JobDetailsComponent />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
