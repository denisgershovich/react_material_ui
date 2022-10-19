import React from 'react';
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
      <Box
        height="100vh"
        display="flex"
        flexWrap='wrap'
        width='100%'
      >
        <Router>
          <Navbar />
          <Box
              sx={{
                flex: 5,
                backgroundColor: 'whitesmoke',
                height:'100%'
            }}   >
          <Routes>
            {appRoutes.map((route) => (
               <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
               />
            ))}
          </Routes>
          </Box>
        </Router>
        <Footer />
      </Box>
  );
}

export default App;
