import './App.css';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
        </Routes>

       </Router>
    
    </div>
  );
}

export default App;
