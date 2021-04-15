import PropTypes, { InferProps } from 'prop-types'
import * as React from 'react'
import { ThemeProvider } from 'styled-components/native'

import Theme from '../theme'

export const ThemeContext = React.createContext({
  theme: Theme.getTheme('light'),
})

const ThemeProviderProps = {
  /** children */
  children: PropTypes.node.isRequired,
  /** can be 'light' or 'dark' or an object containing a custom theme */
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
}

function MyThemeProvider(props: InferProps<typeof ThemeProviderProps>) {
  const currentTheme =
    typeof props.theme === 'object'
      ? Theme.extend(props.theme)
      : Theme.getTheme(props.theme)
  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      <ThemeProvider theme={currentTheme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

MyThemeProvider.defaultProps = {
  theme: 'light',
}

MyThemeProvider.propTypes = ThemeProviderProps

export default MyThemeProvider
