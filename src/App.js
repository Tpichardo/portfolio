import './App.css';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
