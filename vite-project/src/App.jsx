import './App.css';
import Home from './pages/Home/home';
import { BrowserRouter as  Router,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPI from './pages/index/spi'
import SSI from './pages/index/ssi'
import SRI from './pages/index/sri'
import Filters_spi from './pages/filters/filters_spi';
import Filters_sri from './pages/filters/filters_sri';
import Filters_ssi from './pages/filters/filters_ssi';


function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/spi" element={<SPI/>} />
        <Route exact path="/ssi" element={<SSI/>} />
        <Route exact path="/sri" element={<SRI/>} />
        <Route exact path="/search_spi" element={<Filters_spi/>} />
        <Route exact path="/search_sri" element={<Filters_sri/>} />

        <Route exact path="/search_ssi" element={<Filters_ssi/>} />

        </Routes>
      
    </Router>  
  );
}

export default App;
