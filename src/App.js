import React from 'react';


import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Cart } from './pages';




function App() {
  
  

  return (
    <div className="wrapper">
        <Header/>
        
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        
        </div>
      </div>
  );
}



//export default connect(
//   (state) => {
//  return {
//    items: state.pizzas.items,
//    filters: state.filters,
//  };
//},
//  (dispatch) => {
// return {
//    setPizzas: (items) => dispatch(setPizzas(items)),
    
//  };
//},

//)(App);
export default App;