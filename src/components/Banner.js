import "../style/components/Banner.scss"
import { useLocation } from "react-router-dom";



function Banner() {

   

    const location = useLocation()

    if (location.pathname === "/About" ) {
        return <div className='banner banner_about'>
           
  
        </div>
    } else {
        return <div className='banner banner_home'>
           <p>Chez vous, partout et ailleurs</p>
        </div>
    }


}

export default Banner


