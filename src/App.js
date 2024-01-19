import React from 'react'
import {Navbar} from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom';
import {Home} from './pages/Home';
import  {Cart} from './pages/Cart';



export const App = () => {
  return (
    
      <div>
      <div className="bg-slate-900">
        <Navbar/>
        </div>
        <Routes>
          <Route  path='/' element={<Home></Home>}>

          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      
      

    </div>
  )
}


export default App;
