import { useForm } from 'react-hook-form';
import '../css/contactos.css';


const Contactos = (props) => {
    // los hook ejecutamos al inicio , useForm debuelve multiples objetos,register registra cada imput(es una funcion y debuelve un objeto)
    //handleSubmit manja el ennvio
    //formState captura lo que se escribe y te devuelve error si no es correcto

    const { register, handleSubmit, formState: {errors}, watch, reset } = useForm();
    console.log(errors);

    const onSubmit = handleSubmit((dato) => {
        console.log(dato);
        alert('enviando datos...')
        reset()

    })

    return (   
        <div className='formulario'>
  
            <form onSubmit={onSubmit} >
            <h2>Puedes contactacte con nosotros</h2>
            <img src="/imagenes/contacto1.png" alt= "imagen1"/>               

                <label htmlFor="nombre"> Nombre</label>
                <input type="text" {...register("nombre",{
                 required:{
                    value: true,
                    message:"Nombre es requerido"
                 },
                 minLength:{
                    value:2,
                    message:"Nombre debe tener almenos 2 caracteres"
                 },
                 maxLength: { 
                    value:20,
                    message:"El nombre debe tener maximo 20 caracteres"
                 }   

                 }) } />
                {
                    errors.nombre && <span>{errors.nombre.message} </span>
                }
                 
                <label htmlFor="apellido"> Apellido</label>
                <input type="text" {...register("apellido",{required:true})} />
                {
                    errors.apellido && <span>Apellido es requrido </span>
                }

                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                <input type="date" {...register("fechaNacimiento", {
                    required: {
                        value:true,
                        message:"fecha de nacimiento es requerida"
                    },
                    validate: (value) =>{
                        const fechaNacimiento = new Date(value);
                        const fechaActual = new Date();
                      

                        const edad = fechaActual.getFullYear()-fechaNacimiento.getFullYear();
                        return edad >= 18 || "debe ser mayor de edad" ;
                      
                    },
                } )}></input>
                 {
                    errors.fechaNacimiento && <span> {errors.fechaNacimiento.message} </span>
                }



                <label htmlFor='correo'> Correo</label>
                <input type='email' {...register("correo",{
                    required: {
                        value: true,
                        message:"correo es requerido"
                    },
                    pattern:{
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message:"correo no valido"
                    }
                    
                    })} />
                {
                    errors.correo && <span> {errors.correo.message} </span>
                }

                <label htmlFor='password'> Password</label>
                <input type="password" {...register("password",{
                    required:{
                    value:true,
                    message:"Password es requerido"
                    },
                    minLength:{
                        value:6,
                        message:"el password debe tener al menos 6 caracteres"
                    }

                    })} />
                {
                    errors.password && <span> {errors.password.message} </span>
                }
               
                <label htmlFor='confirmarPassword'> ConfirmarPassword</label>
                <input type='password'{...register("ConfirmarPassword", {
                    required:{
                      value: true,
                      message:" ingrese nuevamente su password"
                    },
                    validate: value => value ===watch('password') || 'los password no coinciden'
                    
                    })} />
                {
                    errors.confirmarPassword && (<span>{errors.confirmarPassword.message}</span>)
                }    

                <label htmlFor='pais'>Pais</label>
                <select {...register("pais")}>
                    <option value="ar">Argentina</option>
                    <option value="cl">Chile</option>
                    <option value="pe">Perú</option>
                    <option value="mx">Mexico</option>
                    <option value="co">Colombia</option>
                    <option value="it">Italia</option>
                    <option value="es">España</option>
                    <option value="fr">Francria</option>
                    <option value="py">Paraguay</option>
                </select>

                <label htmlFor='file'> Foto de perfil</label>
                <input type='file' {...register("foto")} />

                <div className='textarea'> 

                <label htmlFor='mensaje'>Mensajes </label>
                <textarea type='textare'>  </textarea> 
               
                </div>

                <label htmlFor='terminos'> Acepto terminos y condiciones</label>
                <input type='checkbox' {...register("terminos")} />
               

                <button type='submit'> <p>Enviar</p></button>
                <pre>{JSON.stringify(watch(),null,2)}</pre>




            </form>

        </div>

    )
}
export default Contactos;