import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  Modal
} from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = enteredGoal => {
    setEnteredGoal(enteredGoal);
  };

  const onAddGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Your goal"
        style={styles.input}
        onChangeText={goalInputHandler}
      />
      <View style={styles.buttonContainer}>
       <Button title="CANCEL" color="red" onPress={props.onCancel}/>
       <Button title="ADD" onPress={onAddGoalHandler} />
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    marginBottom: 10
  },
  inputContainer: {
    flex:1, 
    alignItems:"center", 
    justifyContent: "center" 
  },
  buttonContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '60%'
  }
});

export default GoalInput;
