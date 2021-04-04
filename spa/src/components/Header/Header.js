import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Header.css'

const Header = ({ logState }) => {
    const [isLog, setIsLog] = logState
    useEffect(() => {
        let cookieName = document.cookie.split(`=`)[0]
        if (cookieName == 'mpToken')
            setIsLog(document.cookie)

    })
    const logoutHandler = () => {
        document.cookie = 'mpToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        setIsLog(undefined)

    }


    return (
        <div className="row">

            <div className="tm-navbar-container">

                <nav className="navbar navbar-full navbar-fixed-top">

                    <div class="collapse navbar-toggleable-sm" id="tmNavbar">

                        <ul className="nav navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Начало</Link>
                            </li>

                            {isLog ?
                                <>
                                    <li className="nav-item">
                                        <Link to="/AddWork" className="nav-link">Добави</Link>
                                    </li>
                                </>
                                :
                                null
                            }
                            <li className="nav-item">
                                <Link to="/About" className="nav-link">За Мен</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contacts" className="nav-link">Контакти</Link>
                            </li>
                            {isLog ?
                                (<li className="nav-item">
                                    <Link onClick={logoutHandler} className="nav-link">Изход</Link>
                                </li>)
                                :
                                (<li className="nav-item">
                                    <Link to="/login" className="nav-link">Вход</Link>
                                </li>)
                            }
                            {isLog ?
                                null
                                :
                                <>
                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">Регистрация</Link>
                                    </li>
                                </>
                            }




                        </ul>


                    </div>


                </nav>

            </div>

        </div >

    );
};
export default Header;