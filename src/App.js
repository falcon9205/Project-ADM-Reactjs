import './App.css';
import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import { useState,useEffect } from 'react';
import Loading from './components/Loading/Loading'
function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
      setIsLoading(true)
      setTimeout(() => {
          setIsLoading(false)
      }, 5000);
  },[])

  return (
    <>
     {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
      
      )
}
export default App;

