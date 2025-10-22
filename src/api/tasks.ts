import { type Expense } from "../interfaces/Expenses.interfaces";

const BASE_URL = "http://localhost:3000/api/expenses";

export const getExpenses = async (): Promise<Expense[]> => {
  // TODO: completar fetch GET /expenses
  return Promise.reject("getExpenses no implementado");
};

export const createExpense = async (expense: Omit<Expense, "id">): Promise<Expense> => {
  // TODO: completar fetch POST /expenses
  return Promise.reject("createExpense no implementado");
};

export const updateExpense = async (id: number, expense: Partial<Expense>): Promise<Expense> => {
  // TODO: completar fetch PATCH /expenses/:id
  return Promise.reject("updateExpense no implementado");
};

export const deleteExpense = async (id: number): Promise<void> => {
  // TODO: completar fetch DELETE /expenses/:id
  return Promise.reject("deleteExpense no implementado");
};

export const getExpensesSummary = async (): Promise<{ total: number; byCategory: Record<string, number> }> => {
  // TODO: completar fetch GET /expenses/summary
  return Promise.reject("getExpensesSummary no implementado");
};
