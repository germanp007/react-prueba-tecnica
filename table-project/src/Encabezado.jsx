import React from "react";

export const Encabezado = () => {
  return (
    <table style={{ width: "100%" }}>
      <thead>
        <tr>
          <th
            style={{
              background: "#7a7979",
              color: "white",
              fontWeight: "400",
              border: "1px solid white",
              textAlign: "center",
              width: "471px",
            }}
          ></th>
          <th
            style={{
              background: "#7a7979",
              color: "white",
              fontWeight: "400",
              border: "1px solid white",
              textAlign: "center",
              width: "598px",
            }}
          >
            Clasificaciones Pendientes
          </th>
          <th
            style={{
              background: "#7a7979",
              color: "white",
              fontWeight: "400",
              border: "1px solid white",
              textAlign: "center",
              width: "223px",
            }}
          >
            Meses Anteriores
          </th>
          <th
            style={{
              background: "#7a7979",
              border: "1px solid white",
              color: "#7a7979",
            }}
          >
            ...
          </th>
        </tr>
      </thead>

      <tbody></tbody>
      <tfoot></tfoot>
    </table>
  );
};
