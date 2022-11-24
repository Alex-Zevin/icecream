import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './components/MainPage';
import { DetailPage } from './components/DetailPage';
import { Basket } from './components/Basket';
import { AuthWrapper } from './components/AuthWrapper';

import './App.css';
import { getBasket } from './redux/actions';

function App() {
  const dispatch = useDispatch();

  const userId = useSelector(state => state.userId)
  const token = useSelector(state => state.token)
  const isAuth = useSelector(state => state.isAuth)
  const basket = useSelector(state => state.basket)

  useEffect(() => {
    if (isAuth && !basket) {
      axios.get(`http://localhost:5000/api/basket/${userId}`, {
        headers: {
          Authorization: token
        }
      }).then((response) => {
        dispatch(getBasket(response.data))
      })
    }
  }, [isAuth])

  return (
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
  );
}

export default App;
