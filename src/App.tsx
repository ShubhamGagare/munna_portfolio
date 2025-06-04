import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BigMarket from "./pages/BigMarket";
import FireRegister from "./pages/FireRegister";
import TakeRegister from "./pages/TakeRegister";
import NotFound from "./pages/NotFound";
import VolpayTestSuite from "./pages/VolpayTestSuite";
import ParentPayOverview from "./pages/ParentPayOverview";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/big-market" element={<BigMarket />} />
          <Route path="/fire-register" element={<FireRegister />} />
          <Route path="/take-register" element={<TakeRegister />} />
          <Route path="/volpay-testsuite" element={<VolpayTestSuite />} />
          <Route path="/parentpay" element={<ParentPayOverview />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
