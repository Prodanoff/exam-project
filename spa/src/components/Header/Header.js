import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({logState}) => {
    const [isLog, setIsLog] = logState
    useEffect(() => {
        setIsLog(localStorage.username)
       
    })
    const logoutHandler = () => {
        localStorage.clear()
        setIsLog(undefined)
        
    }


    return (
        <div className="row">

            <div className="tm-navbar-container">

                <nav className="navbar navbar-full navbar-fixed-top">

                    <div class="collapse navbar-toggleable-sm" id="tmNavbar">

                        <ul className="nav navbar-nav">
                            {isLog ?
                                (<li className="nav-item">
                                    <Link onClick={logoutHandler} className="nav-link">Logout</Link>
                                </li>)
                                :
                                (<li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>)
                            }


                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                            {isLog ?
                            <>
                            <li className="nav-item">
                                <Link to="/AddWork" className="nav-link">Add</Link>
                            </li>
                            </>
                            :
                            null
                            }
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