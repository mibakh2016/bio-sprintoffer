import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index.tsx";
import Expertise from "./pages/Expertise.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isExpertise = location.pathname === "/expertise";

  useEffect(() => {
    const targetId = location.hash.replace("#", "");

    if (targetId) {
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  if (!isHome && !isExpertise) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className={isHome ? "block" : "hidden"} aria-hidden={!isHome}>
        <Index />
      </div>
      <div className={isExpertise ? "block" : "hidden"} aria-hidden={!isExpertise}>
        <Expertise />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
