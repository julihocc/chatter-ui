import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import useCreateUser from "../../hooks/useCreateUser";

export function Signup() {
  const [createUser] = useCreateUser();
  return (
    <Auth
      submitLabel="Sign up"
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
      }}
    >
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MuiLink>Log in</MuiLink>
      </Link>
    </Auth>
  );
}

export default Signup;
