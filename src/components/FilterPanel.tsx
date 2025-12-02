import { useContext, useEffect, type ChangeEvent } from "react";
import { FilterContext } from "../context/filters";

export function FilterPanel() {
  const { selectedCategory, setSelectedCategory } = useContext(FilterContext);

 
  const handleChangeCategory= (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedCategory(value);
    console.log("categorai(context): ", selectedCategory);
  };
    useEffect(() => {
  }, [selectedCategory]);
  return (
    <div>
      {/* TODO: Implementar filtros, opcional agregar más filtros. */}
      {/* para comunicarlo con el list, se puede mediante props drilling pero antes de eso prefiero usar context */}
      <label>Categoría:</label>
      <select onChange={handleChangeCategory}>
        <option value="">Todas</option>
        <option value="comida">Comida</option>
        <option value="transporte">Transporte</option>
        <option value="ocio">Ocio</option>
        <option value="otros">Otros</option>
      </select>

      {/* el model en el back no guarda dates por lo cual es innecsario */}
      {/* 
      <label>Desde:</label>
      <input type="date" />

      <label>Hasta:</label>
      <input type="date" /> */}
    </div>
  );
}
