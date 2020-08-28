import React from "react";
import "./App.css";
import "./index";
import { Provider } from "react-redux";
import store from "./Calci/store";
import Master from "./components/Master";

function App() {
  return (
    <Provider store={store}>
      <Master />
    </Provider>
  );
}

export default App;
