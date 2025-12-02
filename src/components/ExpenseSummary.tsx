import { useEffect, useState } from "react";
import { getExpensesSummary } from "../api/tasks";

export function ExpenseSummary() {

    const [sumary, setSummary] = useState({ total: 0, byCategory: {} });
    useEffect(() => {
      const getSummary2 = async () => {
        const res = await getExpensesSummary();
  
        console.log(res);
        setSummary(res);
      };
  
      getSummary2();
    }, []);

  return (
    <div>
      <h3>Resumen de Gastos</h3>
      <h2>total: {sumary.total}</h2>
      <h3>Resumen por Categorias</h3>
       {
       Object.entries(sumary.byCategory).map(([category, amount]) => (
        <div key={category}>
          <p>{category}: ${amount}</p>
        </div>
      ))}
      {/* TODO: Mostrar summary con total por categoria */}
    </div>
  );
}