import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import useCreateUser from "../../hooks/useCreateUser";
import { useState } from "react";

export function Signup() {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");
  return (
    <Auth
      submitLabel="Sign up"
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
        } catch (error) {
          console.error(error);
          throw error;
        }
      }}
    >
      <Link to="/login" style={{ alignSelf: "center" }}>
        <MuiLink>Log in</MuiLink>
      </Link>
    </Auth>
  );
}

export default Signup;
