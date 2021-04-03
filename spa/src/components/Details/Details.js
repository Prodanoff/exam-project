import { useState, useEffect } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'

const Details = (
    {
        match,
        logState

    }
) => {
    const history = useHistory()
    const [isLog, setIsLog] = useState()
    const [details, setDetails] = useState([])
    let currCategory = match.params.id
    let url = `http://localhost:5000/api/work/details/${currCategory}`
    let deleteUrl = `http://localhost:5000/api/work/delete/${currCategory}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => setDetails(res))
            setIsLog(localStorage.username)
    }
    
    , [])
    const deleteHandler = (e) => {
        e.preventDefault()
        fetch(deleteUrl, { method: 'DELETE' })
            .then(res => console.log(res))
        history.push('/gallery')

    }
    const redactHandler = (e) => {
        e.preventDefault()
        history.push(`/work/redact/${details._id}`)
    }
    return (
        <div class="container-fluid">

            <div class="row">
                <div id="tm-section-1" class="tm-section">
                    <div class="col-md-12">
                        <h1 class="text-xs-center blue-text tm-page-2-title">{details.category}</h1>

                        <p class="text-xs-center tm-page-2-p tm-page-2-subtitle">{details.description}</p>
                        <img src={details.image} class="img-fluid tm-banner-img" alt="Image" />
                        <div class="tm-flex-center">
                            {isLog?
                            (<>
                            <button class="btn btn-default tm-normal-btn tm-green-btn" onClick={deleteHandler}>Изтрий</button>
                            <button class="btn btn-default tm-normal-btn tm-green-btn" onClick={redactHandler}>Редактирай</button>
                            </>)
                            :
                            null
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details
