import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "./src/screens/Home";
import { MapScreen } from "./src/screens/Map";
import { ProfileScreen } from "./src/screens/Profile";

const mainRoutes = [
  {
    name: "홈",
    component: HomeScreen,
    inactiveIcon: require("./assets/Home.png"),
    activeIcon: require("./assets/HomeFocused.png"),
  },
  {
    name: "지도",
    component: MapScreen,
    inactiveIcon: require("./assets/Map.png"),
    activeIcon: require("./assets/MapFocused.png"),
  },
  {
    name: "프로필",
    component: ProfileScreen,
    inactiveIcon: require("./assets/Profile.png"),
    activeIcon: require("./assets/ProfileFocused.png"),
  },
];

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "#2DD790",
          tabBarInactiveTintColor: "#70757D",
          headerShown: false,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 500,
            lineHeight: 12,
          },
          tabBarStyle: {
            height: 90,
            paddingVertical: 10,
          },
        })}
      >
        {mainRoutes.map((route) => (
          <Tab.Screen
            key={`screen--${route.name}`}
            name={route.name}
            component={route.component}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image source={focused ? route.activeIcon : route.inactiveIcon} style={{ width: 30, height: 30 }} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
