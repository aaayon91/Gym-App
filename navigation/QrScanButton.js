import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function QrScanButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="qrcode-scan" color={"black"} size={40} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "grey",
    borderRadius: 40,
    borderWidth: 0.5,
    bottom: 34,
    height: 80,
    justifyContent: "center",
    width: 80,
  },
});

export default QrScanButton;
