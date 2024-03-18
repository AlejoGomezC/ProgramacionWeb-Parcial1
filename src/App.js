import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBarComponent/NavBar';
import Login from './components/loginComponent/Login';
import Footer from './components/footerComponent/Footer';
import VehicleList from './components/vehicleListComponent/VehicleList';

function App() {
  return (
    <Router>
      <div>
        <nav><NavBar></NavBar></nav>
        <div>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/VehicleList" element={<VehicleList />} />
          </Routes>
        </div>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </Router>
  );
}

export default App;
