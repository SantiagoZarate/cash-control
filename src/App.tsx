import { RegisterPage } from "./pages/registerPage";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="*" element={<div>error 404</div>} />
    </Routes>
  );
}
