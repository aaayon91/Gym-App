import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./navigation/rootNavigation";

import AppNavigator from "./navigation/AppNavigator";
import navigationTheme from "./navigation/navigationTheme";

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer ref={navigationRef} theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
    // </View>
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
