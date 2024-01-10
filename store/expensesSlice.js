import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [
      { id: "e1", title: "A book", date: "2022-2-12", price: "15.00" },
      { id: "e2", title: "Audi RS5", date: "2025-12-30", price: "45000.00" },
      {
        id: "e3",
        title: "Macbook Pro 13",
        date: "2023-06-20",
        price: "800.00",
      },
    ],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.unshift(action.payload);
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
