import "../css/servicios.css";

const Servicios = (props) => {
    return (


        <div className="servicio">

            <ul>
                <li>
                    <h2> Podes hacer tu evento en nuestros locales</h2>
                    <p>Puedes reservar nuestros salones para realizar todo tipo de eventos: Cumpleaños, fiestas de 15 años, cenas
                        con amigas, despedidas de fin años, after office, salones adornados a tu preferencia,  cátering a tu gusto.
                        ¡Reservar tu fecha, es fácil y seguro!

                    </p>
                    <img src="/img1/imgM0.jpg " alt="mesa 1" />
                    <img src="/img1/imgM2.jpg " alt="mesa 2" />
                    <img src="/img1/imgM3.jpg " alt="mesa 3" />
                    <img src="/img1/imgM4.jpg " alt="mesa 4" />

                </li>
            </ul>
            <ul>
                <li>
                    <h2>Pedidos a domicilio</h2>
                    <p> Elegí tu menú de preferida y te enviamos a tu domicio con un minimo costo adicional </p>
                    
                </li>
            </ul>

            <div className="envio"> 
                 <p> llamenos al +59 94567 5494</p>
                 <img src="/img1/moto2.jpg " alt="moto 2" />
            </div>

        </div>
    )
}
export default Servicios;