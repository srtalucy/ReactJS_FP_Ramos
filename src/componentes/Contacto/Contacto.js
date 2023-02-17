import React from "react";
import './Contacto.css'

const Contacto = ()=>{
    return(
        <div className="container-fluid">
        <div className="row">
          <article className="col d-flex flex-column align-items-center text-center">
            <h1 className="titulo">TE CONTACTAMOS!</h1>
            <p>
              ♥Ingresa tus datos si te gustaria recibir más info sobre BTS♥
            </p>
          </article>
        </div>
        <div className="mb-3 d-flex flex-column align-items-center">
          <label for="exampleFormControlInput1" className="form-label">Nombre/s</label>
          <input type="text" className="form-control w-50"  placeholder="Tu/s nombre/s"/>
        </div>
        <div className="mb-3 d-flex flex-column align-items-center">
          <label for="exampleFormControlInput1" className="form-label">Apellido/s</label>
         <input type="text" className="form-control w-50"  placeholder="Tu/s apellido/s"/>
        </div>
        <div className="mb-3 d-flex flex-column align-items-center">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control w-50"  placeholder="name@example.com"/>
        </div>
        <div class="mb-3 d-flex flex-column align-items-center">
          <label for="exampleFormControlInput1" className="form-label">Número celular</label>
          <input type="number" className="form-control w-50"  placeholder="15xxxxxxxx"/>
        </div>
      <div className="col-12 d-flex flex-column align-items-center">
      <button className="btn btn-secondary" type="submit">Enviar formulario</button>
    </div>
      
  
      </div>
   
    )
}

export default Contacto;