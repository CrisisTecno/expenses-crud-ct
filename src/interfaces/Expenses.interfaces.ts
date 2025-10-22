export interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string; // "comida", "transporte", "ocio", "otros"
  date: Date;
}
