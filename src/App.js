import React from "react";
// import "./app.css"
import { Footer } from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";   //rafce
import {Button,Card, iconButton, pageNotFound} from "./components/Shared";
import{articlePage} from "./components/Article/articlePage";


// import "as"shared from "./components/Shared";


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
const App = ()=> {
  return(
    <>
     <BrowserRouter>
     <Routes>
       <Route path="/" element = {<Layout/>}>
        <Route index element = {<homePage/>}/>
        <Route path="/artice" element = {<articlePage/>}/>
       </Route>
       <Route path="*" element = {<pageNotFound/>}/>
     </Routes>
    <h1>Hello</h1> 
    
    <Card/>

    </BrowserRouter>
    
    </>
  )
};
export  {App}; 
