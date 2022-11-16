import { dataTwo } from "../data/dataTwo";
import { SVG } from "../images/SVG";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { Encabezado3 } from "./encabezado/Encabezado3";
import { useParams } from "react-router-dom";

export const InfoVentas = () => {
  const { supervisor } = useParams();

  // console.log(
  //   dataTwo.filter((element) => element.NomSupervisor === supervisor)
  // );

  return (
    <>
      <h1 className="font-normal">Detalles Ingresadas</h1>
      <Encabezado3 />
      <Accordion>
        <AccordionItem>
          <AccordionHeader className="w-[100vw] flex items-center text-gray-600 border-b p-2 ml-4 font-bold">
            <SVG />
            <span>{supervisor}</span>
          </AccordionHeader>
          <hr />
          <AccordionBody>
            {dataTwo
              .filter((element) => element.NomSupervisor === supervisor)
              .map((element) => ({
                ...element,
                Fecha: new Date(element.Fecha).toLocaleDateString(),
                FechaCancelacion: new Date(
                  element.FechaCancelacion
                ).toLocaleDateString(),
                FechaIngresoTerminal: new Date(
                  element.FechaIngresoTerminal
                ).toLocaleDateString(),
              }))
              .map((element, index) => (
                <>
                  <table
                    key={index}
                    className="text-[12px]"
                    style={{
                      borderBottom: "0.5px solid #7a7979",
                    }}
                  >
                    <tbody>
                      <tr className=" border-slate-600">
                        <td
                          className="w-[52px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Fecha}
                        </td>
                        <td
                          className="w-[52px] text-center text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Solicitud}
                        </td>
                        <td
                          className="w-[98px] text-left text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Cliente}
                        </td>
                        <td
                          className="w-[100px] text-left text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.NomVendedor}
                        </td>
                        <td
                          className="w-[194px] text-left text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Vehiculo}
                        </td>
                        <td
                          className="w-[42px] text-center text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.codigotipoplan == 1
                            ? "100%"
                            : element.codigotipoplan == 2
                            ? "70/30"
                            : element.codigotipoplan == 3
                            ? "60/40"
                            : element.codigotipoplan == 4
                            ? "75/25"
                            : element.codigotipoplan == 5
                            ? "80/20"
                            : element.codigotipoplan == 6
                            ? "90/10"
                            : ""}
                        </td>
                        <td
                          className="w-[50px] text-center text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.ImporteCuota}
                        </td>
                        <td
                          className="w-[50px] text-center  text-[10px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Saldo}
                        </td>
                        <td
                          className="w-[68px] text-center  text-[10px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.FechaCancelacion}
                        </td>
                        <td
                          className="w-[38px] text-center  text-[8px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={element.Dni ? true : false}
                          />
                        </td>
                        <td
                          className="w-[38px] text-center  text-[10px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={element.Servicio ? true : false}
                          />
                        </td>
                        <td
                          className="w-[38px] text-center  text-[10px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={element.Anexos ? true : false}
                          />
                        </td>
                        <td
                          className="w-[50px] text-center text-[8px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.EstadoPrescoring === 0 ? "Pendiente" : "Ok"}
                        </td>
                        <td
                          className="w-[50px] text-center  text-[8px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Estadoscoring === 0 ? "Pendiente" : "Ok"}
                        </td>
                        <td
                          className="w-[30px] text-center  text-[10px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Clasificacion}
                        </td>
                        <td
                          className="w-[50px] text-center  text-[8px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Clasificacion == 1
                            ? "Produccion"
                            : element.Clasificacion == 2
                            ? "Lista envi..."
                            : element.Clasificacion == 3
                            ? "Seña"
                            : element.Clasificacion == 4
                            ? "Pend. scor."
                            : element.Clasificacion == 5
                            ? "Pend. scor. falta doc."
                            : element.Clasificacion == 6
                            ? "Apr. scor. falta doc."
                            : element.Clasificacion == 7
                            ? "Pend. pre Sco."
                            : element.Clasificacion == 8
                            ? "Pres sco. Rech."
                            : element.Clasificacion == 9
                            ? "Sco. Ter. Rech."
                            : element.Clasificacion == 10
                            ? "Seña+Pend. Pre Sco."
                            : element.Clasificacion == 11
                            ? "Rechazadas"
                            : ""}
                        </td>
                        <td
                          className="w-[30px] text-center  text-[10px] "
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.TipoPrecio}
                        </td>
                        <td
                          className="w-[55px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.Precio}
                        </td>
                        <td
                          className="w-[30px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.DebitoAutomatico}
                        </td>
                        <td
                          className="w-[30px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.DebitoAutomaticoScoring}
                        </td>
                        <td
                          className="w-[55px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.FechaIngresoTerminal}
                        </td>
                        <td
                          className="w-[55px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.NomSupervisor}
                        </td>
                        <td
                          className="w-[30px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={element.EsMicro ? true : false}
                          />
                        </td>
                        <td
                          className="w-[30px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          {element.NombreOficialPC}
                        </td>
                        <td
                          className="w-[50px] text-center  text-[10px]"
                          style={{
                            borderRight: "0.5px solid #7a7979",
                          }}
                        >
                          <button
                            style={{
                              width: "40px",
                              height: "20px",
                              fontSize: "7px",
                              background: "#2596be",
                              borderRadius: "3px",
                              color: "white",
                            }}
                          >
                            Ver Operacion
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </>
              ))}
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
};
