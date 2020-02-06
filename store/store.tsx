import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes, ModeType } from "./types";

const persistConfig = {
  key: "HelloRuskMode",
  storage
};

const lightMode: ModeType = {
  isDarkMode: false,
  textColor: "#000000",
  backgroundColor: "#FFFFFF",
  linkColor: "#1529DC",
  codeColor: "brown",
  quoteColor: "#808080",
  syntaxStyle: "prism"
};

const darkMode: ModeType = {
  isDarkMode: true,
  textColor: "#FFFFFF",
  backgroundColor: "rgb(21, 32, 43)", // Twitter Lite Color
  linkColor: "rgb(29, 181, 262)",
  codeColor: "#f08d49",
  quoteColor: "#daa520",
  syntaxStyle: "prism-tomorrow"
};

const reducer = (state: ModeType = darkMode, action: ActionTypes) => {
  switch (action.type) {
    case "DARKMODE":
      return darkMode;
    case "LIGHTMODE":
      return lightMode;
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
