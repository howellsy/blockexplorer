import { Theme, createTheme as createMuiTheme } from '@mui/material/styles';
import { baseThemeOptions } from './baseThemeOptions';

export const createTheme = (): Theme => createMuiTheme(baseThemeOptions);
