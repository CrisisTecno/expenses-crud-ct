# Task Manager SSR - Frontend

## Descripción

Este es un proyecto **React + TypeScript** que sirve como **starter kit para la prueba técnica de nivel semi-senior**.  
El objetivo es que completes la lógica de consumo de API, manejo de estado y tipado correcto en TypeScript.

El proyecto consiste en una **mini aplicación de gestión de gastos** con los siguientes componentes ya preparados:

- `ExpenseList` → Lista de Gastos.
- `ExpenseForm` → Formulario para agregar un gasto.
- `FilterPanel` → Panel para filtrar gastos.
- `ExpenseSummary` → Resumen de gastos totales y por categoría.

---

## Tecnologías

- React 18
- TypeScript
- Vite
- Fetch API (para conectarse con backend Node.js)
- CSS simple inline (puede mejorarse con módulos o Styled Components)

---

## Objetivos de la prueba

El candidato debe:

1. Crea una pequeña aplicación de gestión de gastos personales utilizando React en el frontend y NestJS en el backend.
2. La aplicación debe permitir crear, listar, editar y eliminar gastos, cada uno con descripción, monto, categoría y fecha. Además, debe mostrar un resumen de gastos con el total general y el total por categoría, y permitir filtrar los gastos por categoría y rango de fechas.

3. Completar las funciones de consumo de la API (`GET`, `POST`, `PATCH`, `DELETE`) en `src/api/expenses.ts`.
4. Conectar los componentes con estas funciones usando `useState` o `useReducer`.
4. Mantener el **tipado correcto en TypeScript** y buenas prácticas de React.

Opcionales (bonus):

- Validaciones más estrictas en el formulario.
- Ordenar gastos por montos maximos o minimos.
- Estilos más avanzados (CSS Modules o Styled Components).

---

## Instalación

1. Clonar el repo:

```bash
git clone <repo-url>
cd expenses-crud
```

2. Instalar dependencias:

```bash
npm install
```

3. Levantar la aplicación:

```bash
npm run dev
```
La app correrá en http://localhost:5173 por defecto.

---

## Notas

Actualmente los componentes no tienen lógica de fetch ni manejo de estado avanzado, eso es lo que debe completar el candidato.

Se espera que el candidato use TypeScript y hooks de React correctamente.