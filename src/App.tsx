import { Route, Routes } from "react-router-dom";
import { PageNotFound, RegisterPage, UsersGuidePage } from "./pages";
import { ProtectedRoute } from "@util/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/guide" element={<UsersGuidePage />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<div>this is the home</div>} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
