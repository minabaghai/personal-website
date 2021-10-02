import React from 'react';
import './App.css';
import Header from "./Header"
import About from "./About"
import Experiences from "./Experiences"
import Projects from "./Projects"
import PhotoDump from "./PhotoDump"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <About/>
        <Experiences/>
        <Projects/>
        <PhotoDump/>
      </header>
    </div>

  );
}

export default App;
