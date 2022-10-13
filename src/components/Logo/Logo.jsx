import logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom";

export const Logo = () => {
    return (<div>
        <Link to='/'> <img src={logo} alt="Logo"/></Link>
        </div>
    )
}
