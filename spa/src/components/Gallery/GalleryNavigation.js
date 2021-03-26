import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
const GalleryNavigation = ({

}) => {


    return (
        <div class="tm-flex-center">
            <Link to="/gallery/Вежди" class="btn btn-default tm-normal-btn tm-green-btn" >Вежди</Link>
            <Link to="/gallery/Устни" class="btn btn-default tm-normal-btn tm-green-bordered-btn">Устни</Link>
            <Link to="/gallery/ОчнаЛиния" class="btn btn-default tm-normal-btn tm-green-btn">ОчнаЛиния</Link>
            <Link to="/gallery/" class="btn btn-default tm-normal-btn tm-green-btn">Всички</Link>
        </div>
    )
}
export default GalleryNavigation