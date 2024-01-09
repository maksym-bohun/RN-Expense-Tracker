import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./components/TabNavigation";
import ManageExpensesScreen from "./screens/ManageExpensesScreen";
import { getHeaderTitle } from "@react-navigation/elements";
import PlusIcon from "./components/PlusIcon";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#D1F0B1" },
          tabBarStyle: { backgroundColor: "#D1F0B1" },
          headerRight: () => <PlusIcon id={1} />,
        }}
      >
        <Stack.Screen name="Expenses" component={TabNavigation} />
        <Stack.Screen name="ManageExpenses" component={ManageExpensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
