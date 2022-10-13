import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="Logo"/>
      </Link>
    </div>
  )
}
