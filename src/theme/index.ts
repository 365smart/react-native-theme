import { Dimensions, Platform } from 'react-native'

import Dark from './colors/Dark'
import Light, { ColorsType } from './colors/Light'

export type StringOrNumber = string | number

export enum ScaledValuesEnum {
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
}
export type ScaledValuesKeys = keyof typeof ScaledValuesEnum
export type ScaledValues = {
  [key in ScaledValuesKeys | string]: StringOrNumber
}

export type ColorSchemeType = 'light' | 'dark'

export type ThemeType = {
  colorScheme: ColorSchemeType
  colors: ColorsType
  sizes: ScaledValues
  space: ScaledValues
  fontSizes: ScaledValues
  lineHeights: ScaledValues
  fonts: { default: string }
  fontWeights: { regular: number; bold: number }
  letterSpacings: {}
  radii: ScaledValues
  borderWidths: {}
  borderStyles: {}
  borders: {}
  shadows: ScaledValues
  zIndices: ScaledValues
  breakpoints: string[]
  mediaQuery: {
    mobile: string
    tablet: string
    laptop: string
    desktop: string
  }
  window: {
    width: StringOrNumber
    height: StringOrNumber
  }
  screen: {
    width: StringOrNumber
    height: StringOrNumber
  }
  [key: string]: any
}

const window = Dimensions.get('window')
const screen = Dimensions.get('screen') // includes menu height

const WebTheme: ThemeType = {
  colorScheme: 'light',
  colors: Light,
  window,
  screen,
  // layout (width/height)
  sizes: {
    xxs: '.5rem', // 8px
    xs: '1rem', // 16px
    sm: '1.5rem', // 24px
    md: '2rem', // 32px
    lg: '3rem', // 48px
    xl: '4rem', // 64px
    xxl: '5rem', // 80px,
    xl3: '6rem',
    xl4: '7rem',
    xl5: '8rem',
    xl6: '9rem',
    xl7: '10rem',
    xl8: '11rem',
    xl9: '12rem',
    xl10: '13rem',
    windowWidth: window.width,
    windowHeight: window.height,
    screenWidth: screen.width,
    screenHeight: screen.height,
  },
  // typography
  fontSizes: {
    xxs: '4px',
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
    xxl: '28px',
  },
  lineHeights: {
    xxs: '1rem', // 16px
    xs: '1.5rem', // 24px
    sm: '2rem', // 32px
    md: '3rem', // 48px
    lg: '4rem', // 64px
    xl: '5rem', // 80px
    xxl: '7.5rem', // 120px
  },
  fonts: {
    default: 'Roboto',
  },
  fontWeights: {
    regular: 400,
    bold: 700,
  },
  letterSpacings: {},
  // space (margins/paddings)
  space: {
    xxxs: '0.25rem', // 4px
    xxs: '0.5rem', // 8px
    xs: '1rem', // 16px
    sm: '1.5rem', // 24px
    md: '2rem', // 32px
    lg: '3rem', // 48px
    xl: '4rem', // 64px
    xxl: '6rem', // 96px
  },
  // border
  radii: {
    xxs: '.06rem', // 1px
    xs: '.12rem', //2px
    sm: '.25rem', // 4px
    md: '.5rem', // 8px
    lg: '1rem', // 16px
    xl: '2rem', // 32px
    xxl: '4rem', // 64px
    smFab: '50%',
    mdFab: '50%',
    lgFab: '50%',
    xlFab: '50%',
    xxlFab: '50%',
  },
  borderWidths: {},
  borderStyles: {},
  borders: {},
  // shadow
  shadows: {
    xxs: '1px 1px 2px rgba(0,0,0,0.12)',
    xs: '1px 1px 2px rgba(0,0,0,0.12)',
    sm: '2px 2px 4px rgba(0,0,0,0.12)',
    md: '4px 4px 8px rgba(0,0,0,0.24)',
    lg: '6px 6px 12px rgba(0,0,0,0.24)',
    xl: '8px 8px 16px rgba(0,0,0,0.48)',
    xxl: '10px 10px 20px rgba(0,0,0,0.48)',
  },
  // position
  zIndices: {
    xxs: 0,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
    xxl: 6,
  },
  // breakpoints
  breakpoints: ['768px', '1024px', '1280px', '1920px'],
  mediaQuery: {
    mobile: `@media (max-width: 768px`,
    tablet: `@media (min-width: 768px) and (max-width: 1024px)`,
    laptop: `@media (min-width: 1024px) and (max-width: 1280px)`,
    desktop: `@media (min-width: 1280px)`,
  },
  // custom values
  headerHeight: '4rem',
}

const MobileTheme: ThemeType = {
  ...WebTheme,
  // layout (width/height)
  sizes: {
    ...WebTheme.sizes,
    xxs: 16,
    xs: 24,
    sm: 32,
    md: 48,
    lg: 64,
    xl: 80,
    xxl: 120,
    xl3: 180,
    xl4: 240,
    xl5: 320,
    xl6: 480,
    xl7: 640,
    xl8: 720,
    xl9: 960,
    xl10: 1080,
  },
  // typography
  fontSizes: {
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
  },
  lineHeights: {
    xxs: 16,
    xs: 24,
    sm: 32,
    md: 48,
    lg: 64,
    xl: 80,
    xxl: 120,
  },
  // space (margins/paddings)
  space: {
    xxxs: 4,
    xxs: 8,
    xs: 16,
    sm: 24,
    md: 32,
    lg: 48,
    xl: 64,
    xxl: 96,
  },
  // border
  radii: {
    xxs: 1,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
    xxl: 64,
    smFab: 32,
    mdFab: 48,
    lgFab: 64,
    xlFab: 80,
    xxlFab: 120,
  },
  // custom values
  headerHeight: 64,
}

export const DefaultTheme = Platform.OS === 'web' ? WebTheme : MobileTheme

const LightTheme: ThemeType = {
  ...DefaultTheme,
  colorScheme: 'light',
  colors: Light,
}

const DarkTheme: ThemeType = {
  ...DefaultTheme,
  colorScheme: 'dark',
  colors: Dark,
}

class Theme {
  static getTheme(colorScheme: string) {
    switch (colorScheme) {
      case LightTheme.colorScheme:
        return LightTheme
      case DarkTheme.colorScheme:
        return DarkTheme
      default:
        return DefaultTheme
    }
  }

  static extend(theme: { [key: string]: any }) {
    const CustomTheme: ThemeType = {
      ...DefaultTheme,
    }
    Object.keys(theme).forEach((field) => {
      if (typeof theme[field] === typeof DefaultTheme[field]) {
        if (typeof DefaultTheme[field] === 'object') {
          CustomTheme[field] = {
            ...DefaultTheme[field],
            ...theme[field],
          }
        }
        if (
          typeof DefaultTheme[field] === 'string' ||
          typeof DefaultTheme[field] === 'number'
        ) {
          CustomTheme[field] = theme[field]
        }
      } else if (!DefaultTheme[field]) {
        CustomTheme[field] = theme[field]
      }
    })
    return CustomTheme
  }
}

export default Theme
