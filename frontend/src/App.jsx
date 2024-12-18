import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from './components/Articles';
import ArticleEditor from './components/ArticleEditor';
const App = () => {
    return(
        <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
        {/* <Route path="/" element={<Articles />}></Route> */}
        <Route path='/createarticle' element={<ArticleEditor />}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App;