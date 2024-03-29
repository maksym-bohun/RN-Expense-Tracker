import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TotalSum = ({ title, sum }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{title}</Text>
      <Text style={styles.sum}>${sum}</Text>
    </View>
  );
};

export default TotalSum;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    backgroundColor: "#81667A",
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  date: {
    color: "#E3EBDC",
    fontSize: 16,
  },
  sum: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#C2DAD1",
  },
});
