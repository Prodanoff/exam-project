import OnePicture from './OnePictire'
import { useState, useEffect } from 'react'
const Gallery = () => {

    const [works, setWorks] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/api/work/')
            .then(res => res.json())
            .then(res => setWorks(res))

    }, [])

    return (

        <div id="tm-section-2" class="tm-section">
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
