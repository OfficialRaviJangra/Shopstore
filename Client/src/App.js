import React from 'react';
import "./App.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Category from "./Components/Category/Category"
import Singleproduct from "./Components/SingleProduct/Singleproduct"
import Appcontext from './utils/Context';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Newsletter from './Components/Footer/Newsletter/Newsletter';
function App() {
  return (
    <>
      <BrowserRouter>
        <Appcontext>
          <Routes>
            <Route path='/' element={<> <Navbar /> <Newsletter /> <Footer /></>}>
              <Route index element={<Home />}></Route>
              <Route path='/category/:id' element={<Category />}></Route>
              <Route path='/product/:id' element={<Singleproduct />}></Route>
            </Route>
          </Routes>
        </Appcontext>
      </BrowserRouter>
    </>
  );
}


export default App;