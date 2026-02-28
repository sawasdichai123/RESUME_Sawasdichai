import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <Header />
      <main className="pb-20">
        <About />
        <Projects />
        <Skills />
        <Education />
      </main>


    </div>
  );
}

export default App;
