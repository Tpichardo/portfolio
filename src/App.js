import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills-Tools';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
