import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./Input";

const ExpenseForm = ({ title }) => {
  const changeAmountHandler = () => {};
  const changeDateHandler = () => {};
  const changeDescriptionHandler = () => {};

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your expense</Text>
      <View style={styles.inputsContainer}>
        <Input
          style={styles.input}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: changeAmountHandler,
          }}
        />
        <Input
          style={styles.input}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLenght: 10,
            onChangeText: changeDateHandler,
          }}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          onChangeText: changeDescriptionHandler,
          multiline: true,
          autoCorrect: true,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    marginVertical: 60,
    fontSize: 24,
    fontWeight: "500",
  },
});
