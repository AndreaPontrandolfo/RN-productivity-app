import React from "react";
import { connect } from "react-redux";
import { Text } from "react-native";

const Count = props => (
  <>
    <Text>The count is {props.count}</Text>
    <Text onPress={props.increment}>increment</Text>
    <Text onPress={props.incrementAsync}>incrementAsync</Text>
  </>
);

const mapState = state => ({
  count: state.count
});

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
});

export default connect(
  mapState,
  mapDispatch
)(Count);
