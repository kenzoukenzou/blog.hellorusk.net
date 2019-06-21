import { createStore } from "redux";

const initialState = {
  isDarkMode: false,
  textcolor: "#000000",
  backgroundcolor: "#FFFFFF",
  linkcolor: "#1529DC",
  boxshadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
  border: "none"
};

function reducer(state = initialState, action) {
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
}

const store = createStore(reducer);
export default store;