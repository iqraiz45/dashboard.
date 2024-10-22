import React from 'react';
import './App.css';
import Content from './components/Content';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OuterBox from './components/OuterBox'; 
import BoxesSection from './components/BoxesSection'; // Importing the new BoxesSection component

function App() {
  return (
    <div className="App">
      <div className="app-layout">
        <Sidebar />
        <div className="main-content">
          <Content />
          <Navbar />
          <BoxesSection/>
         
        
              
          
          {/* Adding the boxes below the navbar */}
        </div>
      </div>
    </div>
  );
}

export default App;
