import{Link} from 'react-router-dom'

const OnePicture = ({
    id,
    category,
    img,
    description,

}) => {
   if(category=="ОчнаЛиния"){
       category="Очна Линия"
   }
    return (

        <div class="col-md-4">
            <div class="tm-3-col-box">
                <p class="tm-description-text">
                    {category}
                </p>
                <Link to={`/work/details/${id}`}>
                    <img src={img} alt="Image" class="img-fluid" />
                </Link>

                <div class="tm-description-box">
                    <p class="tm-description-text">
                        {description}
                    </p>

                    <div class="tm-flex-center">
                        <Link
                        to={`/work/details/${id}`} 
                        class="btn btn-default tm-normal-btn tm-green-btn">Детайли</Link>
                    </div>

                </div>
            </div>

        </div>
    )
}
export default OnePicture