import './App.css';
//import axios from 'axios';
import React, { useState, useEffect } from "react";
import PersonList from './Component/UserComponent.js';

function App() {
  return (
    <div className="App">
      <PersonList/>
    </div>
  )
};

export default App;