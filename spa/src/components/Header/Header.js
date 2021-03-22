
import { Link, NavLink } from 'react-router-dom'
const Header = () => {
    return (
        <div className="row">

            <div className="tm-navbar-container">

                <nav className="navbar navbar-full navbar-fixed-top">

                    <div class="collapse navbar-toggleable-sm" id="tmNavbar">


                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Work" className="nav-link">Add</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/gallery" className="nav-link">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/About" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contacts" className="nav-link">Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            

                        </ul>


                    </div>


                </nav>

            </div>

        </div >

    );
};
export default Header;
