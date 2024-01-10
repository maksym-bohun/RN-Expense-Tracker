import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ExpenseItem from "../components/ExpenseItem";
import TotalSum from "../components/TotalSum";

const DUMMY_DATA = [
  { id: "e1", title: "A book", date: "2022-2-12", price: "15.00" },
  { id: "e2", title: "Audi RS5", date: "2025-12-30", price: "45000.00" },
  { id: "e3", title: "Macbook Pro 13", date: "2023-06-20", price: "800.00" },
];

const RecentExpenses = () => {
  return (
    <View style={styles.container}>
      <TotalSum />
      <FlatList
        data={DUMMY_DATA}
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
