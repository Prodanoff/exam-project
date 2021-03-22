

const OnePicture = ({
    category,
    img,
    description
}) => {

    return (

        <div class="col-md-4">
            <div class="tm-3-col-box">
                <p class="tm-description-text">
                    {category}
                </p>
                <a href={img}>
                    <img src={img} alt="Image" class="img-fluid" />
                </a>

                <div class="tm-description-box">
                    <p class="tm-description-text">
                        {description}
                    </p>

                    <div class="tm-flex-center">
                        <a href="#" class="btn btn-default tm-normal-btn tm-green-btn">Изтриване</a>
                        <a href="#" class="btn btn-default tm-normal-btn tm-green-bordered-btn">Редакция</a>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default OnePicture