import { ActionTypes, DARKMODE, WHITEMODE } from "./types"

export const darkmode = (): ActionTypes => ({ type: DARKMODE });
export const whitemode = (): ActionTypes  => ({ type: WHITEMODE });