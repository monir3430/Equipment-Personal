import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import AddProduct from './Admin/AddProduct';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
      <Route path='/home' element = {<Home></Home>}></Route>
      <Route path='/addProduct' element = {<AddProduct></AddProduct>}></Route>

     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
