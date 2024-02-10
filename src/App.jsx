import React from 'react'
import Navbar from './components/Navbar';
import Work from './components/Work';

function App() {
  return <div className="bg-[#161618] text-white w-full min-h-screen">
    <Navbar/>
    <Work/>
  </div>;
}

export default App