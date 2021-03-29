import {useEffect, useState} from 'react'
const Redact = ({
    
    match
}
    
) =>{
    const [redact, setRedact] = useState([])
    let url=`http://localhost:5000/api/work/details/${match.params.id}`
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res=> setRedact(res))
    },[])
    console.log(redact)


    const onSubmitHandler = function (e) {
        e.preventDefault();
        let category = e.target.category.value
        
        let image = e.target.image.value
        let description = e.target.description.value
        fetch(`http://localhost:5000/api/work/redact/${match.params.id}`, {
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
    return(
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
                                        <option className="form-control" value="Вежди">Вежди</option>
                                        <option className="form-control" value="Устни">Устни</option>
                                        <option className="form-control" value="ОчнаЛиния">ОчнаЛиния</option>
                                    </select>
                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <input type="text" id="contact_name" name="image" class="form-control" placeholder="image URL" defaultValue={redact.image} />
                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <input type="text" id="contact_name" name="description" class="form-control" placeholder="Описание" defaultValue={redact.description} />
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
export default Redact