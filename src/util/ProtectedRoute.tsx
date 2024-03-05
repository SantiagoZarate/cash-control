import { Navigate, Outlet } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

export function ProtectedRoute() {
  const { isLogged } = useAuthentication();
  return isLogged ? <Outlet /> : <Navigate to={"/"} />;
}
