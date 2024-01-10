import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";
import TotalSum from "../components/TotalSum";
import ExpenseItem from "../components/ExpenseItem";

const AllExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  let sum = 0;
  expenses.forEach((expense) => (sum += expense.price));

  return (
    <View style={styles.container}>
      <TotalSum title="Total" sum={sum.toFixed(2)} />
      <FlatList
        data={expenses}
        renderItem={(itemData) => <ExpenseItem item={itemData.item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6CB9E",
    paddingHorizontal: 20,
  },
});
