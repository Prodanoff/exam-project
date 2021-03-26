import { Link } from 'react-router-dom'
const LoadMore = ({
    loadded
}) => {
    return (
        <div class="tm-flex-center">
            <Link to="/loadMore" class="btn btn-default tm-normal-btn tm-green-bordered-btn" >Зареди още</Link>
        </div>
    )
}
export default LoadMore