
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

import '../css/home.css';

const HomePege = (props) => {

    const settings = {
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 1000,
        fade: true,
        autoplay: true,
    };

    return (
        <div className="galeri">
            {/* los tres puntitos hace que englaban a todo los de */}
            <Slider {...settings}>

                <img src="/imagenes/imagen1.jpg" alt=" " />
                <img src="/imagenes/img0.jpg" alt=" " />
                <img src="/imagenes/imagen2.png" alt=" " />
                <img src="/imagenes/imagen3.png" alt=" " />
                <img src="/imagenes/imagen4.png" alt=" " />
                <img src="/imagenes/imagen5.jpg" alt=" " />
                <img src="/imagenes/imagen6.jpg" alt=" " />
                <img src="/imagenes/imagen9.jpg" alt=" " />
                <img src="/imagenes/pollo1.jpg" alt=" " />
                <img src="/imagenes/pollo2.jpg" alt=" " />
                
            </Slider>

            <h5 > Puedes acercarse a nuestros coles en:              SAN DIEGO #1379 SANTIGO </h5>    
        </div>
    )
}
export default HomePege;