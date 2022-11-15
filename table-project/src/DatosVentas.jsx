import { AccordionBA } from "./AccordionBA";
import { AccordionMar } from "./AccordionMar";
import { Total } from "./Total";

export const DatosVentas = ({ datosValidados }) => {
  const buenosAiresData = datosValidados.filter(
    (element) => element.NombreZona == "Buenos Aires"
  );

  const marDelPlataData = datosValidados.filter(
    (element) => element.NombreZona == "Mar del Plata"
  );

  return (
    <>
      <AccordionBA data={buenosAiresData} />
      <Total datosValidados={buenosAiresData} />
      <AccordionMar data={marDelPlataData} />
      <Total datosValidados={marDelPlataData} />
      <Total datosValidados={datosValidados} />
    </>
  );
};
