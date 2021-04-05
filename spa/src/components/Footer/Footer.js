import './Footer.css'
import { useState, useEffect } from 'react'
const Footer = () => {
    const [year, setYear] = useState(``)
    useEffect(()=>{
        let thisEyar= new Date()
        
        setYear(thisEyar.getFullYear())
    }
    )
    return (
        <footer className="tm-footer">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <p className="text-xs-center tm-footer-text">Copyright &copy; CRAFT MASTER Margarita Prodanova {year} </p>
            </div>
        </footer>
    )
}
export default Footer