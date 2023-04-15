const { makeStyles } = require("@mui/styles");

const useStyles = makeStyles( (theme) => {
    console.log('theme', theme)
    return {
        root: {
            position: 'relative',
        },
        nextBtn: {
            position: 'absolute',
            backgroundColor: '#fff',
            borderRadius: '50%',
            transition: 'all 0.2s',
            top: '50%',
            zIndex: 80,
            right: '3%',
            transform: 'translateY(-50%)',
            opacity: 0.7
        },
        prevBtn: {
            opacity: 0.7,
            position: 'absolute',
            backgroundColor: '#fff',
            borderRadius: '50%',
            transition: 'all 0.2s',
            top: '50%',
            zIndex: 80,
            left: '3%',
            transform: 'translateY(-50%)',
            '&:hover': {
                // backgroundColor: '#000022',
            },
            '&:hover sgv': {
                // backgroundColor: '#000022',
                display: 'none'
            }
        },
        navigation: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '10px',
            zIndex: 80,
            '& ul': {
                display: 'flex',
                gap: 0,
            },
            '& ul li': {
                backgroundColor: theme.palette.primary.main,
                listStyle: 'none',
                width: 10,
                height: 10,
                borderRadius: '50%',
                cursor: 'pointer',
                transition: 'all 0.5s',
                borderWidth: 2,
                borderStyle:'solid',
                borderColor: theme.palette.primary.main,

            },
        },
        activeDotSlider: {
            width: '11px !important',
            height: '11px !important',
            backgroundColor: 'transparent !important',
        },
    }
})

export default useStyles