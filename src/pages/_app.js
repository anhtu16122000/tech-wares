import MainLayout from '@/layouts/MainLayout';
import '@/styles/globals.scss';
import theme from '@/themes';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';


function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme()}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}


export default MyApp;
