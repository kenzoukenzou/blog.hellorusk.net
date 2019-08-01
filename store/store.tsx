import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "HelloRuskMode",
  storage
};

const initialState = {
  isDarkMode: false,
  textcolor: "#000000",
  backgroundcolor: "#FFFFFF",
  linkcolor: "#1529DC",
  boxshadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
  border: "none"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARKMODE":
      return {
        isDarkMode: true,
        textcolor: "#FFFFFF",
        backgroundcolor: "#000000",
        linkcolor: "#00FFFF",
        boxshadow: "none",
        border: "0.2px solid #FFFFFF"
      };
    case "WHITEMODE":
      return initialState;
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
export const persistor = persistStore(store);
export default store;