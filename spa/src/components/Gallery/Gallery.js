import OnePicture from './OnePictire'
import GalleryNavigation from './GalleryNavigation'
import LoadMore from './LoadMore'
import { useState, useEffect, Component } from 'react'
import { Link } from 'react-router-dom'
const Gallery = (
    {
        match
    }
) => {

    const [works, setWorks] = useState([]);
    const [loaded, setLoaded] = useState(6)


    useEffect(() => {
        let url = `http://localhost:5000/api/work/`
        if (match.params.category) {
            url = `http://localhost:5000/api/work/${match.params.category}`
        }

        fetch(url)
            .then(res => res.json())
            .then(res => setWorks(res))
    }, [match])

    return (

        <div>
            <div id="tm-section-2" class="tm-section">
                <GalleryNavigation></GalleryNavigation>
                <div class="tm-container tm-container-wide">
                    {
                        works.slice(0, loaded).map(work =>
                            <OnePicture
                                key={work._id}
                                id={work._id}
                                category={work.category}
                                img={work.image}
                                description={work.description}
                            />

                        )
                    }
                </div>
            </div>
            <div class="tm-flex-center">
                <a class="btn btn-default tm-normal-btn tm-green-bordered-btn" onClick={() => setLoaded(loaded + 6)}>Зареди още</a>
            </div>
        </div>


    )
}
export default Gallery
