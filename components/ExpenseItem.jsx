import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const ExpenseItem = () => {
  return (
    <Pressable style={styles.itemContainer}>
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>A book</Text>
        </View>
        <View>
          <Text style={styles.text}>2022-2-19</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.text}>14.99</Text>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "#92B4A7",
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
  },
  priceContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    gap: 10,
  },
  text: {
    fontSize: 18,
  },
});
