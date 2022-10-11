import './App.css';
import logo from './assets/images/logo.png'
import vector from './assets/images/Vector.png'


function App() {
    return (
        <div className="App">
            <header>
                <div className="header_all container">
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
            <footer>
                <div className="footer_all container">
                    <img src={logo} alt="Logo"/>
                    <div className="footer_nav">
                        <ul className="footer_nav_list">
                            <li className="footer_nav_list_item"><a href="#">Our Products</a></li>
                            <li className="footer_nav_list_item"><a href="#">Privacy Terms</a></li>
                            <li className="footer_nav_list_item"><a href="#">Twitter</a></li>
                            <li className="footer_nav_list_item"><a href="#">Facebook</a></li>
                            <li className="footer_nav_list_item"><a href="#">Email</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright" >
                    <div className="container">
                    <span>© 2021 Justice-team. All rights reserved.</span>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
