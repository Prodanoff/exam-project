

const Login = () => {
    const loginHandler = function(e){
        e.preventDefault()
        let username= e.username.value
        let password=e.password.value
    }
    return (
        <div class="row">
        <div class="row gray-bg">

            <section id="tm-section-4" class="tm-section">
                <div class="tm-container">

                    <h2 class="blue-text tm-title text-xs-center">Login</h2>

                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <form onSubmit={loginHandler} method="post" class="tm-contact-form">
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text" id="contact_name" name="username" class="form-control" placeholder="username" required />
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text" id="contact_name" name="password" class="form-control" placeholder="password" required />
                            </div>
                            

                            <button type="submit" class="btn tm-light-blue-bordered-btn pull-xs-right">Submit</button>
                        </form>
                    </div>                   
                    </div>                    
                </section>


        </div>
        </div>
    )
}
 export default Login