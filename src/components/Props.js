const NosotrosProps = props =>{
    return(
        <h3>  {props.nombre} </h3>
    )

}

const NosotrosProps2 = props =>{
    const{elementos} =props;

    return(
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}</li>)}
        </ul>
    )

}

const NosotrosProps3 = ({titulo, subtitulo, cuerpo}) =>{

    return(
        <div className="caja">
            <h4>{titulo}</h4>
            <h5>{subtitulo}</h5>
            <p>{cuerpo}</p>

        </div>
    )

}

export {
    NosotrosProps,
    NosotrosProps2,
    NosotrosProps3
}