import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Purchase from './Pages/Purchase';
import RequiredAuth from './Auth/RequiredAuth';
import Blogs from './Pages/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyPortfolio from './Pages/MyPortfolio';
import Details from './Pages/Details';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import NoFound from './Pages/NoFound';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import ManageProduct from './Pages/Dashboard/ManageProduct';
import AddProduct from './Pages/Dashboard/AddProduct';
import ResetForm from './Auth/ResetForm';
import Payment from './Pages/Dashboard/Payment';


function App() {
  return (
    <div className="App">
      <div><Navbar></Navbar></div>
     <Routes>
     <Route path='/dashboard' element = {<RequiredAuth><Dashboard/></RequiredAuth>}>
        
        <Route index element = {<MyOrders></MyOrders>}></Route>
        <Route path="addreview" element = {<AddReview></AddReview>}></Route>
        <Route path="myprofile" element = {<MyProfile></MyProfile>}></Route>
        <Route path="manageorder" element = {<ManageOrder></ManageOrder>}></Route>
        <Route path="manageproduct" element = {<ManageProduct></ManageProduct>}></Route>
        <Route path="addproduct" element = {<AddProduct></AddProduct>}></Route>
        <Route path="makeadmin" element = {<MakeAdmin></MakeAdmin>}></Route>
        <Route path="payment/:id" element = {<Payment></Payment>}></Route>
        
      
      </Route>
      <Route path='/' element = {<Home></Home>}></Route>
      <Route path='/home' element = {<Home></Home>}></Route>
      <Route path='/portfolio' element = {<MyPortfolio></MyPortfolio>}></Route>
      <Route path='/login' element = {<Login></Login>}></Route>
      <Route path='/blogs' element = {<Blogs></Blogs>}></Route>
      <Route path='/detail/:id' element = {<Details></Details>}></Route>
      <Route path='/register' element = {<Register></Register>}></Route>
      <Route path='/resetform' element = {<ResetForm></ResetForm>}></Route>
      <Route path='/purchase' element = {
      <RequiredAuth>
        <Purchase/>
      </RequiredAuth>}>
      </Route>  
      <Route path='*' element = {<NoFound></NoFound>}></Route> 
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
