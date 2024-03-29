import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import Input from "./Input";
import Button from "../Button";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addExpense, editExpense } from "../../store/expensesSlice";
import { storeExpense, updateExpense } from "../../utils/http";

const ExpenseForm = ({
  cancelHandler,
  editMode,
  defaultValues,
  expenseId,
  setIsSubmitting,
}) => {
  const [inputValues, setInputValues] = useState({
    price: "",
    date: "",
    title: "",
  });
  const [inputsAreValid, setInputsAreValid] = useState({
    price: true,
    date: true,
    title: true,
  });

  const dispatch = useDispatch("expenses");
  const navigation = useNavigation();
  const formInvalid =
    !inputsAreValid.date || !inputsAreValid.price || !inputsAreValid.title;

  const changeInputHandler = (inputIdentifier, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputIdentifier]: value,
    }));
  };

  useEffect(() => {
    if (defaultValues) setInputValues(defaultValues);
  }, [defaultValues]);

  const confirmHandler = async () => {
    setIsSubmitting(true);
    const expenseData = {
      price: +inputValues.price,
      date: new Date(inputValues.date).toISOString(),
      title: inputValues.title,
    };

    const priceIsValid = !isNaN(expenseData.price) && expenseData.price > 0;
    const dateIsValid = expenseData.date.toString() !== "Invalid Date";
    const titleIsValid = expenseData.title.trim().length > 0;
    console.log(expenseData.date.toString());
    console.log(expenseData.price);

    if (!priceIsValid || !dateIsValid || !titleIsValid) {
      Alert.alert("Invalid input", "Please check your input values!");
      setInputsAreValid((curInputs) => ({
        price: priceIsValid,
        date: dateIsValid,
        title: titleIsValid,
      }));
      setIsSubmitting(false);
      return;
    }

    if (editMode) {
      dispatch(editExpense({ ...expenseData, expenseId }));
      updateExpense(expenseId, expenseData);
    } else {
      const id = await storeExpense(expenseData);
      dispatch(addExpense({ ...expenseData, id }));
    }
    setIsSubmitting(false);
    navigation.goBack();
  };

  return (
    <>
      <View style={styles.form}>
        <Text style={styles.title}>Your expense</Text>
        <View style={styles.inputsContainer}>
          <Input
            invalid={!inputsAreValid.price}
            style={styles.input}
            label="Amount"
            textInputConfig={{
              keyboardType: "decimal-pad",
              onChangeText: (value) => changeInputHandler("price", value),
              value: inputValues.price + "",
            }}
          />
          <Input
            invalid={!inputsAreValid.date}
            style={styles.input}
            label="Date"
            textInputConfig={{
              placeholder: "YYYY-MM-DD",
              maxLenght: 10,
              onChangeText: (value) => changeInputHandler("date", value),
              value: inputValues.date.slice(0, 10),
            }}
          />
        </View>
        <Input
          invalid={!inputsAreValid.title}
          label="Description"
          textInputConfig={{
            value: inputValues.title,
            multiline: true,
            autoCorrect: true,
            onChangeText: (value) => changeInputHandler("title", value),
          }}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <Button style={styles.button} mode="flat" onPress={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.button} onPress={confirmHandler}>
          {editMode ? "Update" : "Add"}
        </Button>
      </View>
    </>
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginTop: 16,
  },
  button: {
    width: "40%",
  },
});
