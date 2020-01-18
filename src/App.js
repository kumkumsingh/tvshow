import React from "react";
import store from "./store";
import "./styles/App.css";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
    <div className="App-header">
    Tv show
    </div>
  </Provider>
  );
}

export default App;
