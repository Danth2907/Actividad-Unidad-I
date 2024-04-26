import React, { useState } from "react";


const Listameta = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [metas, setMetas] = useState([]);

  const Gua = () => {
    const nuevaMeta = {
      nombre: nombre,
      descripcion: descripcion,
      fecha: fecha
    };
    setMetas([...metas, nuevaMeta]);
    setNombre("");
    setDescripcion("");
    setFecha("");
  };

  return (
    <div className="container">
      <h2>Lista de Metas</h2>
      <div className="form">
        <p>Ingrese un nombre</p>
        <input
          type="text"
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
        />
        <p>Ingrese Descripcion</p>
        <input
          type="text"
          value={descripcion}
          onChange={(e) => {
            setDescripcion(e.target.value);
          }}
        />
        <p>Ingrese Fecha</p>
        <input
          type="text"
          value={fecha}
          onChange={(e) => {
            setFecha(e.target.value);
          }}
        />
        <button onClick={Gua}>Enviar</button>
      </div>

      <div className="list">
        {metas.map((meta, index) => (
          <div key={index} className="meta">
            <p>Nombre: {meta.nombre}</p>
            <p>Descripcion: {meta.descripcion}</p>
            <p>Fecha: {meta.fecha}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listameta;
