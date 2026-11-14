import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";
import { COMPANY_DETAILS, IMAGES } from "../data/companyData";

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="bg-[#202724] text-white pt-16 pb-12 border-t border-[#123C32]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand & Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-11 bg-white p-1 rounded-lg border border-[#E2E8E2]">
                <img
                  src={IMAGES.officialLogo}
                  alt="Proton Power Infra Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-[#E9F0E9]/80 text-xs sm:text-sm leading-relaxed pr-2">
              Proton Power Infra is a leading solar panel installation company and power transformer manufacturer headquartered in Indore, with a nationwide footprint. Since 2012, we've delivered 125+ MW of clean energy across India.
            </p>

            {/* Social Media Links provided by client */}
            <div className="pt-2">
              <div className="text-[11px] font-bold text-[#E8A83E] uppercase tracking-wider mb-2">
                Follow Official Channels
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={COMPANY_DETAILS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  in
                </a>
                <a
                  href={COMPANY_DETAILS.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-black text-white flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label="X (Twitter) Profile"
                >
                  X
                </a>
                <a
                  href={COMPANY_DETAILS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#1877f2] text-white flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label="Facebook Page"
                >
                  fb
                </a>
                <a
                  href={COMPANY_DETAILS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#e4405f] text-white flex items-center justify-center text-xs font-bold transition-colors"
                  aria-label="Instagram Profile"
                >
                  ig
                </a>
              </div>
            </div>

            <div className="pt-1">
              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#123C32] hover:bg-[#1A4D41] text-white text-xs font-semibold border border-[#E8A83E]/30 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>Connect via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E8A83E]" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-[#E8A83E] uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E9F0E9]/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us (Since 2012)
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers & Talent
                </Link>
              </li>
              <li>
                <Link to="/enquiry" className="hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solar & Transformer Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-[#E8A83E] uppercase">
              Solutions & Manufacturing
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-[#E9F0E9]/80">
              <li>
                <Link
                  to="/residential-solar"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Residential Rooftop Solar</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/commercial-solar"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Commercial & Ground-Mount</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/industrial-solar"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Industrial Solar Systems</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/power-transformers"
                  className="hover:text-white transition-colors flex items-center justify-between text-[#E8A83E] group font-semibold"
                >
                  <span>Power Transformers Mfg</span>
                  <span className="text-[10px] bg-[#E8A83E]/20 text-[#E8A83E] px-1 rounded">In-House</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/solar-epc-services"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Turnkey Solar EPC & O&M</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Regional Footprint (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold tracking-wider text-[#E8A83E] uppercase">
              Offices & Contact
            </h3>
            <div className="space-y-3 text-xs text-[#E9F0E9]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8A83E] shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  <strong>Headquarters:</strong> <br />
                  {COMPANY_DETAILS.address.full}
                </address>
              </div>

              <div className="pl-6 text-[11px] text-[#E9F0E9]/70 space-y-0.5">
                <div><strong>Regional Offices:</strong> New Delhi • Bhopal • Dewas</div>
                <div><strong>Track Record:</strong> 125+ MW Commissioned Pan-India</div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8A83E] shrink-0" />
                <div className="flex flex-col">
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[0].raw}`}
                    className="hover:text-white transition-colors font-semibold"
                  >
                    {COMPANY_DETAILS.phones[0].display}
                  </a>
                  <a
                    href={`tel:${COMPANY_DETAILS.phones[1].raw}`}
                    className="hover:text-white transition-colors"
                  >
                    {COMPANY_DETAILS.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E8A83E] shrink-0" />
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-[#E9F0E9]/70">
                <Clock className="w-4 h-4 text-[#E8A83E] shrink-0" />
                <span>{COMPANY_DETAILS.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E9F0E9]/60">
          <div>
            © {CURRENT_YEAR} {COMPANY_DETAILS.legalName} • 125+ MW Clean Energy Milestone.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-gray-600">•</span>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
