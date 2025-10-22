import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList";
import { ExpenseSummary } from "./components/ExpenseSummary";
import { FilterPanel } from "./components/FilterPanel";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Gestor de Gastos</h1>
      <ExpenseForm />
      <hr />
      <FilterPanel />
      <ExpenseList />
      <ExpenseSummary />
    </div>
  );
}

export default App;
