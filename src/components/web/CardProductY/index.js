import MyImg from "@/components/common/MyImg"
import { Box, Grid, Paper, Typography } from "@mui/material"
import useStyles from "./useStyles"

const CardProductY = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.root} sx={{cursor: "pointer"}}>
            <Grid sx={{padding: 2}} container rowSpacing={2} direction="column">
                <Grid item>
                    <Box sx={{ aspectRatio: "1/2",position: 'relative', height: '260px', margin: '0 auto'}}>
                        <MyImg objectFit="contain" className={classes.thumb} src={'https://pos.nvncdn.net/1fc861-70105/ps/20230414_meEI9F6hW7.jpeg'} fill />
                    </Box>
                </Grid>
                <Grid item>
                   <Typography variant="body1" fontWeight="bold" color="#1D1D1F">Ốp Silicon pop cún kính</Typography>
                </Grid>
                <Grid item columnSpacing={1} alignItems="flex-end" container  direction="row">
                    <Grid item>
                        <Typography fontWeight="bold">24.990.000₫</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{textDecorationLine: "line-through"}} color="#86868B" fontSize={14}>24.990.000₫</Typography>
                    </Grid>
                   
                </Grid>

            </Grid>
        </Paper>
    )
}

export default CardProductY