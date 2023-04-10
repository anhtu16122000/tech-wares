import MyButton from '@/components/common/MyButton';
import MyInput from '@/components/common/MyInput';
import { UilUser } from '@iconscout/react-unicons';
import { Divider, Grid, IconButton, Popover, Tooltip, Typography } from "@mui/material";
import { useState } from 'react';
import useStyles from './useStyles';

const UserSection = ({ anchorEl }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleToggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <Tooltip title="Tài khoản">
        <IconButton onClick={handleToggleOpen}>
          <UilUser />
        </IconButton>
      </Tooltip>
      <Popover
        classes={{ paper: classes.popOverPaper }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleToggleOpen}
        marginThreshold={70}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Grid container rowSpacing={2} direction="column">
          <Grid item>
            <Typography variant="subtitle1" fontWeight="bold" align='center' >ĐĂNG NHẬP TÀI KHOẢN</Typography>
            <Typography variant="body2" align="center" color='#677279' >Nhập email và mật khẩu của bạn:</Typography>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <MyInput
              label="Email"
              defaultValue=""
              id="reddit-input"
              variant="filled"
              sx={{ width: '320px' }}
            />
          </Grid>
          <Grid item>
            <MyInput
              label="Mật khẩu"
              defaultValue=""
              id="reddit-input"
              variant="filled"
              sx={{ width: '320px' }}
            />
          </Grid>
          <Grid item>
            <MyButton sx={{ width: '100%' }} color="primary" variant="contained" >ĐĂNG NHẬP</MyButton>
          </Grid>
          <Grid item>
            <Typography variant="body2" align="left" >Hoặc đăng nhập với</Typography>
          </Grid>
          <Grid columnSpacing={1} item container>
            <Grid flex={1} item>
              <MyButton sx={{ width: '100%' }} size="small" color="error" variant="contained" >Đăng nhập Google</MyButton>
            </Grid>
            <Grid flex={1} item>
              <MyButton sx={{ width: '100%' }} size="small" color="info" variant="contained" >Đăng nhập Facebook</MyButton>
            </Grid>
          </Grid>
          <Grid item container alignItems="center" columnGap={0.5}>
            <Typography variant="caption" color='#677279' >Khách hàng mới?</Typography>
            <Typography variant="caption" sx={{ cursor: 'pointer' }} color='#000000' >Tạo tài khoản</Typography>
          </Grid>
          <Grid container alignItems="center" columnGap={0.5}>
            <Typography variant="caption" color='#677279'>Quên mật khẩu?</Typography>
            <Typography variant="caption" sx={{ cursor: 'pointer' }} color='#000000'>Khôi phục mật khẩu</Typography>
          </Grid>
        </Grid>
      </Popover>
    </>
  )
}

export default UserSection