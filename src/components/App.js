import React from "react";
import About from './components/About';
import Home from './components/Home';
import NavBar from './components/NavBar';
import { username, city } from './data/user';


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
