import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      white: string;
      blueGrey10: string;
      blueGrey100: string;
      fontBlueGrey400: string;
      fontBlueGrey600: string;
      fontBlueGrey900: string;
      borderGrey: string;
      lightBlue: string;
      originBlue: string;
    };
  }
}
