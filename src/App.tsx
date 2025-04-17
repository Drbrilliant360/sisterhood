
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/dashboard";
import Community from "./pages/Community";
import Resources from "./pages/Resources";
import Safety from "./pages/Safety";
import HadijaAI from "./pages/HadijaAI";
import About from "./pages/About";
import Mentors from "./pages/Mentors";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Testimonials from "./pages/Testimonials";
import Membership from "./pages/Membership";
import BecomeMentor from "./pages/BecomeMentor";
import Mentorship from "./pages/Mentorship";
import Entrepreneurship from "./pages/Entrepreneurship";
import HealthResources from "./pages/HealthResources";
import SafetyTools from "./pages/SafetyTools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/events" element={<Events />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/become-mentor" element={<BecomeMentor />} />
            
            {/* Protected routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/community" element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />
            <Route path="/resources" element={
              <ProtectedRoute>
                <Resources />
              </ProtectedRoute>
            } />
            <Route path="/safety" element={
              <ProtectedRoute>
                <Safety />
              </ProtectedRoute>
            } />
            <Route path="/hadija-ai" element={
              <ProtectedRoute>
                <HadijaAI />
              </ProtectedRoute>
            } />
            <Route path="/mentorship" element={
              <ProtectedRoute>
                <Mentorship />
              </ProtectedRoute>
            } />
            <Route path="/entrepreneurship" element={
              <ProtectedRoute>
                <Entrepreneurship />
              </ProtectedRoute>
            } />
            <Route path="/health-resources" element={
              <ProtectedRoute>
                <HealthResources />
              </ProtectedRoute>
            } />
            <Route path="/safety-tools" element={
              <ProtectedRoute>
                <SafetyTools />
              </ProtectedRoute>
            } />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
