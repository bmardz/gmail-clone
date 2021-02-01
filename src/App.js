import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './App.css';
import SidebarOptions from './SidebarOptions';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />

      <SidebarOptions />
    </div>
  );
}

export default App;
