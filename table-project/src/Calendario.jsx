import { useState } from "react";
import { DatosVentas } from "./DatosVentas";
import { dataOne } from "./data/dataOne";
import { Encabezado } from "./Encabezado";
import { Encabezado2 } from "./Encabezado2";
import { Link } from "react-router-dom";
import { InfoVentas } from "./InfoVentas";

export const Calendario = () => {
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFinal, setFechaFinal] = useState();
  const [validacion, setValidacion] = useState(false);
  const [datosValidados, setDatosValidados] = useState();
  const handleDate = () => {
    let infoDate = dataOne
      .map((element) => ({
        ...element,
        FechaAltaVendedor: new Date(element.FechaAltaVendedor).getTime(),
      }))
      .filter(
        (element) =>
          element.FechaAltaVendedor > fechaInicio &&
          element.FechaAltaVendedor < fechaFinal
      );
    if (infoDate.length == 0) setValidacion(false);
    if (infoDate.length > 0) setValidacion(true);
    setDatosValidados(() => infoDate);
  };
  return (
    <>
      <div className="calendar-container">
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
          }}
        >
          <label htmlFor="desde" style={{ background: "white" }}>
            Fecha Desde:
          </label>
          <input
            type="date"
            id="desde"
            style={{
              background: "white",
              border: "1px solid black",
              padding: "3px",
              borderRadius: "5px",
            }}
            min="2010-01-01"
            max="2020-12-31"
            onChange={(e) => setFechaInicio(new Date(e.target.value).getTime())}
          />
        </span>
        <span
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
          }}
        >
          <label htmlFor="hasta" style={{ background: "white" }}>
            Fecha Hasta:
          </label>
          <input
            type="date"
            id="hasta"
            style={{
              background: "white",
              border: "1px solid black",
              padding: "3px",
              borderRadius: "5px",
            }}
            min="2010-01-01"
            max="2020-12-31"
            onChange={(e) => setFechaFinal(new Date(e.target.value).getTime())}
          />
        </span>
        <button
          className="btn btn-primary"
          onClick={handleDate}
          style={{ width: "70px" }}
        >
          Ver
        </button>
      </div>
      <div>
        <Encabezado />
        <Encabezado2 />
      </div>

      <div>
        {validacion ? (
          <DatosVentas datosValidados={datosValidados} />
        ) : (
          <h1 style={{ textAlign: "center", marginTop: "25px" }}>Sin Datos</h1>
        )}
      </div>
    </>
  );
};
