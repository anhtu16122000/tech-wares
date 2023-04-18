import { makeStyles } from '@mui/styles'

const useStyles = makeStyles(theme => {
    return {
        root: {
            boxShadow:  '0px 1px 8px rgba(0, 0, 0, 0.04)',
            '&:hover': {
                boxShadow: '1px 1px 28px 0px rgb(0 0 0 / 12%)'
            }
        },
        thumb: {
           left: '50%',
           
        }
    }
})

export default useStyles