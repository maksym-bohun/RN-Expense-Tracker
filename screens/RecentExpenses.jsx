import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";
import TotalSum from "../components/TotalSum";
import { useSelector } from "react-redux";
import { getDateMinusDays } from "../utils/date";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo;
  });
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
