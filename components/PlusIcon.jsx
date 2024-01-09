import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Platform, Pressable, StyleSheet } from "react-native";

const PlusIcon = ({ id }) => {
  const navigation = useNavigation();

  const plusClickedHandler = () => {
    navigation.navigate("ManageExpenses", { id });
    console.log("pressed");
  };

  return (
    <Pressable style={styles.plusIcon} onPress={plusClickedHandler}>
      <Ionicons name="add-outline" size={30} color="#000" />
    </Pressable>
  );
};

export default PlusIcon;

const styles = StyleSheet.create({
  plusIcon: {
    marginBottom: Platform.select({ ios: 20, android: 0 }),
  },
});
