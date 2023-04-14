import MainLayout from "@/layouts/MainLayout";
import "@/styles/globals.scss";
import theme from "@/themes";
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ThemeProvider } from "@mui/styles";

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
