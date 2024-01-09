import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Pressable, StyleSheet } from "react-native";
import RecentExpenses from "../screens/RecentExpenses";
import AllExpenses from "../screens/AllExpenses";
import { useNavigation } from "@react-navigation/native";
import PlusIcon from "./PlusIcon";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerRight: () => <PlusIcon id={1} />,
        headerStyle: { backgroundColor: "#D1F0B1" },
        tabBarStyle: { backgroundColor: "#D1F0B1" },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: "Recent",
          headerTitle: "Recent Expenses",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
