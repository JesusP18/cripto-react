import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const useSelectMonedas = (label, opciones) => {
  const [moneda, setMoneda] = useState("");

  const SelectMonedas = () => (
    <>
      <Label>
        {label}
        <Select value={moneda} onChange={(e) => setMoneda(e.target.value)}>
          <option value="">Seleccione</option>
          {opciones.map((opcion) => (
            <option key={opcion.id} value={opcion.id}>
              {opcion.nombre}
            </option>
          ))}
        </Select>
      </Label>
    </>
  );
  return [moneda, SelectMonedas];
};
