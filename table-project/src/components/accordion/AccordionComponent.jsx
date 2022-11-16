import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { Link } from "react-router-dom";
import { SVG } from "../../images/SVG";

export const AccordionComponent = ({ supervisor, data, isEntreprenur }) => {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionHeader className="w-full flex items-center text-gray-600 p-2 ml-8 font-bold">
            <SVG />
            <span>Supervisor: {supervisor}</span>
          </AccordionHeader>
          <hr />
          <AccordionBody>
            {data
              .filter(
                (element) =>
                  element.EsMiniEmprendedor == isEntreprenur &&
                  element.NomSucursal == supervisor
              )
              .map((element) => ({
                ...element,
                FechaAltaVendedor: new Date(
                  element.FechaAltaVendedor
                ).toLocaleDateString(),
                FechaBajaVendedor: element.FechaBajaVendedor
                  ? new Date(element.FechaBajaVendedor).toLocaleDateString()
                  : "-",
              }))
              .map((element, index) => (
                <table className="text-[10px] w-full" key={index}>
                  <tbody
                    style={{
                      borderBottom: "0.5px solid #7a7979",
                    }}
                  >
                    <tr
                      style={{
                        borderRight: "0.5px solid #7a7979",
                      }}
                    >
                      <td
                        className="bg-slate-50 w-[110px] py-2  text-center"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.NomVendedor}
                      </td>
                      <td
                        className="bg-slate-50 py-2 text-center w-[60px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.FechaAltaVendedor}
                      </td>
                      <td
                        className="bg-slate-50  py-2 text-center w-[60px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.FechaBajaVendedor}
                      </td>
                      <td
                        className="bg-[#ee82ee] py-2 text-center w-[60px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.Ingresadas}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[60px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.VentasMP ? element.VentasMP : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[60px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.Crucescoring ? element.Crucescoring : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[60px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.Objetivo ? element.Objetivo : 0}
                      </td>
                      <td
                        className="bg-[#cdff82] text-center w-[50px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.Produccion ? element.Produccion : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[43px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C2 ? element.C2 : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[43px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C4 ? element.C4 : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[43px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C5 ? element.C5 : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[40px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C6 ? element.C6 : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[40px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C7 ? element.C7 : 0}
                      </td>
                      <td
                        className="bg-[#ffff7e] text-center w-[52px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C2 +
                          element.C4 +
                          element.C5 +
                          element.C6 +
                          element.C7}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[40px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C3 ? element.C3 : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[40px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C8 ? element.C8 : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[40px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C9 ? element.C9 : 0}
                      </td>
                      <td
                        className="bg-[#ffc861] text-center w-[50px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.C3 + element.C8 + element.C9}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[60px]"
                        style={{
                          borderRight: "0.5px solid #7a7979 ",
                        }}
                      >
                        {element.AnuladaTresYSiete
                          ? element.AnuladaTresYSiete
                          : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[60px]"
                        style={{
                          borderRight: "1px solid #7a7979",
                        }}
                      >
                        {element.AnuladaRechazada
                          ? element.AnuladaRechazada
                          : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[56px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.MesAnt ? element.MesAnt : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[56px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.MesAnt2 ? element.MesAnt2 : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[56px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.MesAnt3 ? element.MesAnt3 : 0}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[56px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {Math.floor(
                          (element.MesAnt3 + element.MesAnt2 + element.MesAnt) /
                            3
                        )}
                      </td>
                      <td
                        className="bg-slate-50 text-center w-[56px]"
                        style={{
                          borderRight: "0.5px solid #7a7979",
                        }}
                      >
                        {element.Crucescoring + element.Produccion}
                      </td>
                    </tr>
                  </tbody>
                </table>
              ))}
            <table>
              <tbody></tbody>
              <tfoot>
                <tr>
                  <td className="w-[242px] bg-[#aab0b7]"></td>

                  <td className="text-center w-[50px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    <Link
                      to={`/infoventas/${supervisor}`}
                      className="bg-[#aab0b7]"
                    >
                      {data
                        .filter(
                          (element) =>
                            element.EsMiniEmprendedor === isEntreprenur &&
                            element.NomSucursal == supervisor
                        )
                        .reduce((a, b) => a + b.Ingresadas, 0)}
                    </Link>
                  </td>

                  <td className="text-center w-[60px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.VentasMP, 0)}
                  </td>
                  <td className="text-center w-[60px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.Crucescoring, 0)}
                  </td>
                  <td className="text-center w-[59px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.Objetivo, 0)}
                  </td>
                  <td className="text-center w-[52px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.Produccion, 0)}
                  </td>
                  <td className="text-center w-[43px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.C2, 0)}
                  </td>
                  <td className="text-center w-[43px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal === supervisor
                      )
                      .reduce((a, b) => a + b.C4, 0)}
                  </td>
                  <td className="text-center w-[43px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal === supervisor
                      )
                      .reduce((a, b) => a + b.C5, 0)}
                  </td>
                  <td className="text-center w-[41px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal === supervisor
                      )
                      .reduce((a, b) => a + b.C6, 0)}
                  </td>
                  <td className="text-center w-[41px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.C7, 0)}
                  </td>
                  <td className="text-center w-[50px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .map((e) => e.C2 + e.C4 + e.C5 + e.C6 + e.C7)
                      .reduce((a, b) => a + b, 0)}
                  </td>
                  <td className="text-center w-[39px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.C3, 0)}
                  </td>
                  <td className="text-center w-[39px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.C8, 0)}
                  </td>
                  <td className="text-center w-[41px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.C9, 0)}
                  </td>
                  <td className="text-center w-[51px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .map((e) => e.C3 + e.C8 + e.C9)
                      .reduce((a, b) => a + b, 0)}
                  </td>
                  <td className="text-center w-[60px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.AnuladaTresYSiete, 0)}
                  </td>
                  <td className="text-center w-[60px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.AnuladaRechazada, 0)}
                  </td>
                  <td className="text-center w-[54px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.MesAnt, 0)}
                  </td>
                  <td className="text-center w-[56px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.MesAnt2, 0)}
                  </td>
                  <td className="text-center w-[55px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .reduce((a, b) => a + b.MesAnt3, 0)}
                  </td>
                  <td className="text-center w-[66px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .map((e) =>
                        Math.floor((e.MesAnt + e.MesAnt2 + e.MesAnt3) / 3)
                      )
                      .reduce((a, b) => a + b, 0)}
                  </td>
                  <td className="text-center w-[62px] font-bold tex text-gray-700 bg-[#aab0b7]">
                    {data
                      .filter(
                        (element) =>
                          element.EsMiniEmprendedor === isEntreprenur &&
                          element.NomSucursal == supervisor
                      )
                      .map((e) => e.Produccion + e.Crucescoring)
                      .reduce((a, b) => a + b, 0)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </>
  );
};
