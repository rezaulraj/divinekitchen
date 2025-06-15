import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import CafeBatch from "./pages/restorents/CafeBatch";
import LockoutBatch from "./pages/restorents/LockoutBatch";
import WedingBeatch from "./pages/wedding/WedingBeatch";

function App() {
  return (
    <>
      {/* Primary route */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cafe-beach" element={<CafeBatch />} />
          <Route path="/lookout-beach" element={<LockoutBatch />} />
          <Route path="/wedding-lookout-beach" element={<WedingBeatch />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
