import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About.js';
import Favorite from './components/Favorite/Favorite.js';
import Home from './components/Home/Home.js';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page404 from './components/Page404/Page404.js';
import List from './components/List/List';


const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" component={<Page404/>} /> 
        </Routes>
      </Container>
    </main>
  );
};

export default App;