import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ArrowRight, Home, Building2, Factory, Cpu, Sun } from "lucide-react";
import { IMAGES } from "../data/companyData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setMobileSolutionsOpen(false);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSolutionsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors duration-200 py-2 px-3.5 rounded-lg ${
      isActive
        ? "text-[#123C32] bg-[#123C32]/10 font-bold"
        : "text-[#252A27] hover:text-[#123C32] hover:bg-black/5"
    }`;

  const isSolutionActive = [
    "/residential-solar",
    "/commercial-solar",
    "/industrial-solar",
    "/power-transformers",
    "/solar-epc-services",
  ].includes(location.pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E2E8E2] py-2.5"
          : "bg-[#F7F8F4]/95 backdrop-blur-sm py-3 border-b border-[#E2E8E2]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Proton Power Infra Homepage"
          >
            <div className="h-10 sm:h-11 flex items-center justify-center p-1 rounded-lg bg-white border border-[#E2E8E2] shadow-2xs group-hover:shadow transition-shadow">
              <img
                src={IMAGES.officialLogo}
                alt="Proton Power Infra Official Logo"
                className="h-full w-auto object-contain max-w-[150px] sm:max-w-[170px]"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-extrabold text-xs tracking-tight text-[#123C32] leading-none uppercase font-tech">
                Proton Power Infra
              </span>
              <span className="text-[9px] font-semibold tracking-wider text-[#E8A83E] uppercase mt-0.5">
                Solar & Transformers • 125+ MW
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Home, Services & Solutions, About Us, Contact Us */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            {/* Services & Solutions Dropdown (Hover & Click) */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setSolutionsDropdownOpen(!solutionsDropdownOpen)}
                className={`text-sm font-semibold transition-colors duration-200 py-2 px-3.5 rounded-lg flex items-center gap-1.5 cursor-pointer ${
                  isSolutionActive
                    ? "text-[#123C32] bg-[#123C32]/10 font-bold"
                    : "text-[#252A27] hover:text-[#123C32] hover:bg-black/5"
                }`}
                aria-expanded={solutionsDropdownOpen}
              >
                <span>Services & Solutions</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    solutionsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-92 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-[#E2E8E2] p-2 transition-all duration-200 origin-top-left">
                    <div className="px-3.5 py-2.5 border-b border-gray-100 mb-1">
                      <p className="text-xs font-bold text-[#123C32] uppercase tracking-wider font-tech">
                        Solar & Transformer Infrastructure
                      </p>
                      <p className="text-[11px] text-[#525D57]">
                        125+ MW Commissioned • In-House Manufacturing
                      </p>
                    </div>

                    <Link
                      to="/residential-solar"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F8F4] transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-[#123C32]/10 text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] transition-colors mt-0.5">
                        <Home className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#202724] group-hover:text-[#123C32]">
                          Residential Solar
                        </div>
                        <div className="text-xs text-[#525D57] line-clamp-1">
                          Rooftop installations for independent villas & homes
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/commercial-solar"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F8F4] transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-[#123C32]/10 text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] transition-colors mt-0.5">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#202724] group-hover:text-[#123C32]">
                          Commercial & Ground-Mounted Solar
                        </div>
                        <div className="text-xs text-[#525D57] line-clamp-1">
                          Ground-mounted arrays & commercial rooftop systems
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/industrial-solar"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F8F4] transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-[#123C32]/10 text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] transition-colors mt-0.5">
                        <Factory className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#202724] group-hover:text-[#123C32]">
                          Industrial Solar Systems
                        </div>
                        <div className="text-xs text-[#525D57] line-clamp-1">
                          MW-scale systems for factories, chemicals & warehouses
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/power-transformers"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F8F4] transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-[#123C32]/10 text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] transition-colors mt-0.5">
                        <Cpu className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#202724] group-hover:text-[#123C32] flex items-center gap-1.5">
                          <span>Power Transformers Manufacturer</span>
                          <span className="text-[10px] font-bold bg-[#E8A83E]/20 text-[#123C32] px-1.5 py-0.2 rounded">In-House</span>
                        </div>
                        <div className="text-xs text-[#525D57] line-clamp-1">
                          Inverter duty solar transformers & step-up/down repair
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/solar-epc-services"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F8F4] transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-[#123C32]/10 text-[#123C32] group-hover:bg-[#123C32] group-hover:text-[#E8A83E] transition-colors mt-0.5">
                        <Sun className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#202724] group-hover:text-[#123C32]">
                          Turnkey Solar EPC & O&M
                        </div>
                        <div className="text-xs text-[#525D57] line-clamp-1">
                          MNRE liaisoning, PPA, engineering & SCADA O&M
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* Right Action: Only "Enquiry Now" (Contact number removed as requested) */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold bg-[#123C32] text-white hover:bg-[#1A4D41] shadow-xs hover:shadow transition-all duration-200 group"
            >
              <span>Enquiry Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/enquiry"
              className="text-xs font-bold bg-[#123C32] text-white px-3.5 py-2 rounded-lg shadow-xs"
            >
              Enquiry Now
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#202724] hover:bg-black/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity">
          <div className="bg-white w-full max-h-[calc(100vh-60px)] overflow-y-auto border-b border-[#E2E8E2] p-5 shadow-2xl flex flex-col justify-between">
            <div className="space-y-2">
              <NavLink
                to="/"
                end
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-bold ${
                    isActive ? "bg-[#123C32] text-white" : "text-[#202724] hover:bg-gray-50"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Mobile Solutions Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-bold text-[#202724] hover:bg-gray-50"
                >
                  <span>Services & Solutions</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      mobileSolutionsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileSolutionsOpen && (
                  <div className="pl-4 pr-2 py-2 space-y-1 bg-[#F7F8F4] rounded-xl mt-1 border border-[#E2E8E2]/60">
                    <Link
                      to="/residential-solar"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-[#525D57] hover:text-[#123C32]"
                    >
                      Residential Solar
                    </Link>
                    <Link
                      to="/commercial-solar"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-[#525D57] hover:text-[#123C32]"
                    >
                      Commercial & Ground-Mounted Solar
                    </Link>
                    <Link
                      to="/industrial-solar"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-[#525D57] hover:text-[#123C32]"
                    >
                      Industrial Solar Systems
                    </Link>
                    <Link
                      to="/power-transformers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-[#525D57] hover:text-[#123C32]"
                    >
                      Power Transformers Manufacturer
                    </Link>
                    <Link
                      to="/solar-epc-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-2 text-sm font-semibold text-[#525D57] hover:text-[#123C32]"
                    >
                      Turnkey Solar EPC & O&M
                    </Link>
                  </div>
                )}
              </div>

              <NavLink
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-bold ${
                    isActive ? "bg-[#123C32] text-white" : "text-[#202724] hover:bg-gray-50"
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-lg text-base font-bold ${
                    isActive ? "bg-[#123C32] text-white" : "text-[#202724] hover:bg-gray-50"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </div>

            <div className="pt-6 border-t border-[#E2E8E2] mt-6">
              <Link
                to="/enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-[#123C32] text-white shadow-md text-center"
              >
                <span>Enquiry Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
