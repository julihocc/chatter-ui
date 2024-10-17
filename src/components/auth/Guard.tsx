import useGetMe from "../../hooks/useGetMe";
import { excludedRoutes } from "../../constants/excluded-routes";
import { useNavigate } from "react-router-dom";

interface GuardProps {
  children: JSX.Element;
}

export function Guard({ children }: GuardProps) {
  const { data: user } = useGetMe();
  const navigate = useNavigate();
  const path = window.location.pathname;
  const excluded = excludedRoutes.includes(path);

  if (!excluded && !user) {
    navigate("/login");
    return null; // Return null to prevent rendering children
  }

  return <>{children}</>;
}

export default Guard;
