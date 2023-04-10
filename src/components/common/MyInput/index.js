import { TextField } from '@mui/material';
import { styled } from '@mui/styles';

const MyInput = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-input': {
    paddingTop: '15px',
    boxShadow: '0 1px rgba(212, 214, 216, 0.25) inset',
  },
  '& .MuiInputLabel-root': {
    color: '#677279',
    fontSize: '13px',
  },
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 1,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
    },
  },
}));

export default MyInput;