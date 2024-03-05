import { Route, Routes } from "react-router-dom";
import { HomePage, PageNotFound, RegisterPage, UsersGuidePage } from "./pages";
import { ProtectedRoute } from "@util/ProtectedRoute";
import { MainLayout } from "./layouts/MainLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/guide" element={<UsersGuidePage />} />
      <Route path="*" element={<PageNotFound />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
