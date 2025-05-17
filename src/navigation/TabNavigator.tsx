import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { TabParamList, TabBarIconProps } from "../types/navigation";
import SwipeScreen from "../screens/Match";
import LeaderboardPage from "../screens/Leaderboard";
import ProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#FDF6EC",
          borderTopWidth: 0,
          elevation: 12,
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: -3 },
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#E74C3C",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tab.Screen
        name="Find Match"
        component={SwipeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }: TabBarIconProps) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardPage}
        options={{
          tabBarIcon: ({ focused, color, size }: TabBarIconProps) => (
            <Ionicons
              name={focused ? "trophy" : "trophy-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused, color, size }: TabBarIconProps) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
