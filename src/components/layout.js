import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from '../logo.png'
import { styled } from '@mui/system';
import SearchMoviesSuggestion from "../containers/SearchMoviesSuggestion";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const Img = styled('img')({
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block',
  width: 500,
  maxwidth: '100%',

})

const LayoutWrapper = styled('div')(({theme}) => ({
  margin: 24,
  width: 'auto',
  [theme.breakpoints.up("lg")]: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: theme.breakpoints.values.lg,
  }

}))

const Layout = ({children}) => {
  return(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LayoutWrapper>
        <Link to="/">
          <Img src={logoImg} alt="movieVault Logo"/>
        </Link>
        <SearchMoviesSuggestion />
      </LayoutWrapper>
      {children}
    </ThemeProvider>
  );
}

export default Layout;
