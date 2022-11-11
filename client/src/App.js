import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './components/MainPage';
import { DetailPage } from './components/DetailPage';
import { Basket } from './components/Basket';
import { AuthWrapper } from './components/AuthWrapper';

import './App.css';

export const MyContext = createContext(null)

function App() {
  const [basket, setBasket] = useState(null)
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('user'))
  const [loginActive, setLoginActive] = useState(false)

  const userId = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  const contextValues = {
    basket,
    setBasket,
    isAuth,
    setIsAuth,
    userId,
    token,
    loginActive,
    setLoginActive,
  }

  useEffect(() => {
    if (isAuth) {
      axios.get(`http://localhost:5000/api/basket/${userId}`, {
        headers: {
          Authorization: token
        }
      }).then((response) => setBasket(response.data))
    }
  }, [isAuth])

  return (
    <MyContext.Provider value={contextValues}>
      <div className="App">
        <Header/>
        <main>
          <div className="container">
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="detail/:prodId" element={<DetailPage/>}/>
              <Route path="basket" element={<AuthWrapper><Basket/></AuthWrapper>}/>
            </Routes>
          </div>
        </main>
        <Footer/>
      </div>
    </MyContext.Provider>
  );
}

export default App;
