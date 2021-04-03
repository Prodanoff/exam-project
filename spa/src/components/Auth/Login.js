import { useState  } from 'react'
import{useHistory} from "react-router-dom"


const Login = ({ logState }) => {
    const [ isLog, setIsLog] = logState
    const [errMsg, setErrMesg] = useState(``)
    const history=useHistory()
    const loginHandler = function (e) {
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value

        fetch('http://localhost:5000/api/auth/login', {
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
                if (res.message == 'No such user or password!') {
                    setErrMesg(res.message)
                    setTimeout(() => {
                        setErrMesg(``)
                    }, 3000);
        
                }
                else {
                    localStorage.setItem('userToken', res.token);
                    localStorage.setItem('username', res.username);
                    localStorage.setItem('userId', res._id);
                    setIsLog(localStorage.username)
                    document.cookie= `mpToken = ${res.token}`
                    history.push('/')
                    
                }

            })
            .catch(err => {
                console.log(err.message)
            })

    }
    return (
        <div class="row">
            <div class="row gray-bg">

                <section id="tm-section-4" class="tm-section">
                    <div class="tm-container">

                        <h2 class="blue-text tm-title text-xs-center">Login</h2>
                        <h2 class="red-text tm-title text-xs-center">{errMsg}</h2>

                        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                            <form onSubmit={loginHandler} method="POST" class="tm-contact-form">
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