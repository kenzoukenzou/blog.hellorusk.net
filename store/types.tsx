export const DARKMODE = "DARKMODE";
export const WHITEMODE = "WHITEMODE";

interface DarkAction {
  type: typeof DARKMODE;
}

interface WhiteAction {
  type: typeof WHITEMODE;
}

export type ActionTypes = DarkAction | WhiteAction;

export interface ModeState {
  isDarkMode: boolean;
  textcolor: string;
  backgroundcolor: string;
  linkcolor: string;
}
