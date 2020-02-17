import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoal, setCourseGoal] = useState([]);

  const goalInputHandler = enteredGoal => {
    setEnteredGoal(enteredGoal);
  };

  const addGoalHandler = () => {
    setCourseGoal(currentCourseGoal => [
      ...currentCourseGoal,
      { id: Math.random().toString(), value: enteredGoal }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoal}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: { flexDirection: "row", justifyContent: "space-between" },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 5
  },
  listItem: {
    marginVertical: 10,
    borderColor: "#fff",
    padding: 10,
    backgroundColor: "grey"
  }
});
