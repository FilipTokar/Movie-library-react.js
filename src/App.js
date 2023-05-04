import './App.css';
import Home from './Pages/Home';
import MovieInfo from './Pages/MovieInfo';
import Movies from './Pages/Movies';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:movie' element={<Movies/>}/>
          <Route path='/movies/movie/:movieID' element={<MovieInfo/>}/>
        </Routes>

       </Router>
    
    </div>
  );
}

export default App;
