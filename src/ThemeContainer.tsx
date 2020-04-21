import React, { PropsWithChildren } from "react"

import { ThemeProvider, CSSReset } from "@chakra-ui/core"
import { customTheme } from "./styles/theme"

interface Props extends PropsWithChildren<{}> {}

const ThemeContainer = (props: Props) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      {props.children}
    </ThemeProvider>
  )
}

export default ThemeContainer
