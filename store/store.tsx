import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ActionTypes, ModeState } from "./types";

const persistConfig = {
  key: "HelloRuskMode",
  storage
};

const whiteState: ModeState = {
  isDarkMode: false,
  textcolor: "#000000",
  backgroundcolor: "#FFFFFF",
  linkcolor: "#1529DC"
};

const nightState: ModeState = {
  isDarkMode: true,
  textcolor: "#FFFFFF",
  backgroundcolor: "rgb(21, 32, 43)", // Twitter Lite Color
  linkcolor: "rgb(29, 181, 262)"
};

const reducer = (state: ModeState = nightState, action: ActionTypes) => {
  switch (action.type) {
    case "DARKMODE":
      return nightState;
    case "WHITEMODE":
      return whiteState;
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;
