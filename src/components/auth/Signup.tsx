import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";

export function Signup() {
  return (
    <Auth submitLabel="Sign up" onSubmit={async () => {}}>
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MuiLink>Log in</MuiLink>
      </Link>
    </Auth>
  );
}

export default Signup;
