import Banner from '../Banner/Banner'
const Header = () => {
    return (
        <div class="row">
              
        <div class="tm-navbar-container">
        
    
        <nav class="navbar navbar-full navbar-fixed-top">

            <button class="navbar-toggler hidden-md-up" type="button" data-toggle="collapse" data-target="#tmNavbar">
                &#9776;
            </button>
                
            <div class="collapse navbar-toggleable-sm" id="tmNavbar">                            

                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#top">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tm-section-2">Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tm-section-3">Галерия</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#tm-section-4">Контакти</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link external" href="columns.html">За Мен</a>
                    </li>
                </ul>

            </div>
          
        </nav>

      </div>  

   </div>
   
    
    );
};
export default Header;