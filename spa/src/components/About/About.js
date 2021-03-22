import Work from "../Work/Work"

const About = () => {
    return (
        <div>
            <div className="row">
            <div id="tm-section-1" className="tm-section">
                <div className="col-md-12">
                    <h1 className="text-xs-center blue-text tm-page-2-title">За мен </h1>
                    <p className="text-xs-center tm-page-2-p tm-page-2-subtitle">
                        Etiam at rhoncus nisl. Nunc rutrum ac ante euismod cursus.
                        Suspendisse imperdiet feugiat massa nec iaculis.
                    </p>
                    <img src="img/tm-1800x600-01.jpg" className="img-fluid tm-banner-img" alt="Image" />
                </div>
            </div>
        </div>

        <div className="row">
            <div className="tm-section" id="tm-section-2">
                <div className="col-md-12">
                    <p className="text-left tm-description">
                        Lumino theme is a Bootstrap 4.0 mobile compatible layout for your website.
                        Cras dolor neque, mollis et tortor eget, ornare hendrerit lectus. Donec
                        condimentum leo ut elementum consequat. Sed condimentum sagittis neque
                        in iaculis. Duis quis libero nec mauris porta luctus et sit amet turpis.
                        Proin auctor tortor quis ipsum dignissim, quis congue tortor.
                        </p>
                    <p className="text-left tm-description">
                        Aliquam non vestibulum mi, sed volutpat ipsum. Nunc ultricies quam id
                        mi semper, vitae mattis mi iaculis. Nullam tincidunt vehicula turpis at
                        porttitor. Sed bibendum odio non maximus suscipit. Pellentesque consectetur
                        orci id rutrum lacinia.
                        </p>
                    
                </div>
            </div>
        </div>
        </div>
    )
}
export default About