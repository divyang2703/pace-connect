import React, {lazy, useState, useEffect, } from 'react';
import ClimbingBoxLoader  from "react-spinners/ClimbingBoxLoader";


import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = lazy(() => import('../src/components/Hero'));
const Services = lazy(() => import('../src/components/Services'));
const Client = lazy(() => import('../src/components/Client'));
const Team = lazy(() => import('../src/components/Team'));
const About = lazy(() => import('../src/components/About'));
const Contact = lazy(() => import('../src/components/Contact'));
const Pricing = lazy(() => import('../src/components/Pricing'));
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
    }, 8000)
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
