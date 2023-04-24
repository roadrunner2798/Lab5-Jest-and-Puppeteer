import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container } from '@mui/system';

import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Counter from "./components/Counter";
import List from "./components/List";
import Sync from "./components/Sync";

import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (

    <div className="App">

      <Provider store={store}>

        <Container maxWidth="sm" sx={{ mt: 5 }}>

          <BrowserRouter>
            <Box sx={{ mb: 3 }}>
              <Menu />
            </Box>
            <Routes>
              <Route exact path="" element={ <></> } />
              <Route exact path="about" element={<About />} />
              <Route exact path="clients" element={<Clients />} />
              <Route exact path="contact" element={<Contact />} />
              <Route exact path="counter" element={<Counter />} />
              <Route exact path="list" element={<List />} />
            </Routes>
          </BrowserRouter>

          <Sync />

        </Container>

      </Provider>

    </div>
  );
}

export default App;