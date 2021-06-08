import React from "react";
import { LogBox } from "react-native";

import Header from "./Shared/Header";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
//navigators
import Main from "./Navigators/Main";

//reducer
import { Provider } from "react-redux";
import store from "./Redux/store";

//context api
import Auth from "./Context/store/Auth";
import MainFinal from "./Navigators/MainFinal";

LogBox.ignoreAllLogs(true);
const App = () => {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <Header />
          <MainFinal />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </Provider>
    </Auth>
  );
};

export default App;
