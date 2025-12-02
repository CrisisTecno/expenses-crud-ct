import { useContext, useEffect, useState } from "react";
import { deleteExpense, getExpenses } from "../api/tasks";
import { FilterContext } from "../context/filters";

export function ExpenseList() {
  const [expenses, setExpenses] = useState([]);

  const { selectedCategory } = useContext(FilterContext);

  useEffect(() => {
    const getExpenses2 = async () => {
      const res = await getExpenses();

      console.log(res);
      setExpenses([...res]);
    };

    getExpenses2();
  }, []);

  const filteredExpenses = selectedCategory
    ? expenses.filter(
        (expense: any) =>
          typeof expense?.category === "string" &&
          expense.category === selectedCategory
      )
    : expenses;

  const deleteEXpensive = async (id: number) => {
    if (!window.confirm("Eliminar gasto?")) return;
    try {
      await deleteExpense(id);
      setExpenses((prev) => prev.filter((e: any) => e.id !== id));
    } catch (err) {
      console.error("Error eliminando expense:", err);
    }
  };

  return (
    <table>
      {/* TODO: Listar gastos */}
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Monto</th>
          <th>Categoría</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses.map((expense) => {
          return (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>${expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.date}</td>
              <td>
                <button >Editar</button>
                <button onClick={() => deleteEXpensive(expense.id)}>Eliminar</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
