import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

export function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "100%",
          sm: "50%",
          md: "30%",
        },
        margin: "0 auto",
        justifyContent: "center",
      }}
    >
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Button variant="contained">Login</Button>
    </Stack>
  );
}

export default Auth;
