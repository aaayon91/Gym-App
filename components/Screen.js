import React from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View, Platform } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {Platform.OS === "ios" ? (
        <View style={style}>{children}</View>
      ) : (
        <>{children}</>
      )}
      {/* <View style={[styles.view, style]}>{children}</View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
