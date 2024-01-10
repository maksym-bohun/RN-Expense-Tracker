import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { getFormattedDate } from "../utils/date";

const ExpenseItem = ({ item }) => {
  const navigation = useNavigation();
  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", { id: item.id });
  };

  return (
    <Pressable
      style={({ pressed }) =>
        pressed ? [styles.pressed, styles.itemContainer] : styles.itemContainer
      }
      onPress={expensePressHandler}
    >
      <View style={styles.infoContainer}>
        <View>
          <Text style={styles.text}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.text}>{getFormattedDate(item.date)}</Text>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.text}>${item.price}</Text>
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
    borderRadius: 8,
  },
  pressed: { opacity: 0.75 },
  priceContainer: {
    backgroundColor: "#fff",
    padding: 10,
    paddingHorizontal: 20,
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
