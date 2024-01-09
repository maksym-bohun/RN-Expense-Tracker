import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";

const RecentExpenses = () => {
  return (
    <View style={styles.container}>
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
      <ExpenseItem />
    </View>
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B6CB9E",
  },
});
