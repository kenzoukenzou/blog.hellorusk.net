import { ActionTypes, DARKMODE, WHITEMODE } from "./types";

export const darkmode = (): ActionTypes => ({ type: DARKMODE });
export const lightmode = (): ActionTypes => ({ type: WHITEMODE });
