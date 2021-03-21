

const Register = () => {
    return (
        <div class="row gray-bg">

            <section id="tm-section-4" class="tm-section">
                <div class="tm-container">

                    <h2 class="blue-text tm-title text-xs-center">Register</h2>

                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <form action="index.html" method="post" class="tm-contact-form">
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text"  name="username" class="form-control" placeholder="username" required />
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text"  name="password" class="form-control" placeholder="password" required />
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text"  name="repeat password" class="form-control" placeholder="repeatPassword" required />
                            </div>
                            <button type="submit" class="btn tm-light-blue-bordered-btn pull-xs-right">Submit</button>
                        </form>
                    </div>                   
                    </div>                    
                </section>


        </div>
    )
}
 export default Register