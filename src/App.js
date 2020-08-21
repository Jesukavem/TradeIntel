import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import Test from "./Test";
import Container from '@material-ui/core/Container';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Appbar component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        </Appbar>
        <Sidebar component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        </Sidebar>
        <Test component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
        </Test>
      </Container>
      <Sidebar></Sidebar>
    </React.Fragment>
  );
}

export default App;

