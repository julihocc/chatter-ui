import useGetMe from "../../hooks/useGetMe";

interface GuardProps {
  children: JSX.Element;
}

export function Guard({ children }: GuardProps) {
  const { data: user } = useGetMe();
  console.log(`Current user: ${JSON.stringify(user)}`);

  return <>{user ? children : <h1>Not logged in</h1>}</>;
}

export default Guard;
