import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import MainLayout from "./components/MainLayout";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import CafeBatch from "./pages/restorents/CafeBatch";
import LockoutBatch from "./pages/restorents/LockoutBatch";
import WedingBeatch from "./pages/wedding/WedingBeatch";
import WeddingCafe from "./pages/wedding/WeddingCafe";
import EventPage from "./pages/event/EventPage";
import logo from "/logo1.png";
import "./App.css";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
});

const RouteLoader = () => {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let timer1, timer2;

    if (location.key === "default") {
      NProgress.start();
      timer1 = setTimeout(() => setShowLoader(true), 300);
      timer2 = setTimeout(() => {
        NProgress.done();
        setShowLoader(false);
      }, 500);
    } else {
      NProgress.start();
      setShowLoader(true);
      timer2 = setTimeout(() => {
        NProgress.done();
        setShowLoader(false);
      }, 500);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      NProgress.done();
      setShowLoader(false);
    };
  }, [location.key]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
      <div className="animate-pulse animate-bounce">
        <img src={logo} alt="Loading..." className="w-32 h-32 object-contain" />
        <div className="mt-4 flex justify-center space-x-2">
          <div
            className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-amber-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <RouteLoader />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="cafe-beach" element={<CafeBatch />} />
          <Route path="lookout-beach" element={<LockoutBatch />} />
          <Route path="wedding-lookout-beach" element={<WedingBeatch />} />
          <Route path="wedding-cafe-beach" element={<WeddingCafe />} />
          <Route path="events" element={<EventPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
