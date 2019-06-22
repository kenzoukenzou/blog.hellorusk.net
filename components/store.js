import { createStore } from "redux";
import moment from "moment-timezone";

const initialState = {
  isDarkMode: false,
  textcolor: "#000000",
  backgroundcolor: "#FFFFFF",
  linkcolor: "#1529DC",
  boxshadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
  border: "none"
};

const nightState = {
  isDarkMode: true,
  textcolor: "#FFFFFF",
  backgroundcolor: "#000000",
  linkcolor: "#00FFFF",
  boxshadow: "none",
  border: "0.2px solid #FFFFFF"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DARKMODE":
      return nightState;
    case "WHITEMODE":
      return initialState;
    default:
      return state;
  }
};

const now = Number(moment().tz("Asia/Tokyo").format("H"));
const currentState = (now < 7 || now >= 19) ? nightState : initialState;

export default createStore(reducer, currentState);