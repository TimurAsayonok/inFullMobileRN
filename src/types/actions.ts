/**
 * DefaultAction type for Actions wich
 * have only output type param
 */
export interface DefaultAction {
  type: string
};

/**
 * PayloadAction type for Actions wich
 * have type and payload output params
 */
export interface PayloadAction {
  type: string
  payload: any
};
