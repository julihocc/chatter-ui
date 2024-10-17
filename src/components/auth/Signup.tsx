import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import Auth from "./Auth";
import useCreateUser from "../../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMessage } from "../../utils/errors";
import { useLogin } from "../../hooks/useLogin";

export function Signup() {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");
  const { login } = useLogin();
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
          await login({ email, password });
          setError("");
        } catch (error) {
          const errorMessage = extractErrorMessage(error);
          if (errorMessage) {
            setError(errorMessage);
          }
          setError("An error occurred");
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
