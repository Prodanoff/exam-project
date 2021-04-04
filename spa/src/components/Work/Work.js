import { useState, useEffect } from 'react'

const Work = () => {
    const [msg, setMsg] = useState(``)
    const onSubmitHandler = function (e) {

        e.preventDefault();
        let category = e.target.category.value
        console.log(category)
        let image = e.target.image.value
        let description = e.target.description.value
        console.log(image)

        if (category && image && description) {
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
                .then(res => res.json())
                .then(res => {
                    setMsg(`Добавено! `)
                    setTimeout(() => {
                        setMsg(``)
                    }, 3000);
                })
            
        }
        else {
            setMsg(`Попълни всички полета!`)
            setTimeout(() => {
                setMsg(``)
            }, 3000);
        }
        document.getElementById("addForm").reset()


    }

    return (
        <div class="row">
            <div class="row gray-bg">

                <section id="tm-section-4" class="tm-section">
                    <div class="tm-container">

                        <h2 class="blue-text tm-title text-xs-center">Добави</h2>
                        {msg ?
                            <h2 class="blue-text tm-title text-xs-center">{msg}</h2>
                            :
                            null

                        }

                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <form onSubmit={onSubmitHandler} class="tm-contact-form" id='addForm'>
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <select class="btn btn-default tm-normal-btn tm-green-btn" placeholder="choose" name="category">
                                        <option value="" selected disabled hidden>Избери категория</option>
                                        <option className="form-control" value="Вежди">Вежди</option>
                                        <option className="form-control" value="Устни">Устни</option>
                                        <option className="form-control" value="ОчнаЛиния">ОчнаЛиния</option>
                                    </select>

                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <input type="text" id="contact_name" name="image" class="form-control" placeholder="image URL" />
                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <input type="text" id="contact_name" name="description" class="form-control" placeholder="Описание" />
                                </div>
                                <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                    <input class="btn btn-default tm-normal-btn tm-green-btn" type="submit" value="Send"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    )
}
export default Work