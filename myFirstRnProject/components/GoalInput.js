import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredGoal => {
    setEnteredGoal(enteredGoal);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goal"
        style={styles.input}
        onChangeText={goalInputHandler}
      />
      <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 5
  },
  inputContainer: { flexDirection: "row", justifyContent: "space-between" }
});

export default GoalInput;
