import { gql, useMutation } from "@apollo/client";
import User from "../models/User";

interface CreateUserInput {
  email: string;
  password: string;
}

const CREATE_USER = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
    }
  }
`;

export const useCreateUser = () => {
  return useMutation<User, CreateUserInput>(CREATE_USER);
};

export default useCreateUser;
