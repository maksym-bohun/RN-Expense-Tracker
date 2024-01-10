import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./components/TabNavigation";
import ManageExpensesScreen from "./screens/ManageExpenseScreen";
import { getHeaderTitle } from "@react-navigation/elements";
import IconButton from "./components/IconButton";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: "#D1F0B1" },
            headerTintColor: "#000",
            tabBarStyle: { backgroundColor: "#D1F0B1" },
            // tabBarActiveTintColor: GlobalStyles.colors.accent500,
            headerRight: ({ tintColor }) => (
              <IconButton
                name="add-outline"
                size={28}
                color={"#000"}
                onPress={() => {
                  navigation.navigate("ManageExpense");
                }}
              />
            ),
          })}
        >
          <Stack.Screen name="Expenses" component={TabNavigation} />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpensesScreen}
            options={{ presentation: "modal", headerRight: () => {} }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
