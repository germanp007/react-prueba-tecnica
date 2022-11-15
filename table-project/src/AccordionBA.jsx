import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import { AccordionComponent } from "./AccordionComponent";
import { SVG } from "./images/SVG";
import { Total } from "./Total";

export const AccordionBA = ({ data }) => {
  const [supervisor, setSupervisor] = useState([
    ...new Set(data.map((e) => e.NomSucursal)),
  ]);
  const [isNotEntreprenur, setIsNotEntreprenur] = useState(0);
  const [isEntreprenur, setIsEntreprenur] = useState(1);
  const equiposPropios = data.filter(
    (element) => element.EsMiniEmprendedor === isNotEntreprenur
  );
  const emprendedores = data.filter(
    (element) => element.EsMiniEmprendedor === isEntreprenur
  );
  return (
    <Accordion
      transition={{
        duration: "500ms",
        timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      }}
    >
      <AccordionItem>
        <AccordionHeader className="w-full flex items-center text-gray-600 p-2 font-bold">
          <SVG />
          <span>Zona: Buenos Aires</span>
        </AccordionHeader>
        <hr />
        <AccordionBody>
          <Accordion>
            <AccordionItem>
              <AccordionHeader className="w-full flex items-center text-gray-600 border-b p-2 ml-4 font-bold">
                <SVG />

                <span>Equipos Propios</span>
              </AccordionHeader>
              <hr />
              <AccordionBody>
                <AccordionComponent
                  supervisor={supervisor[0]}
                  data={data}
                  isEntreprenur={isNotEntreprenur}
                />
                <AccordionComponent
                  supervisor={supervisor[2]}
                  data={data}
                  isEntreprenur={isNotEntreprenur}
                />
                <Total datosValidados={equiposPropios} />
              </AccordionBody>
            </AccordionItem>
          </Accordion>
          <Accordion>
            <AccordionItem>
              <AccordionHeader className="w-full flex items-center text-gray-600 p-2 ml-4 font-bold">
                <SVG />
                <span>Micro Emprendedores</span>
              </AccordionHeader>
              <hr />
              <AccordionBody>
                <AccordionComponent
                  supervisor={supervisor[1]}
                  data={data}
                  isEntreprenur={isEntreprenur}
                />
                <AccordionComponent
                  supervisor={supervisor[3]}
                  data={data}
                  isEntreprenur={isEntreprenur}
                />
                <Total datosValidados={emprendedores} />
              </AccordionBody>
            </AccordionItem>
          </Accordion>
        </AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};
