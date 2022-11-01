import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MainPage } from './components/MainPage';
import { DetailPage } from './components/DetailPage';
import { Basket } from './components/Basket/';

import './App.css';

function App() {
  return (
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

  );
}

export default App;
