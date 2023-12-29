import './App.css';
import Home from './pages/Home/home';
import { BrowserRouter as  Router,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPI from './pages/index/spi'
import SSI from './pages/index/ssi'
import SRI from './pages/index/sri'
import Filters from './pages/filters/filters';

function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/spi" element={<SPI/>} />
        <Route exact path="/ssi" element={<SSI/>} />
        <Route exact path="/sri" element={<SRI/>} />
        <Route exact path="/search" element={<Filters/>} />
        </Routes>
      
    </Router>  
  );
}

export default App;
