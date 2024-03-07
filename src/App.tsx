import {
  ActionsAddPage,
  ActionsExtractPage,
  ActionsSendPage,
  HomePage,
  PageNotFound,
  RegisterPage,
  SettingsPage,
  UsersGuidePage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout/MainLayout";
import { ActionsLayout } from "./layouts/actionsLayout/ActionsLayout";
import { ProtectedRoute } from "@helper/ProtectedRoute";

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

          <Route element={<ActionsLayout />}>
            <Route path="/actions/add" element={<ActionsAddPage />}></Route>
            <Route path="/actions/send" element={<ActionsSendPage />}></Route>
            <Route
              path="/actions/extract"
              element={<ActionsExtractPage />}
            ></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
