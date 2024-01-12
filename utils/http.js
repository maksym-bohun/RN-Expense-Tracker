import axios from "axios";

const BACKEND_URL = "https://rn-course-c11f3-default-rtdb.firebaseio.com";

export const storeExpense = async (expenseData) => {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  return response.data.name;
};

export const getExpenses = async () => {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      price: response.data[key].price,
      date: new Date(response.data[key].date),
      title: response.data[key].title,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

export const updateExpense = (id, expenseData) => {
  console.log("id", id);
  return axios.patch(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpenseHttp = (id) => {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};
