import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [isAddMode, setIsSetMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoal(currentCourseGoal => [
      ...currentCourseGoal,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsSetMode(false)
  };

  const removeGoalHandler = goalId => {
    setCourseGoal(currentGoal => {
      return currentGoal.filter(goal => goal.id !== goalId)
    })
  };

  const cancelGoal = () => {
    setIsSetMode(false);
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsSetMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoal} />
      <FlatList
        keyExtractor={item => item.id}
        data={courseGoal}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
