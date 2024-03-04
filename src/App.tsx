import { Route, Routes } from "react-router-dom";
import { PageNotFound, RegisterPage } from "./pages";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
