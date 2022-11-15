export const Total = ({ datosValidados }) => {
  return (
    <table>
      <tbody></tbody>
      <tfoot>
        <tr>
          <td className="w-[242px] bg-[#aab0b7]"></td>

          <td className="text-center w-[50px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.Ingresadas, 0)}
          </td>

          <td className="text-center w-[60px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.VentasMP, 0)}
          </td>
          <td className="text-center w-[60px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.Crucescoring, 0)}
          </td>
          <td className="text-center w-[59px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.Objetivo, 0)}
          </td>
          <td className="text-center w-[52px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.Produccion, 0)}
          </td>
          <td className="text-center w-[43px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.C2, 0)}
          </td>
          <td className="text-center w-[43px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.C4, 0)}
          </td>
          <td className="text-center w-[43px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.C5, 0)}
          </td>
          <td className="text-center w-[41px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.C6, 0)}
          </td>
          <td className="text-center w-[41px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.C7, 0)}
          </td>
          <td className="text-center w-[50px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados
              .map((e) => e.C2 + e.C4 + e.C5 + e.C6 + e.C7)
              .reduce((a, b) => a + b, 0)}
          </td>
          <td className="text-center w-[39px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.C3, 0)}
          </td>
          <td className="text-center w-[39px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.C8, 0)}
          </td>
          <td className="text-center w-[41px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.C9, 0)}
          </td>
          <td className="text-center w-[51px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados
              .map((e) => e.C3 + e.C8 + e.C9)
              .reduce((a, b) => a + b, 0)}
          </td>
          <td className="text-center w-[60px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.AnuladaTresYSiete, 0)}
          </td>
          <td className="text-center w-[60px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.AnuladaRechazada, 0)}
          </td>
          <td className="text-center w-[54px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.MesAnt, 0)}
          </td>
          <td className="text-center w-[56px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.MesAnt2, 0)}
          </td>
          <td className="text-center w-[55px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados.reduce((a, b) => a + b.MesAnt3, 0)}
          </td>
          <td className="text-center w-[66px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados
              .map((e) => Math.floor((e.MesAnt + e.MesAnt2 + e.MesAnt3) / 3))
              .reduce((a, b) => a + b, 0)}
          </td>
          <td className="text-center w-[62px] font-bold tex text-gray-700 bg-[#aab0b7]">
            {datosValidados
              .map((e) => e.Produccion + e.Crucescoring)
              .reduce((a, b) => a + b, 0)}
          </td>
        </tr>
      </tfoot>
    </table>
  );
};
