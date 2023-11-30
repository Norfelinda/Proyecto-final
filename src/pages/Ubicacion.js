
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"//contenedor del mapa es como el div, TileLayer aqui estan toda la imagenes del mapa, macador de ubicacion y descricion, Marker- Popup se usan juntos
import "leaflet/dist/leaflet.css";
import "../css/ubicacion.css";
//import { latLng } from "leaflet";
import { useState } from "react";

 const Ubicacion = (props) =>{
    const [Location, setLocation] = useState({ lat: "-33.4717787", lng: "-70.9594905"} );
   
    const FuncionArgentina = () =>{
        setLocation( {
             lat: "-34.7784839",
              lng: " -56.9044295"}            
        );
    };
    const FuncionChile = () =>{
        setLocation( {
            lat: "-33.4717787",
             lng: " -70.9594905"}            
       );
    };
    const FuncionPeru = () =>{
        setLocation( {
            lat: "-15.5700225",
             lng: " -82.9358942"}            
       );
    };
   // -23.922747,-90.7386004
    return(
        <div className="mapa"> 
        <h2>hola Aquí nos ubicamos  </h2>
        <MapContainer center={Location} zoom={10} >

        <TileLayer
         url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>

         <Marker position={Location}>
            <Popup> Esto es santiago de chile   </Popup>
         </Marker>   

        </MapContainer>
           <div className="botones">
                <button onClick={() =>FuncionArgentina()}>Argentina</button>
                <button onClick={() =>FuncionChile()}>Chile</button> 
                <button onClick={() =>FuncionPeru()}>Peru</button> 
          </div> 

        </div>
    )
}
export default Ubicacion;