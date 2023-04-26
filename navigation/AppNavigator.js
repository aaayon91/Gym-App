import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ProfileScreen from "../screens/ProfileScreen";
import QrScanScreen from "../screens/QrScanScreen";
import WorkoutsScreen from "../screens/WorkoutsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="face-man-profile"
              color={"black"}
              size={40}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={QrScanScreen}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="qrcode-scan"
              color={"black"}
              size={40}
            />
          ),
        }}
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
