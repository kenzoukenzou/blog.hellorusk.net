import { ActionTypes, DARKMODE, LIGHTMODE } from "./types";

export const darkmode = (): ActionTypes => ({ type: DARKMODE });
export const lightmode = (): ActionTypes => ({ type: LIGHTMODE });
