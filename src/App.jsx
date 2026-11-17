import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ResidentialSolar from "./pages/ResidentialSolar";
import CommercialSolar from "./pages/CommercialSolar";
import IndustrialSolar from "./pages/IndustrialSolar";
import PowerTransformers from "./pages/PowerTransformers";
import SolarEPCServices from "./pages/SolarEPCServices";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

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
        </main>

        {/* Multi-Column Corporate Footer */}
        <Footer />
      </div>
    </Router>
  );
}
