import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import useCreateUser from "../../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMessage } from "../../utils/errors";

export function Signup() {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");
  return (
    <Auth
      submitLabel="Sign up"
      error={error}
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
          setError("");
        } catch (error) {
          const errorMessage = extractErrorMessage(error);
          if (errorMessage) {
            console.error(`Error signing up: ${errorMessage}`);
            setError(errorMessage);
          }
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
