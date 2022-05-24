import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import AddProduct from './Admin/AddProduct';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Purchase from './Pages/Purchase';

function App() {
  return (
    <div className="App">
      <div><Navbar></Navbar></div>
     <Routes>
      <Route path='/home' element = {<Home></Home>}></Route>
      <Route path='/addProduct' element = {<AddProduct></AddProduct>}></Route>
      <Route path='/login' element = {<Login></Login>}></Route>
      <Route path='/register' element = {<Register></Register>}></Route>
      <Route path='/addProduct' element = {<AddProduct></AddProduct>}></Route>
      <Route path='/purchase' element = {<Purchase></Purchase>}></Route>
     
      

     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
