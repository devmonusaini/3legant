import React from 'react'
import Navbar from './Components/Navbar'

import Footer from './Components/Footer'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart'
import CheckOut from './Pages/CheckOut'
import Complete from './Pages/Complete'
import ProductDetails from './Pages/ProductDetails'
import AccountPage from './Pages/AccountPage'
import Signup from './Pages/Signup'
import Signin from './Pages/Signin'
import Forgotpassword from './Pages/Forgotpassword'
import { ToastContainer } from "react-toastify";
import ResetPassword from './Pages/ResetPassword'




const App = () => {
  return (
<>
<Navbar/>
<ToastContainer position="top-right" />
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact-us' element={<Contact/>} />
  <Route path='/cart' element={<Cart/>} />
  <Route path='/check-out' element={<CheckOut/>} />
  <Route path='/complete' element={<Complete/>} />
  <Route path='/product-details' element={<ProductDetails/>} />
  <Route path='/account-page' element={<AccountPage/>} />
  <Route path='/sign-up' element={<Signup/>} />
  <Route path='/sign-in' element={<Signin/>} />
  <Route path='/forgot-password' element={<Forgotpassword/>} />
  <Route path='/reset-password' element={<ResetPassword/>} />
 


</Routes>
<Footer/>

</>
  )
}

export default App