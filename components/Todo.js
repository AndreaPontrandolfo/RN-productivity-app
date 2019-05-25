import React, { Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons
} from "@expo/vector-icons";
import { Button, Icon, Fab, Card, CardItem, Right } from "native-base";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favourited: false
    };
  }

  toggleFavourite = () => {
    if (this.state.favourited === false) {
      this.setState({
        favourited: true
      });
    }
    if (this.state.favourited === true) {
      this.setState({
        favourited: false
      });
    }

    console.log(this.state.favourited);
  };

  render() {
    const { favourited } = this.state;
    const { item, index, move, moveEnd } = this.props;

    return (
      <Card style={styles.listItem}>
        <CardItem>
          <Text>{index}</Text>
        </CardItem>
        <Right>
          <CardItem button onPress={this.toggleFavourite}>
            {favourited ? (
              <Ionicons name="md-star" size={30} color="black" />
            ) : (
              <Ionicons name="md-star-outline" size={30} color="black" />
            )}
          </CardItem>
        </Right>
        <CardItem button onPress={() => alert("Destroyed!")}>
          <MaterialCommunityIcons name="delete" size={30} color="red" />
        </CardItem>
        {/*  <CardItem>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 32
            }}
          >
            {item.label}
          </Text>
        </CardItem> */}
        <CardItem button onLongPress={move} onPressOut={moveEnd}>
          <MaterialIcons name="swap-vertical-circle" size={30} />
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    flex: 1,
    flexDirection: "row"
  }
});

export default Todo;
