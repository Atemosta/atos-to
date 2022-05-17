import './App.css';
import { Portals } from './components'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Portals/>
      </div>
    </ThemeProvider>
  );
}

export default App;
