
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div class="row">

            <div class="tm-navbar-container">

                <nav class="navbar navbar-full navbar-fixed-top">

                    <div class="collapse navbar-toggleable-sm" id="tmNavbar">

                        <ul class="nav navbar-nav">
                            <li class="nav-item">
                               <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li class="nav-item">
                              <Link to="/Register" className="nav-link">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Gallery" className="nav-link">Галерия</Link>
                            </li>
                            <li class="nav-item">
                               <Link to="/About" className="nav-link">За мен</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Contacts" className="nav-link">Контакти и локация</Link>
                            </li>
                        </ul>

                    </div>

                </nav>

            </div>

        </div>

    );
};
export default Header;