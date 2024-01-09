import React from "react";
import { Text, View } from "react-native";

const ManageExpensesScreen = ({ route, navigation }) => {
  console.log("params", route.params);

  return (
    <View>
      <Text>Manage expenses</Text>
    </View>
  );
};

export default ManageExpensesScreen;
