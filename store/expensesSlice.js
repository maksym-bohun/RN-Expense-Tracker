import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [
      {
        id: "e1",
        title: "A pair of shoes",
        price: 59.99,
        date: new Date("2021-12-19").toISOString(),
      },
      {
        id: "e2",
        title: "A pair of trousers",
        price: 89.29,
        date: new Date("2022-01-05").toISOString(),
      },
      {
        id: "e3",
        title: "Some bananas",
        price: 5.99,
        date: new Date("2021-12-01").toISOString(),
      },
      {
        id: "e4",
        title: "A book",
        price: 14.99,
        date: new Date("2022-02-19").toISOString(),
      },
      {
        id: "e5",
        title: "Another book",
        price: 18.59,
        date: new Date("2022-02-18").toISOString(),
      },
      {
        id: "e6",
        title: "A pair of trousers",
        price: 89.29,
        date: new Date("2022-01-05").toISOString(),
      },
      {
        id: "e7",
        title: "Some bananas",
        price: 5.99,
        date: new Date("2021-12-01").toISOString(),
      },
      {
        id: "e8",
        title: "Audi RS5",
        price: 50000,
        date: new Date("2024-07-01").toISOString(),
      },
      {
        id: "e9",
        title: "Another book",
        price: 18.59,
        date: new Date("2022-01-18").toISOString(),
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      const id = new Date().toString() + Math.random().toString();
      state.expenses.unshift({ ...action.payload, id });
    },
    deleteExpense: (state, action) => {
      const expenseToDelete = state.expenses.find(
        (expense) => expense.id === action.payload.id
      );

      if (expenseToDelete)
        state.expenses.splice(state.expenses.indexOf(expenseToDelete), 1);
    },
    editExpense: (state, action) => {
      const expenseToEdit = state.expenses.find(
        (expense) => action.payload.id === expense.id
      );
      state.expenses[state.expenses.indexOf(expenseToEdit)] = {
        ...expenseToEdit,
        ...action.payload,
      };
    },
  },
});

export const addExpense = expensesSlice.actions.addExpense;
export const deleteExpense = expensesSlice.actions.deleteExpense;
export default expensesSlice.reducer;
