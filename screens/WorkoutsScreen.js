import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";

function WorkoutsScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text>Workouts Screen</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default WorkoutsScreen;
