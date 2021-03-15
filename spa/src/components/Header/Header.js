import style from './Header.css'
const Header = () => {
    return (
        <header id="header">
            <div className="inner">
                <a href="#" class="logo">Margarita Prodanova</a>
                <nav id="nav">
                    <a href="#">Вежди</a>
                    <a href="#">Устни</a>
                    <a href="#">Очна линия</a>
                </nav>
            </div>
        </header>
    );
};
export default Header;