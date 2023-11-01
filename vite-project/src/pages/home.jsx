import './home.css';
import Navbar from '../components/navbar/navbar';
import MyMap from '../components/map/map'
function Home(){



    return(
        
        <div >
        <h1>React Leaflet Map</h1>
        <MyMap />
      </div>
        
    );

}

export default Home;