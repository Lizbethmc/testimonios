import React from "react";
import "../hojas de estilo/testimonio.css"

export function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" 
      src={require("../imagenes/testimonio-1.jpg")} 
      alt="Imagen de testimonio 1" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Padawan 1</p>
        <p className="cargo-testimonio">Front end Developer</p>
        <p className="texto-testimonio">Estoy muy contenta de dormar parte de Hackademy y toda su comunidad, he aprendido muchisimo y espero poder desarrollarme dentro del área tech</p>
      </div>

    </div>
  );
}

// esta es la exportación por defecto, como si fuese el unico componente del archivo
//export default Testimonio;