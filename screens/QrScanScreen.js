import React from "react";
import { View, StyleSheet, Text } from "react-native";
import QrScanner from "../components/QrScanner";

function QrScanScreen(props) {
  return (
    <View style={styles.container}>
      <QrScanner />
    </View>
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
