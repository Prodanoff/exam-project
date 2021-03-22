import OnePicture from './OnePictire'
import { useState, useEffect } from 'react'
import{Link} from 'react-router-dom'
const Gallery = () => {

    const [works, setWorks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/api/work/')
            .then(res => res.json())
            .then(res => setWorks(res))

    }, [])

    return (

        <div id="tm-section-2" class="tm-section">
            <div class="tm-flex-center">
                <Link to="/work/vejdi" class="btn btn-default tm-normal-btn tm-green-btn">Вежди</Link>
                <Link to="/work/ustni" class="btn btn-default tm-normal-btn tm-green-bordered-btn">Устни</Link>
                <Link to="/work/ochnaLiniq" class="btn btn-default tm-normal-btn tm-green-btn">Очна линия</Link>
            </div>
            <div class="tm-container tm-container-wide">
                {
                    works.map(work =>
                        <OnePicture
                            key={work._id}
                            category={work.category}
                            img={work.image}
                            description={work.description}
                        />)
                }
            </div>

        </div>

    )
}
export default Gallery
