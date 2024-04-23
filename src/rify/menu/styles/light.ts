import commonVariables from './_common';
import { commonLight } from '../../_styles/common';
import type { ThemeCommonVars } from '../../_styles/common';
import type { Theme } from '../../_mixins';

export const self = (vars: ThemeCommonVars) => {
  const { borderRadius, borderRadiusMedium, boxShadow3, dividerColor, menuColor, textColor2, fontSize, fontSizeHuge } = vars;
  return {
    ...commonVariables,
    menuBgColor: 'rgba(0, 0, 0, 0.02)',
    menuHoverBg: 'rgba(0, 0, 0, 0.06)',
    menuHoverColor: 'rgba(0, 0, 0, 0.88)',
    groupTitleColor: 'rgba(0, 0, 0, 0.45)',
    borderRadius,
    borderRadiusMedium,
    boxShadow: boxShadow3,
    borderColor: dividerColor,
    color: menuColor,
    disabledColor: 'rgba(0, 0, 0, 0.25)',
    fontSize,
    fontSizeLarge: fontSizeHuge,
    textColor: textColor2,

    // dark theme
    darkBorderColor: 'rgba(255, 255, 255, 0.15)',
    darkColor: '#001529',
    darkDisabledColor: 'rgba(255, 255, 255, 0.25)',
    darkHoverColor: '#fff',
    darkHoverBgColor: 'transparent',
    darkMenuBgColor: '#000c17',
    darkSelectedColor: '#fff',
    darkTextColor: 'rgba(255, 255, 255, 0.65)',
  };
};

export type MenuThemeVars = ReturnType<typeof self>;

const menuLight: Theme<'Menu', MenuThemeVars> = {
  name: 'Menu',
  common: commonLight,
  self,
};

export default menuLight;
export type MenuTheme = typeof menuLight;