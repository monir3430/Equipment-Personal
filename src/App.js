import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import AddProduct from './Admin/AddProduct';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Purchase from './Pages/Purchase';
import RequiredAuth from './Auth/RequiredAuth';
import Blogs from './Pages/Blogs';
import MyPortfolio from './Pages/MyPortfolio';
import Details from './Pages/Details';
import PurchaseModal from './Pages/PurchaseModal';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <div><Navbar></Navbar></div>
     <Routes>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/home' element = {<Home></Home>}></Route>
      <Route path='/portfolio' element = {<MyPortfolio></MyPortfolio>}></Route>
      <Route path='/login' element = {<Login></Login>}></Route>
      <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
      <Route path='/modal' element = {<PurchaseModal></PurchaseModal>}></Route>
      <Route path='/detail/:id' element = {
        <Details></Details>}></Route>
      <Route path='/register' element = {<Register></Register>}></Route>
      <Route path='/purchase' element = {
      <RequiredAuth>
        <Purchase/>
      </RequiredAuth>}>
      </Route>
      <Route path='/dashboard' element = {
      <RequiredAuth>
        <Dashboard/>
      </RequiredAuth>}>
      </Route>
     
      

     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
