import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, ChevronRight } from "lucide-react";
import { COMPANY_DETAILS, IMAGES } from "../data/companyData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#123C32] text-white pt-8 pb-5 border-t border-white/10 overflow-hidden">
      {/* Top Ambient Golden Line */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#E8A83E]/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid: Compact, Balanced & Professional Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-6">
          {/* Col 1: Brand & Intro (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Logo Only (Brand Image contains full company name clearly, matching Header) */}
              <Link
                to="/"
                className="inline-flex items-center focus:outline-none group py-0.5"
                aria-label="Proton Power Infra Homepage"
              >
                <img
                  src={IMAGES.navbarLogo}
                  alt="Proton Power Infra"
                  width="181"
                  height="80"
                  loading="lazy"
                  decoding="async"
                  className="h-14 sm:h-16 md:h-[72px] lg:h-[80px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </Link>

              <p className="text-[#E9F0E9]/80 text-xs leading-relaxed pr-2 text-justify-clean">
                India's trusted Solar EPC and Power Transformer manufacturer. Headquartered in Indore with in-house transformer production in Dewas, delivering 125+ MW of dependable renewable power infrastructure nationwide since 2012.
              </p>
            </div>

            {/* Social Media Links & WhatsApp Direct Reach in a single compact row */}
            <div className="pt-1 flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5">
                <a
                  href={COMPANY_DETAILS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center text-xs font-bold transition-all hover:scale-105 shadow-2xs"
                  aria-label="LinkedIn Profile"
                >
                  in
                </a>
                <a
                  href={COMPANY_DETAILS.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-black text-white flex items-center justify-center text-xs font-bold transition-all hover:scale-105 shadow-2xs"
                  aria-label="X (Twitter) Profile"
                >
                  X
                </a>
                <a
                  href={COMPANY_DETAILS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-[#1877f2] text-white flex items-center justify-center text-xs font-bold transition-all hover:scale-105 shadow-2xs"
                  aria-label="Facebook Page"
                >
                  fb
                </a>
                <a
                  href={COMPANY_DETAILS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/10 hover:bg-[#e4405f] text-white flex items-center justify-center text-xs font-bold transition-all hover:scale-105 shadow-2xs"
                  aria-label="Instagram Profile"
                >
                  ig
                </a>
              </div>

              <a
                href={COMPANY_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#123C32] hover:bg-[#1A4D41] text-white text-[11px] font-semibold border border-[#E8A83E]/40 hover:border-[#E8A83E] shadow-2xs hover:shadow-[0_0_12px_rgba(37,211,102,0.3)] transition-all ml-1 font-tech"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>WhatsApp</span>
                <ArrowUpRight className="w-3 h-3 text-[#E8A83E]" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-[#E8A83E] uppercase font-tech pb-1 border-b border-white/10">
              Navigation
            </h3>
            <ul className="space-y-1.5 text-xs text-[#E9F0E9]/80 font-tech">
              <li>
                <Link to="/" className="hover:text-[#E8A83E] transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#E8A83E] transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                  <span>About Us (Since 2012)</span>
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#E8A83E] transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                  <span>Careers &amp; Talent</span>
                </Link>
              </li>
              <li>
                <Link to="/contact#inquiry-form" className="hover:text-[#E8A83E] transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                  <span>Request a Quote</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E8A83E] transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                  <span>Contact Channels</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Solar & Transformer Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-[#E8A83E] uppercase font-tech pb-1 border-b border-white/10">
              Solutions &amp; Manufacturing
            </h3>
            <ul className="space-y-1.5 text-xs text-[#E9F0E9]/80 font-tech">
              <li>
                <Link to="/residential-solar" className="hover:text-[#E8A83E] transition-colors flex items-center justify-between py-0.5 group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                    <span>Residential Rooftop</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/commercial-solar" className="hover:text-[#E8A83E] transition-colors flex items-center justify-between py-0.5 group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                    <span>Commercial &amp; Ground</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/industrial-solar" className="hover:text-[#E8A83E] transition-colors flex items-center justify-between py-0.5 group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                    <span>Industrial Solar Systems</span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/power-transformers" className="hover:text-[#E8A83E] transition-colors flex items-center justify-between py-0.5 group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#E8A83E]" />
                    <span>Power Transformers</span>
                  </span>
                  <span className="text-[9px] font-bold bg-[#E8A83E]/20 text-[#E8A83E] px-1.5 py-0.2 rounded font-mono">In-House</span>
                </Link>
              </li>
              <li>
                <Link to="/solar-epc-services" className="hover:text-[#E8A83E] transition-colors flex items-center justify-between py-0.5 group">
                  <span className="flex items-center gap-1.5">
                    <ChevronRight className="w-3 h-3 text-[#E8A83E]/70" />
                    <span>Turnkey Solar EPC &amp; O&amp;M</span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office & Contacts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold tracking-wider text-[#E8A83E] uppercase font-tech pb-1 border-b border-white/10">
              Offices &amp; Contact Desk
            </h3>
            <div className="space-y-2 text-xs text-[#E9F0E9]/80 font-tech">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E8A83E] shrink-0 mt-0.5" />
                <address className="not-italic leading-tight text-[11px] text-[#E9F0E9]/75">
                  <strong className="text-white">HQ:</strong> {COMPANY_DETAILS.address.full}
                </address>
              </div>

              <div className="pl-5 text-[10px] text-[#E9F0E9]/65 space-y-0.5">
                <div><strong className="text-[#E8A83E]/90">Hubs:</strong> New Delhi • Bhopal • Dewas Plant</div>
                
              </div>

              <div className="flex items-center gap-2 pt-0.5">
                <Phone className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
                <div className="flex items-center gap-2 text-[11px]">
                  <a href={`tel:${COMPANY_DETAILS.phones[0].raw}`} className="hover:text-white font-semibold transition-colors">
                    {COMPANY_DETAILS.phones[0].display}
                  </a>
                  <span className="text-white/30">•</span>
                  <a href={`tel:${COMPANY_DETAILS.phones[1].raw}`} className="hover:text-white transition-colors">
                    {COMPANY_DETAILS.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition-colors text-[11px] truncate">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-[#E9F0E9]/65">
                <Clock className="w-3.5 h-3.5 text-[#E8A83E] shrink-0" />
                <span>{COMPANY_DETAILS.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#E9F0E9]/60 font-tech">
          <div className="text-center">
            © {currentYear} {COMPANY_DETAILS.legalName} • 125+ MW Clean Energy Milestone.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-[#E8A83E] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/terms-conditions" className="hover:text-[#E8A83E] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/20">•</span>
            <Link to="/contact" className="hover:text-[#E8A83E] transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
