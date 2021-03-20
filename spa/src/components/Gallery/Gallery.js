import OnePicture from './OnePictire'
const Gallery = ()=>{
    return(
        
        <div className="row">

        <section id="tm-section-3" className="tm-section">
            <div className="tm-container text-xs-center">
                
                <h2 className="blue-text tm-title">Галерия</h2>
                <p className="margin-b-5">Снимки на работата ми .</p>
               
                <div className="tm-img-grid">
                    <OnePicture/>
                    <OnePicture/>
                    <OnePicture/>
                    <OnePicture/>
                    <OnePicture/>
                    <OnePicture/>
                    <OnePicture/>
                    <OnePicture/>
                </div>
            </div>
        </section>

    </div> 
    )
}
export default Gallery