
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div class="row">

            <div class="tm-navbar-container">

                <nav class="navbar navbar-full navbar-fixed-top">

                    <div class="collapse navbar-toggleable-sm" id="tmNavbar">

                        <ul class="nav navbar-nav">
                            <li class="nav-item">
                                <Link to="/Login" class="nav-link">Login</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Register" class="nav-link">Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Gallery" class="nav-link">Галерия</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Contacts" class="nav-link">Контакти</Link>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>

        </div>

    );
};
export default Header;