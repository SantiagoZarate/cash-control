import { Route, Routes } from "react-router-dom";
import { PageNotFound, RegisterPage, UsersGuidePage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="/guide" element={<UsersGuidePage />} />
      <Route path="/home" element={<div>this is the home</div>} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
