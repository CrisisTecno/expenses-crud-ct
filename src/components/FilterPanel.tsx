export function FilterPanel() {
  return (
    <div>
      {/* TODO: Implementar filtros, opcional agregar más filtros. */}
      <label>Categoría:</label>
      <select></select>

      <label>Desde:</label>
      <input type="date" />

      <label>Hasta:</label>
      <input type="date" />
    </div>
  );
}