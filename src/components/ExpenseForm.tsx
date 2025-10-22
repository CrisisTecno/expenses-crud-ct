export function ExpenseForm() {
  return (
    <form>
      {/* TODO: Crear gasto */}
      <input
        type="text"
        placeholder="Descripción"
      />
      <input
        type="number"
        placeholder="Monto"
      />
      <select>
        <option value="comida">Comida</option>
        <option value="transporte">Transporte</option>
        <option value="ocio">Ocio</option>
        <option value="otros">Otros</option>
      </select>
      <input
        type="date"
      />
      <button type="submit">Agregar Gasto</button>
    </form>
  );
}
