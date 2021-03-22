

const Work = () => {
    return(
        <div class="row">
        <div class="row gray-bg">

            <section id="tm-section-4" class="tm-section">
                <div class="tm-container">

                    <h2 class="blue-text tm-title text-xs-center">Add work</h2>

                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <form action="/Work" method="POST" class="tm-contact-form">
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text" id="contact_name" name="username" class="form-control" placeholder="category" required />
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text" id="contact_name" name="password" class="form-control" placeholder="image" required />
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text" id="contact_name" name="password" class="form-control" placeholder="description" required />
                            </div>
                            <button type="submit" class="btn tm-light-blue-bordered-btn pull-xs-right">Add</button>
                        </form>
                    </div>                   
                    </div>                    
                </section>


        </div>
        </div>
    )
}
export default Work