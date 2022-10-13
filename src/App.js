import { Routes, Route } from "react-router-dom";
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {MainPage} from "./components/MainPage/MainPage";
import {DetailPage} from "./components/DetailPage/DetailPage";


function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<MainPage/>} />
                        <Route path="detail/:prodId" element={<DetailPage />} />
                    </Routes>
                </div>
            </main>
            <Footer/>
        </div>

    );
}

export default App;
