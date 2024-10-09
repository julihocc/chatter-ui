import { createTheme, ThemeProvider, CssBaseline, Container,  } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <h1>Dark Theme</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
          sagittis nunc. Cras sit amet nulla nec nunc ultricies fermentum.
          Vivamus nec turpis auctor, ultrices nunc nec, ultricies odio. Donec
          nec sapien nec nunc ultricies fermentum. Vivamus nec turpis auctor,
          ultrices nunc nec, ultricies odio. Donec nec sapien nec nunc
          ultricies fermentum.
        </p>
      </Container>
    </ThemeProvider>
  );
}

export default App;
