export const DARKMODE = "DARKMODE";
export const LIGHTMODE = "LIGHTMODE";

interface DarkAction {
  type: typeof DARKMODE;
}

interface LightAction {
  type: typeof LIGHTMODE;
}

export type ActionTypes = DarkAction | LightAction;

export interface ModeType {
  isDarkMode: boolean;
  textColor: string;
  backgroundColor: string;
  linkColor: string;
  codeColor: string;
  quoteColor: string;
  syntaxStyle: string;
}
