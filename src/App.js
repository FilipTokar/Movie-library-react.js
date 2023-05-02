import './App.css';
import Movies from './Pages/Movies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Movies/>}/>
        </Routes>

       </Router>
    
    </div>
  );
}

export default App;
