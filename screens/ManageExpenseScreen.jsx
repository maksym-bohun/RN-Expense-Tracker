import React, { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import IconButton from "../components/IconButton";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense } from "../store/expensesSlice";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpensesScreen = ({ route, navigation }) => {
  const dispatch = useDispatch("expenses");
  const expenses = useSelector((state) => state.expenses.expenses);
  const [currentExpense, setCurrentExpense] = useState({
    price: "",
    title: "",
    date: "",
    id: "",
  });
  const editMode = !!route.params?.id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editMode ? "Edit expense" : "Add expense",
    });
  }, [navigation, route]);

  useEffect(() => {
    if (editMode) {
      setCurrentExpense(
        expenses.find((expense) => expense.id === route.params.id)
      );
    }
  }, [route, navigation]);

  const deleteExpenseHandler = () => {
    navigation.goBack();
    if (currentExpense)
      dispatch(
        deleteExpense({
          ...currentExpense,
        })
      );
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        editMode={editMode}
        cancelHandler={cancelHandler}
        id={route.params?.id}
        defaultValues={currentExpense}
      />

      {editMode && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color="#e53935"
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpensesScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#B6CB9E", padding: 24 },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 10,
    borderTopColor: "#8C8A93",
    borderTopWidth: 2,
    alignItems: "center",
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
