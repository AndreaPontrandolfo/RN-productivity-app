import React from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
  Ionicons
} from "@expo/vector-icons";

import TodoList from "../components/TodoList";

export default createMaterialTopTabNavigator(
  {
    Generic: {
      screen: TodoList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={24} color="blue" />
        )
      }
    },

    Hot: {
      screen: TodoList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="fire" size={24} color="blue" />
        )
      }
    },

    Recurrent: {
      screen: TodoList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="reload1" size={20} color="blue" />
        )
      }
    },

    Monitoring: {
      screen: TodoList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-pulse" size={24} color="blue" />
        )
      }
    },

    Deadline: {
      screen: TodoList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="notifications-active" size={22} color="blue" />
        )
      }
    }
  },

  {
    order: ["Hot", "Generic", "Recurrent", "Deadline", "Monitoring"],
    tabBarOptions: {
      activeTintColor: "#D4AF37",
      inactiveTintColor: "gray",
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: "white"
      }
    }
  }
);
