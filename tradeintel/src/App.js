import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Sidebar from "./Sidebar";
function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Sidebar component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }}>
      </Sidebar>
      </Container>
    </React.Fragment>
  );
}

export default App;

