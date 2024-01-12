import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.unshift(action.payload);
    },
    setExpenses: (state, action) => {
      const fetchedExpenses = action.payload.reverse();
      fetchedExpenses.map(
        (expense) => (expense.date = expense.date.toISOString())
      );
      state.expenses = fetchedExpenses;
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
        (expense) => action.payload.expenseId === expense.id
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
export const editExpense = expensesSlice.actions.editExpense;
export const setExpenses = expensesSlice.actions.setExpenses;
export default expensesSlice.reducer;
