import '../css/galeria.css';
<link href="https://fonts.googleapis.com/css2?family=Noticia+Text:ital@1&display=swap" rel="stylesheet"></link>;
<link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Noticia+Text:ital@1&display=swap" rel="stylesheet"></link>

const Galeria = (props)=>{
    return(

        <>
        <h2> Elejí a tu justo y preferencia </h2>
        <div className='pedidos'>
          
            <div className='pedido1'>
                <h3>Pescados</h3>
                <img src="/imagenes/img00.jpg " alt="img 00"/>
                <p>$ 10 000</p>

                <img src="/imagenes/img01.jpg " alt="img 01"/>
                <p>York Phila</p> 
                <p>palta, kanikama, salmon, mango </p>
                <p>$ 10 000</p>
            
            
                <img src="/imagenes/img02.jpg " alt="img 02"/>
                <p>california Sushi</p> 
                <p>queso, salmon, pepino, palta    </p>
                <p>$ 22 000</p>
            
            
                <img src="/imagenes/img03.jpg " alt="img 03"/>
                <p>Ebi</p> 
                <p>langostino, queso, palta </p>
                <p>$ 5 000 </p>
           
                
            </div>
          
            <div className='pedido2'>
                 <h3> Pollos</h3>
                <img src="/imagenes/imgP1.jpg " alt="img 01"/>
                <p>Pollo a la Brasa </p> 
                <p> papas fritas, ensalda, pollo </p>
                <p>$ 15 000</p>
            
            
                <img src="/imagenes/imgP2.jpg " alt="img 02"/>
                <p> 1/2 Pollo a la Brasa </p> 
                <p> papas fritas, ensalda, pollo </p>
                <p>$ 7 000</p>

                <img src="/imagenes/imgP3.jpg " alt="img 03"/>
                <p>$ 25 000</p>

                <img src="/imagenes/imgP4.jpg " alt="img 04"/>
                <p>$ 25 000</p>



            </div>

            <div  className='pedido3'>
            <h3>Pescados</h3>
             <img src="/imagenes/img04.jpg " alt="img 04"/>
                <p>sake yaki  $ 10 000  </p> 
                <p> salmon y palta    </p>

                <img src="/imagenes/img05.jpg " alt="img 05"/>
                <p> Roll Napoli x8, Roll Valencia x8 :   $ 16 000  </p> 
                <p> salmon y palta    </p>
            

                <img src="/imagenes/img06.jpg " alt="img 06"/>
                <p>Combo " salmon, queso, palta"   $ 18 000 </p> 
        
               

                <img src="/imagenes/img07.jpg " alt="img 07"/>
                <p> salmon  chaucha , queso    </p>
                   <p>$ 16 000</p>
            </div>


        </div>
        </>

    )
}
export default Galeria;