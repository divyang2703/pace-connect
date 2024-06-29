import React, {lazy, useState, useEffect, } from 'react';
import ClimbingBoxLoader  from "react-spinners/ClimbingBoxLoader";


import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = lazy(() => import('../src/pages/Hero'));
const Services = lazy(() => import('../src/pages/Services.jsx'));
const Client = lazy(() => import('./pages/Client.jsx'));
const Team = lazy(() => import('./pages/Team.jsx'));
const About = lazy(() => import('../src/pages/About.jsx'));
const Contact = lazy(() => import('../src/pages/Contact.jsx'));
const Pricing = lazy(() => import('./pages/Pricing.jsx'));
const FAQ = lazy(() => import('../src/components/FAQ'));



function App() {
  const override= {
    display: "block",
    margin: "0 auto",
    marginTop: "50vh",
    borderColor: "red",
  };

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      {
        loading ? 
        <ClimbingBoxLoader 
        color={'#36d7b7'}
        loading={loading}
        cssOverride={override}
        size={30}
        className='flex justify-center place-items-center'
      /> :  <><Navbar /><Hero /><Services /><Client /><Pricing /><Team /><About /><Contact /><FAQ /><Footer /></>
}
    </div>
  );
}

export default App;
