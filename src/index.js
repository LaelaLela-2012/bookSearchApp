import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import About from "./pages/About/About";
import BookList from './component/Booklist/BookList'
import BookDetails from './component/BookDetails/BookDetails'
import Booklist from './component/Booklist/BookList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='/about' element={<About />} />
        <Route path='/book' element={<Booklist />} />
        <Route path='/book/:id' element={<BookDetails />} />
      </Route>
    </Routes>
  </BrowserRouter>
);