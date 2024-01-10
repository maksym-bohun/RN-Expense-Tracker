import React, { useLayoutEffect } from "react";
import { Text, View } from "react-native";

const ManageExpensesScreen = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: !!route.params?.id ? "Edit expense" : "Add expense",
    });
  }, [navigation, route]);

  return (
    <View>
      <Text>Manage expenses</Text>
    </View>
  );
};

export default ManageExpensesScreen;
