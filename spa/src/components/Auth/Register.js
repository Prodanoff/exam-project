import { useHistory } from 'react-router-dom'
import { useState } from 'react'
const Register = () => {
    let history = useHistory()
    const [errMsg, setErrMesg] = useState(``)
    const registerHandler = function (e) {

        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        let repeatPassword=e.target.repeatPassword.value
        console.log(e.target.username.value)
        if(repeatPassword!==password){
            setErrMesg(`Паролите не съвпадат!`)
                    setTimeout(() => {
                        setErrMesg(``)
                    }, 3000);
        }
        else if(password.length<6){
            setErrMesg(`Паролата трябва да е най-малко 6 знака!`)
                    setTimeout(() => {
                        setErrMesg(``)
                    }, 3000);
        }
        else if(username.length<6){
            setErrMesg(`Потребителското име трябва да е най-малко 6 знака!`)
                    setTimeout(() => {
                        setErrMesg(``)
                    }, 3000);
        }
        else{
            fetch(`http://localhost:5000/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => res.json())
            .then(res => {

                if (res.message !== "Username allready registered") {
                    history.push('/login')
                }
                else {
                    setErrMesg(`Username allready registered`)
                    setTimeout(() => {
                        setErrMesg(``)
                    }, 3000);
                }
               
            })
            

        }
        
    }
    return (
        <div class="row gray-bg">

            <section id="tm-section-4" class="tm-section">
                <div class="tm-container">

                    <h2 class="blue-text tm-title text-xs-center">Регистрация</h2>
                    <h2 class="red-text tm-title text-xs-center">{errMsg}</h2>

                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                        <form onSubmit={registerHandler} method="post" class="tm-contact-form">
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text" name="username" class="form-control" placeholder="username" required />
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text" name="password" class="form-control" placeholder="password" required />
                            </div>
                            <div class="form-group col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 tm-form-group-left">
                                <input type="text" name="repeatPassword" class="form-control" placeholder="repeatPassword" required />
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