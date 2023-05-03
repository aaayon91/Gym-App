import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import QrScanScreen from "../screens/QrScanScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";
import QrScanButton from "./QrScanButton";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account" color={"black"} size={40} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={QrScanScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <QrScanButton onPress={() => navigation.navigate("Scan")} />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="dumbbell" color={"black"} size={40} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
