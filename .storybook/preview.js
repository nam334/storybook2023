import React from "react"
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react"
import {withConsole} from  '@storybook/addon-console'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <CSSReset/> 
      <Box m="4">
        <Story/>
      </Box>
    </ThemeProvider>
  )
]

