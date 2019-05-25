import React, { Component } from "react";
import { View, Text } from "react-native";
import DraggableFlatList from "react-native-draggable-flatlist";
import { Icon, Fab } from "native-base";

import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [...Array(20)].map((d, index) => ({
        key: `item-${index}`,
        label: index,
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${index *
          5}, ${132})`
      }))
    };
  }

  renderItem = ({ item, index, move, moveEnd, isActive }) => {
    return <Todo item={item} index={index} move={move} moveEnd={moveEnd} />;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DraggableFlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => `draggable-item-${item.key}`}
          scrollPercent={5}
          onMoveEnd={({ data }) => this.setState({ data })}
        />
        <Fab style={{ backgroundColor: "#5067FF" }} position="bottomRight">
          <Icon name="add" />
        </Fab>
      </View>
    );
  }
}

export default TodoList;
