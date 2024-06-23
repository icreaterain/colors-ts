import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react';
import {
  ColorState,
  UpdateHexAction,
  colourReducer,
  initialState,
} from './color-reducer';

export const ColorContext = createContext({ state: initialState } as {
  state: ColorState;
  dispatch: Dispatch<UpdateHexAction>;
});

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(colourReducer, initialState);

  return (
    <ColorContext.Provider value={{ state, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
