

const Work = () => {
    const onSubmitHandler = function (e) {

        e.preventDefault();
        let category = e.target.category.value
        let image = e.target.image.value
        let description = e.target.description.value
        console.log(image)

        fetch('http://localhost:5000/api/work', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                category,
                image,
                description
            })
        })
            .then(res => res.json());

    }

    return (
        <div class="row">
            <div class="row gray-bg">

                <section id="tm-section-4" class="tm-section">
                    <div class="tm-container">

                        <h2 class="blue-text tm-title text-xs-center">Add work</h2>

                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <form onSubmit={onSubmitHandler} class="tm-contact-form">
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <select placeholder="choose" name="category">
                                        <option value="" selected disabled hidden>Избери категория</option>
                                        <option className="form-control" value="vejdi">Вежди</option>
                                        <option className="form-control" value="ustni">Устни</option>
                                        <option className="form-control" value="ochna">Очна линия</option>
                                    </select>

                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <input type="text" id="contact_name" name="image" class="form-control" placeholder="image URL" />
                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <input type="text" id="contact_name" name="description" class="form-control" placeholder="Описание" />
                                </div>
                                <input type="submit" value="Send"></input>
                            </form>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}
export default Work