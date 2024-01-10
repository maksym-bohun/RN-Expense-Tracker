import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Button = ({ children, onPress, mode, style }) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.text, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: "#8C8A93",
  },
  text: {
    color: "#fff",
    textAlign: "center",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: "#533B4C",
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "#CDCCD1",
    borderRadius: 4,
  },
});
