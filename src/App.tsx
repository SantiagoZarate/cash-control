import { Route, Routes } from "react-router-dom";
import { HomePage, PageNotFound, RegisterPage, UsersGuidePage } from "./pages";
import { ProtectedRoute } from "@util/ProtectedRoute";
import { MainLayout } from "./layouts/mainLayout/MainLayout";
import { SettingsPage } from "./pages/settingsPage/SettingsPage";
import { ActionsPage } from "./pages/actionsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/guide" element={<UsersGuidePage />} />
      <Route path="*" element={<PageNotFound />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/actions" element={<ActionsPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
