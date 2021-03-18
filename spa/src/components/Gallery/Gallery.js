import OnePicture from './OnePictire'
const Gallery = ()=>{
    return(
        
        <div class="row">

        <section id="tm-section-3" class="tm-section">
            <div class="tm-container text-xs-center">
                
                <h2 class="blue-text tm-title">Lorem ipsum dolor sit amet</h2>
                <p class="margin-b-5">Etiam at rhoncus nisl. Nunc rutrum ac ante euismod cursus.</p>
                <p>Suspendisse imperdiet feugiat massa nex iaculis.</p>
               
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