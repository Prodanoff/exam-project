import OnePicture from './OnePictire'
const Gallery = ()=>{
    return(
        
        <div class="row">

        <section id="tm-section-3" class="tm-section">
            <div class="tm-container text-xs-center">
                
                <h2 class="blue-text tm-title">Галерия</h2>
                <p class="margin-b-5">Снимки на работата ми .</p>
               
                <div class="tm-img-grid">
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