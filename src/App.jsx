import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Primary Page: Eagerly imported for instant LCP on root entry
import Home from "./pages/Home";

// Secondary Pages: Route-level code splitting for optimized initial bundle loading
const About = lazy(() => import("./pages/About"));
const ResidentialSolar = lazy(() => import("./pages/ResidentialSolar"));
const CommercialSolar = lazy(() => import("./pages/CommercialSolar"));
const IndustrialSolar = lazy(() => import("./pages/IndustrialSolar"));
const PowerTransformers = lazy(() => import("./pages/PowerTransformers"));
const SolarEPCServices = lazy(() => import("./pages/SolarEPCServices"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));

// Lightweight suspense fallback with brand styling
function PageLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-[#F7F8F4]" aria-label="Loading page content">
      <div className="w-8 h-8 rounded-full border-2 border-[#123C32]/15 border-t-[#E8A83E] animate-spin"></div>
    </div>
  );
}

// Redirect legacy /enquiry route to integrated /contact portal
function EnquiryRedirect() {
  const location = useLocation();
  return <Navigate to={`/contact${location.search}${location.hash || "#inquiry-form"}`} replace />;
}

// 404 Not Found Page Component
function NotFound() {
  return (
    <div className="pt-32 pb-24 min-h-[70vh] flex items-center justify-center bg-[#F7F8F4] text-center px-4">
      <div className="max-w-md mx-auto space-y-5">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E8A83E] bg-[#202724] px-3 py-1 rounded-full">
          404 Error
        </span>
        <h1 className="text-4xl font-extrabold text-[#202724]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#525D57] leading-relaxed">
          The requested page could not be located. Explore our solar energy and transformer solutions or return to the homepage.
        </p>
        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold bg-[#123C32] text-white hover:bg-[#1A4D41] transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollProgressBar />
      <div className="min-h-screen flex flex-col bg-[#F7F8F4] text-[#252A27]">
        {/* Sticky Header Navigation */}
        <Navbar />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Suspense fallback={<PageLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/residential-solar" element={<ResidentialSolar />} />
              <Route path="/commercial-solar" element={<CommercialSolar />} />
              <Route path="/industrial-solar" element={<IndustrialSolar />} />
              <Route path="/power-transformers" element={<PowerTransformers />} />
              <Route path="/solar-epc-services" element={<SolarEPCServices />} />
              <Route path="/enquiry" element={<EnquiryRedirect />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>

        {/* Multi-Column Corporate Footer */}
        <Footer />
      </div>
    </Router>
  );
}
