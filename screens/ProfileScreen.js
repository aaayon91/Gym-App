import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Screen from "../components/Screen";

function ProfileScreen(props) {
  return (
    <Screen style={styles.container}>
      <Text>Profile Screen</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileScreen;
