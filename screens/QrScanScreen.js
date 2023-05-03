import React from "react";
import { View, StyleSheet, Text } from "react-native";
import QrScanner from "../components/QrScanner";
import Screen from "../components/Screen";

function QrScanScreen(props) {
  return (
    <Screen style={styles.container}>
      <QrScanner />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default QrScanScreen;
