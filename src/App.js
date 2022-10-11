import './App.css';
import logo from './assets/images/logo.png'
import vector from './assets/images/Vector.png'
import cream1 from './assets/images/cream1.png'
import cream2 from './assets/images/cream2.png'
import cream3 from './assets/images/cream3.png'
import cream4 from './assets/images/cream4.png'
import heart from './assets/images/heart.png'
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
            <main>
                <div className="ice_cream">
                    <span>i</span>
                    <img src={heart} alt="heart"/>
                    <span>ice cream</span>
                </div>
                <div className='main_img container'>
                    <div className="block">
                        <div className="top">
                            <img src={cream1} alt="cream1"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream2} alt="cream2"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream3} alt="cream3"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="top">
                            <img src={cream4} alt="cream4"/>
                        </div>
                        <div className='bottom'>
                            <div className='bottom_list'>
                                <div className='li1'>Snow Tender Ice Cream</div>
                                <div className='li2'>$243.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
                <div className="copyright">
                    <div className="container">
                        <span>© 2021 Justice-team. All rights reserved.</span>
                    </div>
                </div>
            </footer>

        </div>
    );
}

export default App;
