import color from 'color';
import { black, white, pinkA400 } from './colors';
import configureFonts from './fonts';
import type { Theme } from '../types';

const DefaultTheme: Theme = {
  dark: false,
  roundness: 4,
  colors: {
    primary: '#a9a9a9',
    accent: '#03dac4',
    background: '#f6f6f6',
    surface: '#FFFFFF',
    error: '#B00020',
    text: '#000000',
    alternateTextColor: '#ffffff',
    onBackground: '#000000',
    onSurface: '#000000',
    disabled: '#26000000',
    destructive: '#800000	',
    placeholder: '#54000000',
    backdrop: '#50000000',
    notification: 'ffc0cb'
  },
  fonts: configureFonts(),
  animation: {
    scale: 1.0,
  },
};

export default DefaultTheme;