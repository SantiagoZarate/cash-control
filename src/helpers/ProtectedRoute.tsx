import { useAuthentication } from "@hook/useAuthentication";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const { isLogged } = useAuthentication();
  return isLogged ? <Outlet /> : <Navigate to={"/"} />;
}
