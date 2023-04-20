import React from 'react';
import { Routes, Route, Outlet } from 'react-router';
import { BrowserRouter as Router,Link } from "react-router-dom";
import './App.scss';
import Home from './components/home/home';
import SelectCategory from './components/selectCategories/selectCategories';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Login from './components/login/login';
import Plan from './components/Plan/Plan';
import 'bootstrap/dist/css/bootstrap.min.css';
import OnePage from './components/OnePage/OnePage';
import JustPackMe from './components/JustPackMe/JustPackMe';
import AddList from './components/AddList/AddList';
// import "~bootstrap/scss/bootstrap";
// import "./node_modules/bootstrap/scss/bootstrap.scss"
function App() {

  return (
      <div>
      <div className="App">
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">JustPackMe</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar" >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Products">Products</Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link" to="/Login">login</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Gallery">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
      <Routes>
        <Route index element={<JustPackMe></JustPackMe>}></Route>
        <Route path={'Home'} element={<Home></Home>}></Route>
        <Route path={'register'} element={<Register></Register>}></Route>
        <Route path={'login'} element={<Login></Login>}></Route>
        <Route path={'plan'} element={<Plan></Plan>}></Route>
        <Route path={'SelectCategory'} element={<SelectCategory></SelectCategory>}></Route>
        <Route path={'AddList'} element={<AddList/>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

   </div>
      </div>
  )
}

export default App;
