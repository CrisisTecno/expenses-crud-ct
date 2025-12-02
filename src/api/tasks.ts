import { type Expense } from "../interfaces/Expenses.interfaces";
import axios from 'axios';
const BASE_URL = "http://127.0.0.1:8000/api/expenses/";

export const getExpenses = async (): Promise<Expense[]> => {
  // TODO: completar fetch GET /expenses
  try{
  const res= await axios.get(BASE_URL);
    return res.data;
  }catch(error){
    console.error("Error obteniendo expenses:", error);
    throw error;
  }
  // console.log(res.data);
  return Promise.reject("getExpenses no implementado");
};



export const createExpense = async (data:any): Promise<Expense[]> => {
  // TODO: completar fetch GET /expenses
  try{
  const res=await  axios.post(BASE_URL,data);
  console.log(res);
  return res.data;
  }catch(error){
    console.error("Error creando expense:", error);
    throw error;
  }
};

export const updateExpense = async (id: number,data:any): Promise<Expense[]> => {
  // TODO: completar fetch GET /expenses
  try{
    const res = await axios.put(`${BASE_URL}${id}/`,data);
    return res.data;
  }catch(error){
    console.error("Error actualizando expense:", error);
    throw error;
  }
  // return Promise.reject("updateExpense no implementado");
};


export const deleteExpense = async (id: number): Promise<void> => {
  try{
    const res = await axios.delete(`${BASE_URL}${id}/`);
    if(res.status===204){
      console.log("Expense eliminado");
    }
  }catch(error){
    console.error("Error eliminando expense:", error);
    throw error;
  }
  // TODO: completar fetch DELETE /expenses/:id
  // return Promise.reject("deleteExpense no implementado");
};

export const getExpensesSummary = async (): Promise<{ total: number; byCategory: Record<string, number> }> => {
  // TODO: completar fetch GET /expenses/summary

  try{
    const res= await axios.get(`${BASE_URL}summary/`);
    return res.data;
  }catch(error){
    console.error("Error obteniendo summary:", error);
    throw error;
  }
  // return Promise.reject("getExpensesSummary no implementado");
};
