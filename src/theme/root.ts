import { DefaultTheme } from 'styled-components';

import { Colors } from '../typings/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
  }
}

const colors: Colors = {
  black: '#2f2e41',
  red: '#ed1e3f',
};

export const commonTheme: DefaultTheme = {
  colors,
};
