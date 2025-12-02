import { ExpenseForm } from "./components/ExpenseForm";
import { ExpenseList } from "./components/ExpenseList.js";
import { ExpenseSummary } from "./components/ExpenseSummary";
import { FilterPanel } from "./components/FilterPanel.js";
import { FilterProvider } from "./context/filters.js";

function App() {
  return (<FilterProvider>
    <div style={{ padding: "2rem" }}>
      <h1>Gestor de Gastos</h1>
      <ExpenseForm />
      <hr />
      <FilterPanel />
      <ExpenseList />
      <ExpenseSummary />
    </div>
    </FilterProvider>
  );
}

export default App;
