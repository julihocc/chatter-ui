import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import useLogin from "../../hooks/useLogin";

export function Login() {
  const { login, error } = useLogin();

  return (
    <Auth
      submitLabel="Login"
      onSubmit={(request) => login(request)}
      error={error ? "Credentials are not valid" : ""}
    >
      <Link to="/signup" style={{ alignSelf: "center" }}>
        <MuiLink>Sign up</MuiLink>
      </Link>
    </Auth>
  );
}

export default Login;
