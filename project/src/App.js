import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Face from './miniproduct/Face';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/face' element={<Face/>}/>
      </Routes>
      
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
