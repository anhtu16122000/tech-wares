// import { createTheme } from '@material-ui/styles'
import { createTheme } from '@mui/material'
import componentOverrides from './componentOverrides'
import themeTypography from './typography'

const theme = () => {
  const themeOptions = {}
  return createTheme({
    typography: themeTypography(themeOptions),
    components: componentOverrides(themeOptions)
  })
}

export default theme