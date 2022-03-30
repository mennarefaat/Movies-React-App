import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDesignTokens from './components/them'
import Box from '@mui/material/Box';
import './App.css'
import AppBar from './components/Navbar'
import Movies from './pages/Home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OneMovie from './pages/movie';



const darkModeTheme = createTheme(getDesignTokens('dark'));


function App() {
  return (

    <ThemeProvider theme={darkModeTheme}>
      <Box sx={{

        bgcolor: 'background.default',
        color: 'text.primary',
      }}
      >
        <Router>
          <AppBar/>
              <Route path="/home"  component={Movies} />
              <Route path="/movie/:id" component={OneMovie} />
        </Router>
        {/* <Movies></Movies> */}
      </Box>
    </ThemeProvider>

  );
}

export default App;
