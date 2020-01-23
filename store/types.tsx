export const DARKMODE = "DARKMODE";
export const WHITEMODE = "WHITEMODE";

interface DarkAction {
  type: typeof DARKMODE;
}

interface LightAction {
  type: typeof WHITEMODE;
}

export type ActionTypes = DarkAction | LightAction;

export interface ModeType {
  isDarkMode: boolean;
  textcolor: string;
  backgroundcolor: string;
  linkcolor: string;
  codecolor: string;
  quotecolor: string;
}
