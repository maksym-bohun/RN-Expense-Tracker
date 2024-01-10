import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";
import TotalSum from "../components/TotalSum";
import { useSelector } from "react-redux";

const RecentExpenses = () => {
  const expenses = useSelector((state) => state.expenses.expenses);

  return (
    <View style={styles.container}>
      <TotalSum />
      <FlatList
        data={expenses}
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
