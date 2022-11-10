import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './components/MainPage';
import { DetailPage } from './components/DetailPage';
import { Basket } from './components/Basket';

import './App.css';
import { createContext, useState } from 'react';

export const MyContext = createContext(null)

function App() {
  const [basket, setBasket] = useState(JSON.parse(localStorage.getItem('basket')) || null)
  const [isAuth, setIsAuth] = useState(!!JSON.parse(localStorage.getItem('user')))
  const contextValues = {
    basket,
    setBasket,
    isAuth,
    setIsAuth
  }

  return (
    <MyContext.Provider value={contextValues}>
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="detail/:prodId" element={<DetailPage/>}/>
              <Route path="basket" element={<Basket/>}/>
            </Routes>
          </div>
        </main>
        <Footer/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
