import { useState } from "react";
import { API_URL } from "../constants/urls";
import client from "../constants/apollo-client";

interface LoginRequest {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [error, setError] = useState<string>();

  const login = async (request: LoginRequest) => {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(request),
    });

    if (!res.ok) {
      if (res.status === 401) {
        setError("Invalid email or password");
      } else {
        setError("An error occurred");
      }
      return;
    }
    setError("");
    try {
      await client.refetchQueries({ include: "all" });
    } catch (e) {
      console.error(`Error refetching queries: ${e}`);
      throw new Error("An error occurred");
    }
  };

  return { login, error };
};

export default useLogin;
