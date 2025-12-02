
import {useEffect} from 'react'
import { createExpense, getExpenses } from '../api/tasks';
export function ExpenseForm() {


  const handleConfirm=async (event:any)=> {
     event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const datos = form.elements as HTMLFormControlsCollection;


    const desc1= datos.namedItem('descript') as HTMLInputElement
    const amount1= datos.namedItem('amount') as HTMLInputElement
    const options1= datos.namedItem('options') as HTMLInputElement

    const description = desc1?.value.trim() ?? '';
    const amount = Number(amount1?.value ?? NaN);
    const category = options1?.value ?? '';

    await createExpense(
      {
        'description':description,
        'amount':amount,
        'category':category
      }
    )
    form.reset();


  }

  useEffect(
    ()=>{
      getExpenses()
    },[]
  );

  return (
    <form onSubmit={handleConfirm}>
      {/* TODO: Crear gasto */}
      <input
        type="text"
        name='descript'
        placeholder="Descripción"
      />
      <input
        type="number"
        name='amount'
        placeholder="Monto"
      />
      <select name='options'>
        <option value="comida">Comida</option>
        <option value="transporte">Transporte</option>
        <option value="ocio">Ocio</option>
        <option value="otros">Otros</option>
      </select>
      <input
        name="datex"
        type="date"
      />
      <button type="submit">Agregar Gasto</button>
    </form>
  );
}
