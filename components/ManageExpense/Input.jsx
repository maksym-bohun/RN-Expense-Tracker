import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

const Input = ({ label, textInputConfig, style, invalid }) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...textInputConfig}
        style={[
          styles.input,
          textInputConfig?.multiline && styles.inputMultiline,
          invalid && styles.inputInvalid,
        ]}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: "#CDDFD8",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  inputInvalid: {
    borderColor: "#ed4337",
    borderWidth: 2,
  },
});
