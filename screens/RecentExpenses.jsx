import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";
import TotalSum from "../components/TotalSum";
import { useDispatch, useSelector } from "react-redux";
import { getDateMinusDays } from "../utils/date";
import { getExpenses } from "../utils/http";
import { setExpenses } from "../store/expensesSlice";
import LoadingOverlay from "../components/LoadingOverlay";
import ErrorOverlay from "../components/ErrorOverlay";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);
  const [recentExpenses, setRecentExpenses] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchExpenses() {
      setIsFetching(true);
      try {
        const fetchedExpenses = await getExpenses();
        dispatch(setExpenses(fetchedExpenses));
      } catch (err) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    })();
  }, []);

  useEffect(() => {
    setRecentExpenses(
      expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return new Date(expense.date) > new Date(date7DaysAgo);
      })
    );
  }, [expenses]);

  const confirmErrorOverlayHandler = () => {
    setError(null);
  };

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (error && !isFetching) {
    return (
      <ErrorOverlay onCofirm={confirmErrorOverlayHandler} message={error} />
    );
  }

  let sum = 0;
  recentExpenses.forEach((expense) => (sum += expense.price));
  return (
    <View style={styles.container}>
      <TotalSum title="Last 7 Days" sum={sum.toFixed(2)} />
      <FlatList
        data={recentExpenses}
        renderItem={(itemData) => <ExpenseItem item={itemData.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6CB9E",
    paddingHorizontal: 20,
  },
});
