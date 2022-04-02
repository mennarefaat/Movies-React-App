import { ThemeProvider, createTheme } from '@mui/material/styles';
import getDesignTokens from './components/them'
import Box from '@mui/material/Box';
import './App.css'
import AppBar from './components/Navbar'
import Movies from './pages/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import OneMovie from './pages/movie';
import Favourite from './pages/favourite';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js';
<link rel="manifest" href="/manifest.json"></link>

const darkModeTheme = createTheme(getDesignTokens('dark'));


function App() {
  // const Favourite = useSelector((state)=>{console.log(state.favourite.currentMovie)})
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
              <Route path="/favourites" component={Favourite} />
        </Router>
        {/* <Movies></Movies> */}
      </Box>
    </ThemeProvider>

  );
}

export default App;
