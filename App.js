import React, { Component } from "react";
import { Provider } from "react-redux";
import { init } from "@rematch/core";

import Main from "./Main";
import * as models from "./models";

const store = init({
  models
});

export const { dispatch } = store;
// state = { count: 0 }
// reducers
dispatch({ type: "count/increment", payload: 1 }); // state = { count: 1 }
dispatch.count.increment(1); // state = { count: 2 }

// effects
dispatch({ type: "count/incrementAsync", payload: 1 }); // state = { count: 3 } after delay
dispatch.count.incrementAsync(1);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
