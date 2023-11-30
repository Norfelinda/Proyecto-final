
import "../css/nosotros.css";

import { NosotrosProps, NosotrosProps2, NosotrosProps3 } from "../components/Props";
const nombre2 = 'the best in Fish and chiken ';
const ingredientes = ['arroz japonés', 'vinagre de arroz', 'azúcar', 'sal', 'alga kombu', 'vino de arroz-sake', 'Pollo']
const verduras = ['papa', 'repollo', 'tomate', 'Zanahoria', 'Remolacha', 'pepino', 'limones']

const Nosotros = (props) => {
  
  return (
    <div>
      {/* propiedades simples y reutilisables*/}
      <h2>  Restaurante de Gastronomia para degustar los mejores sabores  en pescados && pollo  </h2>
      <NosotrosProps nombre="en FoodSion " />
      {/* reutilisamos */}
      <NosotrosProps nombre={nombre2} />

       {/* comienzo del div */}
        <div class="nosotros1">
            <h3>Reseña</h3>
            <p> FoodSion Resto: somos  nueva en el mercado, tenemos como misión ofrecerles platos de diferentes sabores
                y esquisites para su paladar que puedan deleitar con su familia, amigos, parejas, novia, novio pasar momentos 
                inolvidables degustados nuestros platos de preferencia para ello contamos con profecionales calificados en el
                regro 
                A nuestros personales capacitamos todos los dias a primera hora de cada dia por ello llevamos tema como:

                " Valores "
                Respeto
                Honestidad, humildad y solidaridad
                Crecimiento continuo
                Comunicación profunda (vertical y horizontal)
                Trabajo en equipo y empatía
            </p>
            

        </div>

        <div class="personas">
                    <div class="persona">
                        <img src="/nosotros/nosotros1.jpg" alt="Juan Gomez"/>
                        <h5>Juan Gomez</h5>
                        <h6>Supervisor</h6>
                        <p> 
                            adipisicing elit. Error euasi perspiciatis eius
                        </p>
                    </div>

                    <div class="persona">
                        <img src="/nosotros/nosotros2.jpg" alt="Juan Gomez"/>
                        <h5>María Gomes</h5>
                        <h6>Administracion- Compas - Ventas</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error euasi perspiciatis eius?
                            adipisicing elit. Error euasi perspiciatis eius
                        </p>
                    </div>
                    <div class="persona">
                        <img src="/nosotros/nosotros4.jpg" alt="Juan Gomez"/>
                        <h5>Pedro pica piedra</h5>
                        <h6>Cheff - Especialista en Gastronomia</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error euasi perspiciatis eius?
                            adipisicing elit. Error euasi perspiciatis eius
                        </p>
                    </div>

                    <div class="persona">
                        <img src="/nosotros/nosotros3.jpg" alt="Juan Gomez"/>
                        <h5>Lina del monte </h5>
                        <h6> Cheff - Especialista en Gastronomia</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error euasi perspiciatis eius?
                            adipisicing elit. Error euasi perspiciatis eius
                        </p>
                    </div>
                    <div class="persona">
                        <img src="/nosotros/nosotros6.jpg" alt="Juan Gomez"/>
                        <h5>Shaky Peres</h5>
                        <h6>Camarera - atencion a clientes</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error euasi perspiciatis eius?
                            adipisicing elit. Error euasi perspiciatis eius
                        </p>
                    </div>

                    <div class="persona">
                        <img src="/nosotros/nosotros5.jpg" alt="Juan Gomez"/>
                        <h5>Victor Morenito </h5>
                        <h6>Camarera - Atencion a clientes</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error euasi perspiciatis eius?
                            adipisicing elit. Error euasi perspiciatis eius
                        </p>
                    </div>
                    
          </div>          
          
      

       {/* fin del div */}


      {/* armamos array de elmentos con los productos*/}
      <h4>Trabajamos con productos frescos de primera calidad ::::
        Nuestros Ingredientes: </h4>
      <NosotrosProps2 elementos={ingredientes} />
      <h4>Husamos Verduras de primera calidad: </h4>
      <NosotrosProps2 elementos={verduras} />

      {/* multiples propiedades y destructurin*/}
      <NosotrosProps3 titulo=" Menú de la casa " subtitulo="Descuentos al 10%, 20%, 25%, 30%" cuerpo="comprando 20,40, 60, 80 piezas, 
         para disfrutar con la familia" />
      <h6>Si paga en efectivo podemos 45%, solo de lunes a vienes  </h6>
    </div>
  )



}
export default Nosotros;