import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id) }>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    borderColor: "#fff",
    padding: 10,
    backgroundColor: "grey"
  }
});

export default GoalItem;
