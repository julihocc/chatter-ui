import useGetMe from "../../hooks/useGetMe";
import { excludedRoutes } from "../../constants/excluded-routes";

interface GuardProps {
  children: JSX.Element;
}

export function Guard({ children }: GuardProps) {
  const { data: user } = useGetMe();
  const path = window.location.pathname;
  const excluded = excludedRoutes.includes(path);
  return <>{(excluded || user) && children}</>;
}

export default Guard;
