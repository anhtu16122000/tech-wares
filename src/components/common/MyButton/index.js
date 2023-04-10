import { Button, styled } from "@mui/material"

const MyButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': {
    borderRadius: 1,
    boxShadow: 'none',
    textTransform: 'none',
  }
}))

export default MyButton