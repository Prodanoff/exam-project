import './Footer.css'
import { useState, useEffect } from 'react'
import { FacebookProvider, Page } from 'react-facebook'
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
            <p className=" tm-footer-text">Copyright &copy; CRAFT MASTER Margarita Prodanova {year} </p>
            <FacebookProvider  appId="1872903546207010">
                                    <Page href="https://www.facebook.com/Micropigmentation.Margarita.Prodanova/?ref=page_internal" colorScheme="dark" showFaces share size="" />
                                </FacebookProvider>
               
            </div>
        </footer>
    )
}
export default Footer