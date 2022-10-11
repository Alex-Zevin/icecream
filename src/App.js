import './App.css';
import logo from './assets/images/logo.png'
import vector from './assets/images/Vector.png'


function App() {
    return (
        <div className="App">
            <header>
                <div className="header_all">
                    <img src={logo} alt="Logo"/>
                    <div className="header_nav">
                        <div className="header_nav_action">
                            <img src={vector} alt="vector"/>
                            <span>Sign up / Sign in</span>
                        </div>
                        <div className="header_nav_action">
                            <img src={vector} alt="vector"/>
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
