import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VerifiableDiplomas from "./pages/initiatives/VerifiableDiplomas";
import TeacherLicensing from "./pages/initiatives/TeacherLicensing";
import Scholarships from "./pages/initiatives/Scholarships";
import Assessments from "./pages/initiatives/Assessments";
import Microcredentials from "./pages/initiatives/Microcredentials";
import Feedback from "./pages/initiatives/Feedback";
import Hackathons from "./pages/initiatives/Hackathons";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/initiatives/verifiable-diplomas" element={<VerifiableDiplomas />} />
          <Route path="/initiatives/teacher-licensing" element={<TeacherLicensing />} />
          <Route path="/initiatives/scholarships" element={<Scholarships />} />
          <Route path="/initiatives/assessments" element={<Assessments />} />
          <Route path="/initiatives/microcredentials" element={<Microcredentials />} />
          <Route path="/initiatives/feedback" element={<Feedback />} />
          <Route path="/initiatives/hackathons" element={<Hackathons />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
