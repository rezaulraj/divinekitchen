import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <>
      {/* Primary route */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
