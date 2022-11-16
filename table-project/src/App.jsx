import { Calendario } from "../src/components/calendario/Calendario";
import { InfoVentas } from "./components/InfoVentas";
import { Routes, Route, Navigate } from "react-router-dom";
export const App = () => {
  return (
    <>
      <h1>Estadistico Pre-solicitud</h1>

      <Routes>
        <Route path="calendario" element={<Calendario />} />
        <Route path="infoventas/:supervisor" element={<InfoVentas />} />
        <Route path="/*" element={<Navigate to="/calendario" />} />
      </Routes>
      {/* <InfoVentas /> */}
    </>
  );
};
