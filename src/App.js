import { ThemeProvider } from 'styled-components';
import GlobalStyles from './common/GlobalStyles';
import CustomRoutes from './common/routes';
import { theme } from './common/theme';

const App = () => {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <CustomRoutes />
            </ThemeProvider>
        </>
    );
};

export default App;
