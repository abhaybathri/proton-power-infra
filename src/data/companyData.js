// Official Assets & Real Projects
import officialLogo from "../assets/company/official-logo.jpg";
import logoPng from "../assets/company/logo.png";
import realGroundMount from "../assets/company/real-project-ground-mount.jpg";
import realSolarRows from "../assets/company/real-project-solar-rows.jpg";
import realTransformerSubstation from "../assets/company/real-project-transformer-substation.jpg";
import realUtilityPlant from "../assets/company/real-project-utility-plant.jpg";
import transformerUnit1 from "../assets/company/transformer-1.jpg";
import transformerUnit2 from "../assets/company/transformer-2.jpg";
import transformerUnit3 from "../assets/company/transformer-3.jpg";
import project1Img from "../assets/company/project-1.jpg";
import project2Img from "../assets/company/project-2.jpg";
import approvalImg from "../assets/company/approval-liasoning.jpg";
import engineeringImg from "../assets/company/engineering-design.jpg";

// Dedicated Home Assets
import homeTopImage from "../assets/home-assets/home-top-image.jpg";
import homeResidential from "../assets/home-assets/residential-solar.jpg";
import homeCommercialGround from "../assets/home-assets/comercial-ground-solar.jpg";
import homeIndustrial from "../assets/home-assets/industrial-solar.jpg";
import homeTransformer from "../assets/home-assets/solar-transformer.jpg";
import homeTurnkeyEPC from "../assets/home-assets/turnkey-solar.jpg";

export const COMPANY_DETAILS = {
  name: "Proton Power Infra",
  legalName: "Proton Power Infrastructure Pvt. Ltd.",
  tagline: "Powering India with Smarter Solar Solutions & Transformers Since 2012",
  subTagline: "125+ MW installed across India. Independent Power Producer, EPC turnkey specialists, and high-performance power transformer manufacturer.",
  establishedYear: 2012,
  installedCapacity: "125+ MW",
  identity: "Independent Power Producer (IPP) & Turnkey EPC",
  phones: [
    { display: "+91 97707 44687", raw: "+919770744687" },
    { display: "+91 96853 20092", raw: "+919685320092" },
  ],
  primaryPhone: "+91 97707 44687",
  primaryPhoneRaw: "+919770744687",
  email: "support@protonpowerinfra.com",
  offices: [
    { city: "Indore", role: "Headquarters", address: "Plot No. 242, Sch. No. 78, Part II, Vijay Nagar, Indore, M.P. 452001" },
    { city: "Delhi", role: "Regional Office", address: "National Capital Region (NCR), New Delhi" },
    { city: "Bhopal", role: "Regional Office", address: "Arera Colony / MP Nagar, Bhopal, M.P." },
    { city: "Dewas", role: "Operations Hub", address: "Industrial Area, Dewas, M.P." },
  ],
  address: {
    line1: "Plot No. 242, Sch. No. 78, Part II",
    area: "Vijay Nagar",
    city: "Indore",
    state: "Madhya Pradesh",
    pincode: "452001",
    country: "India",
    full: "Plot No. 242, Sch. No. 78, Part II, Vijay Nagar, Indore, M.P. 452001, India",
  },
  workingHours: "Monday – Saturday: 9:00 AM – 6:30 PM (IST)",
  whatsappUrl: "https://wa.me/919770744687?text=Hello%20Proton%20Power%20Infra%2C%20I%20would%20like%20to%20enquire%20about%20solar%20and%20transformer%20solutions.",
  social: {
    facebook: "https://www.facebook.com/people/Proton-Power-Infra/61572926724511/",
    twitter: "https://x.com/InfraProto74535",
    instagram: "https://www.instagram.com/protonpowerinfra/",
    linkedin: "https://www.linkedin.com/in/proton-power-infra-a581bb33b/",
  },
};

export const IMAGES = {
  logo: logoPng,
  officialLogo: officialLogo,
  hero: homeTopImage,
  heroTop: homeTopImage,
  homeResidential: homeResidential,
  homeCommercialGround: homeCommercialGround,
  homeIndustrial: homeIndustrial,
  homeTransformer: homeTransformer,
  homeTurnkeyEPC: homeTurnkeyEPC,
  heroSecondary: realGroundMount,
  residentialHero: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
  residentialModern: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80",
  commercialHero: realGroundMount,
  commercialRoof: "https://images.unsplash.com/photo-1545208942-e1c5c91bad50?auto=format&fit=crop&w=1200&q=80",
  industrialHero: realSolarRows,
  industrialPark: realUtilityPlant,
  transformerSubstation: realTransformerSubstation,
  transformerUnit1: transformerUnit1,
  transformerUnit2: transformerUnit2,
  transformerUnit3: transformerUnit3,
  solarInstallation: project1Img,
  solarProject2: project2Img,
  approvalLiasoning: approvalImg,
  engineeringDesign: engineeringImg,
  aboutHero: realGroundMount,
};

export const STATS = [
  { value: "125+ MW", label: "Solar Installed Across India", sub: "Utility, Industrial & Rooftop" },
  { value: "Since 2012", label: "Industry Leadership", sub: "Over a Decade of Clean Energy" },
  { value: "Pan-India", label: "4 Strategic Offices", sub: "Indore (HQ), Delhi, Dewas & Bhopal" },
  { value: "Tier-1", label: "Global Quality Standards", sub: "In-House Transformers & Solar EPC" },
];

export const HIGHLIGHTS = [
  {
    id: "125mw",
    title: "125+ MW Installed Across India",
    description: "Proven track record as an Independent Power Producer (IPP) executing large-scale utility and industrial installations.",
  },
  {
    id: "turnkey-epc",
    title: "Experts in EPC & O&M",
    description: "End-to-end capabilities spanning structural design, MNRE liaisoning, civil installation, SCADA telemetry, and lifecycle maintenance.",
  },
  {
    id: "transformer-mfg",
    title: "Power Transformer Manufacturer",
    description: "In-house manufacturing of Inverter Duty Solar Transformers, plus specialized step-up and step-down transformer repair and services.",
  },
  {
    id: "pan-india",
    title: "Pan-India Presence & Dynamic Team",
    description: "Active offices in Delhi, Indore (HQ), Dewas & Bhopal. The perfect synergy of young talent and seasoned engineering veterans.",
  },
];

export const SOLUTIONS = [
  {
    id: "residential",
    slug: "residential-solar",
    title: "Residential Solar",
    subtitle: "Rooftop solar installations for modern sustainable homes",
    description: "Cut domestic electricity bills by generating your own clean power. Customized solar rooftop systems that lower bills, protect against tariff hikes, and increase property value.",
    features: [
      "Cost savings & up to 90% power bill reduction",
      "Energy independence & rising utility tariff protection",
      "Eco-friendly carbon footprint reduction",
      "Net-metering & government subsidy liaisoning",
    ],
    image: homeResidential,
    badge: "Residential",
    capacityRange: "3 kW to 25 kW",
    idealFor: "Villas, Independent Bungalows & Housing Societies",
    ctaText: "Explore Residential Solar",
  },
  {
    id: "commercial",
    slug: "commercial-solar",
    title: "Commercial & Ground-Mounted Solar",
    subtitle: "Turnkey solar systems for offices, business hubs & ground facilities",
    description: "Unlock the full potential of your commercial space with rooftop and ground-mounted solar solutions engineered for maximum sunlight harvesting and high ROI.",
    features: [
      "Robust Ground-Mounted solar arrays for expansive open acreage",
      "Commercial rooftop optimization with zero business downtime",
      "Accelerated depreciation (Section 32) tax benefits",
      "Scalable configurations tailored to commercial energy demand",
    ],
    image: homeCommercialGround,
    badge: "Commercial & Ground-Mount",
    capacityRange: "25 kW to 500+ kW",
    idealFor: "Offices, Retail Plazas, Educational Campuses, Hospitals & Resorts",
    ctaText: "Explore Commercial & Ground-Mount",
  },
  {
    id: "industrial",
    slug: "industrial-solar",
    title: "Industrial Solar Systems",
    subtitle: "Heavy-duty solar installations for energy-intensive manufacturing",
    description: "Reliable, high-voltage industrial solar systems designed to meet severe energy loads, slash peak tariffs, comply with environmental regulations, and provide captive power security.",
    features: [
      "Manufacturing units & continuous production power lines",
      "Warehouses, cold chain & logistics centers",
      "Agriculture, food processing & chemical plants",
      "High-tension (HT) 11kV/33kV grid synchronization",
    ],
    image: homeIndustrial,
    badge: "Industrial MW-Scale",
    capacityRange: "100 kW to 10+ MW",
    idealFor: "Manufacturing Plants, Cold Storage, Chemical Units & Warehouses",
    ctaText: "Explore Industrial Solar System",
  },
  {
    id: "transformers",
    slug: "power-transformers",
    title: "Power Transformers Manufacturer",
    subtitle: "Inverter duty solar transformers & specialized repair services",
    description: "Proton Power Infra is a leading manufacturer of high-efficiency Inverter Duty Solar Transformers, with comprehensive step-up and step-down transformer repair and services.",
    features: [
      "Inverter Duty Solar Transformer manufacturing",
      "Step-up transformer repair, rewinding & voltage maintenance",
      "Step-down transformer repair with minimal power loss",
      "Custom transformer engineering for specialized operational specs",
    ],
    image: homeTransformer,
    badge: "In-House Manufacturing",
    capacityRange: "Customized KVA / MVA Ratings",
    idealFor: "Solar Parks, Industrial Substations, Utilities & Commercial Campuses",
    ctaText: "Explore Power Transformers Manufacture",
  },
  {
    id: "epc-services",
    slug: "solar-epc-services",
    title: "Turnkey Solar EPC & O&M",
    subtitle: "Comprehensive engineering, procurement, liaisoning & maintenance",
    description: "From MNRE approvals, PPA agreements, and 3D irradiance modeling to Tier-1 procurement, structural civil erection, and IoT SCADA remote monitoring.",
    features: [
      "Approvals & Liaisoning (MNRE, LTOA, PPA, CEIG, REC SLDC)",
      "Plant Design & Engineering (Soil, wind, radiance & topography analysis)",
      "Tier-1 Construction & Procurement Management",
      "Post-Commissioning O&M with 24/7 cloud SCADA monitoring",
    ],
    image: homeTurnkeyEPC,
    badge: "Turnkey EPC Services",
    capacityRange: "End-to-End Execution",
    idealFor: "Solar Park Developers, Private IPPs, Government & Public Sector Tenders",
    ctaText: "Explore Turnkey Solar EPC & O&M",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "125+ MW Proven Track Record",
    description: "Demonstrated execution across public and private sector projects throughout India as an Independent Power Producer (IPP).",
    icon: "Award",
  },
  {
    title: "In-House Transformer Manufacturing",
    description: "Unlike standard EPCs, we manufacture our own Inverter Duty Solar Transformers and execute step-up/step-down repair services.",
    icon: "Cpu",
  },
  {
    title: "Turnkey EPC & MNRE Liaisoning",
    description: "Handling complete paperwork: MNRE project registration, LTOA open access, PPA drafting, CEIG safety inspection, and REC accreditation.",
    icon: "FileCheck",
  },
  {
    title: "Pan-India Presence (4 Offices)",
    description: "Headquartered in Indore with strategic regional offices in Delhi, Dewas, and Bhopal for immediate on-site mobilization.",
    icon: "MapPin",
  },
  {
    title: "24/7 Remote SCADA Monitoring",
    description: "Real-time generation telemetry, string-level diagnostics, predictive fault alerts, and proactive preventive O&M panel washing.",
    icon: "Activity",
  },
  {
    title: "Dynamic Expert Team",
    description: "The ideal blend of dynamic young engineers and seasoned power infrastructure professionals adhering to global engineering standards.",
    icon: "Users",
  },
];

export const SOLAR_JOURNEY = [
  {
    step: "01",
    title: "Site Assessment & Energy Audit",
    description: "Our certified engineers analyze your property, energy bills, roof/ground topography, soil structure, and radiance potential.",
    duration: "Phase 1",
    details: "Comprehensive evaluation of sanction load, contract demand, and 3D shadow profile to determine maximum project value.",
  },
  {
    step: "02",
    title: "Approvals & Liaisoning",
    description: "Complete handling of MNRE nodal registration, DISCOM net-metering permits, LTOA open access, and PPA agreements.",
    duration: "Phase 2",
    details: "Zero-headache liaisoning with state electricity boards, CEIG clearances, and statutory accreditation filings.",
  },
  {
    step: "03",
    title: "Turnkey Design & Installation",
    description: "Tier-1 component procurement, inverter duty transformer integration, precision civil mounting, and HT/LT electrical cabling.",
    duration: "Phase 3",
    details: "Execution adhering to strict quality controls, wind-load ratings (up to 150 km/h), and non-invasive roof/ground mounting.",
  },
  {
    step: "04",
    title: "Activation & SCADA O&M",
    description: "Net-meter synchronization, system energization, and activation of cloud IoT remote monitoring for lifelong optimal yield.",
    duration: "Lifecycle",
    details: "Real-time generation dashboard access, regular dust cleaning cycles, thermographic diagnostics, and warranty support.",
  },
];

export const REAL_PROJECTS = [
  {
    id: "project-utility-1",
    title: "Utility-Scale Ground-Mounted Solar Park",
    category: "Government & Institutional EPC",
    categoryKey: "utility",
    capacity: "Multi-MW Plant",
    location: "Central India Grid Interconnection",
    description: "Extensive utility-scale ground-mounted solar park developed by Proton Power Infra featuring high-efficiency PV arrays, on-site control cabins, and HT 33kV substation synchronization.",
    image: realGroundMount,
    highlights: ["Inverter Duty Step-Up Transformer Substation", "SCADA Integrated Weather Monitoring", "Independent Power Producer (IPP) Asset"],
    isReal: true,
  },
  {
    id: "project-utility-2",
    title: "High-Yield Solar Tracker & Fixed-Tilt Arrays",
    category: "Industrial & Utility Solar",
    categoryKey: "industrial",
    capacity: "Multi-MW Installation",
    location: "Madhya Pradesh Solar Corridor",
    description: "Miles of precision-mounted solar panel rows engineered across terrain contours to harvest maximum sunlight hours with minimal environmental disturbance.",
    image: realSolarRows,
    highlights: ["Tier-1 Bifacial PV Modules", "Robust Hot-Dip Galvanized Structures", "Optimized Inter-Row Pitch Angle"],
    isReal: true,
  },
  {
    id: "project-transformer-1",
    title: "Inverter Duty Solar Transformer Substation",
    category: "Power Transformer Infrastructure",
    categoryKey: "transformers",
    capacity: "Step-Up Substation Unit",
    location: "Captive Solar Power Substation",
    description: "High-performance step-up transformer with ceramic high-voltage bushings and busbar infrastructure manufactured and serviced by Proton Power Infra.",
    image: realTransformerSubstation,
    highlights: ["Manufactured by Proton Power Infra", "Low Loss & High Efficiency", "Step-Up Voltage Regulation"],
    isReal: true,
  },
  {
    id: "project-utility-3",
    title: "Industrial Captive Solar Power Plant",
    category: "Industrial Solar System",
    categoryKey: "industrial",
    capacity: "Large-Scale Industrial Facility",
    location: "Dewas / Pithampur Industrial Belt",
    description: "Turnkey industrial solar facility supplying clean, green energy to continuous production lines, significantly reducing grid tariff dependency.",
    image: realUtilityPlant,
    highlights: ["Turnkey EPC & SCADA Telemetry", "Zero Downtime Execution", "Accelerated Depreciation Benefit"],
    isReal: true,
  },
  {
    id: "project-commercial-1",
    title: "Commercial & Institutional Solar Facility",
    category: "Commercial Solar",
    categoryKey: "commercial",
    capacity: "Rooftop & Ground Hybrid",
    location: "Indore Commercial Hub",
    description: "A tailored commercial solar system delivering peak daytime electricity offset for commercial and institutional establishments.",
    image: project1Img,
    highlights: ["Net-Metering Synchronized", "High-Efficiency Inverters", "App-Based Generation Tracking"],
    isReal: true,
  },
  {
    id: "project-transformer-2",
    title: "Custom Power Transformer Assembly & Testing",
    category: "Transformer Manufacturing",
    categoryKey: "transformers",
    capacity: "Inverter Duty / Step-Down",
    location: "Proton Transformer Works",
    description: "Heavy-duty transformer manufacturing, core winding, and dielectric oil testing ensuring rugged longevity under solar cycling conditions.",
    image: transformerUnit1,
    highlights: ["Inverter Duty Duty Cycle Tested", "Step-Up & Step-Down Capability", "Nationwide Repair & Service Support"],
    isReal: true,
  },
];

export const EPC_SERVICES_BREAKDOWN = [
  {
    title: "Approvals & Liaisoning",
    desc: "Seamless regulatory navigation from inception to synchronization.",
    image: approvalImg,
    points: [
      "Project registration at MNRE (Ministry of New and Renewable Energy) nodal agency",
      "LTOA (Long Term Open Access Agreement) related documentation & approvals",
      "Plant commissioning certification from state authorities",
      "Power Purchase Agreement (PPA) drafting & finalization with government/private entities",
      "Land categorization, revenue clearance & NOC acquisition",
      "Renewable Energy Certificate (REC) SLDC registration & accreditation",
    ],
  },
  {
    title: "Plant Design & Engineering",
    desc: "Physics-driven engineering tailored to topography, soil & solar radiance.",
    image: engineeringImg,
    points: [
      "Comprehensive evaluation of soil bearing capacity, local wind speeds, and radiance maps",
      "Topographical survey, 3D shadow profiling, and coordinate marking",
      "Stringent selection of Tier-1 PV modules based on efficiency & degradation curves",
      "Mounting structure alignment engineered to generate maximum generation output",
      "Minimal environmental disturbance and ecological preservation during construction",
    ],
  },
  {
    title: "Construction & Procurement Management",
    desc: "Agile global supply chain with Tier-1 certified equipment.",
    image: realSolarRows,
    points: [
      "Robust supply chain with Tier-1 global vendors for timely equipment delivery",
      "Strict inventory control, testing, and batch inspection standards",
      "Precision structural mounting alignment for optimal tilt and azimuth",
      "High-voltage electrical switchyard, cabling, and transformer integration",
      "Integrated scheduling and synchronized final commissioning",
    ],
  },
  {
    title: "Post-Commissioning Management (O&M)",
    desc: "Proactive remote SCADA telemetry and preventive field maintenance.",
    image: realUtilityPlant,
    points: [
      "Regular scheduled cleaning & dust removal from panels and inverter heat sinks",
      "Routine site inspections, thermography scans & prompt replacement of faulty parts",
      "Remote Monitoring with plant-level SCADA implementation",
      "Real-time generation telemetry accessible anywhere, anytime",
      "Comparative analysis of actual vs designed output with predictive certainty",
    ],
  },
];

export const TRANSFORMER_SERVICES = [
  {
    title: "Inverter Duty Solar Transformer Manufacturing",
    desc: "Specially engineered to handle non-sinusoidal voltage waveforms, high harmonics, and fluctuating solar generation cycles with maximum thermal resilience.",
    specs: ["Built for high-efficiency solar power generation plants", "Multi-winding configurations for central inverters", "Robust cooling systems and vacuum pressure impregnated insulation"],
    image: transformerUnit1,
  },
  {
    title: "Step-Up Transformer Repair & Services",
    desc: "Boost low-voltage solar inverter generation to grid-compatible high-tension (HT) levels (11kV, 33kV, 66kV) with minimal transformation loss.",
    specs: ["Precision coil rewinding & core inspection", "Oil filtration, breakdown voltage (BDV) enhancement & degassing", "Bushing replacement, gasket renewals & pressure testing"],
    image: transformerUnit2,
  },
  {
    title: "Step-Down Transformer Repair & Services",
    desc: "Lower incoming grid transmission voltages safely to industrial operating voltages, minimizing loss and ensuring uninterrupted machine operation.",
    specs: ["Fast turnaround repair services to prevent industrial factory downtime", "Comprehensive dielectric oil testing & insulation resistance checks", "On-site diagnostic testing and scheduled preventive maintenance"],
    image: transformerUnit3,
  },
  {
    title: "Customized Transformer Solutions",
    desc: "Engineered to order for unique plant footprints, harsh outdoor environmental conditions, industrial chemical atmospheres, and custom impedance requirements.",
    specs: ["Tailored KVA / MVA ratings to match exact customer specs", "Nationwide service support and rapid technician dispatch", "Certified compliance with IS, IEC, and global standards"],
    image: realTransformerSubstation,
  },
];

export const FAQS = {
  general: [
    {
      q: "How much solar capacity has Proton Power Infra installed?",
      a: "Proton Power Infra has successfully commissioned over 125+ MW of solar capacity across India since 2012, serving residential properties, commercial establishments, large-scale industrial complexes, and government/institutional solar parks.",
    },
    {
      q: "Does Proton Power Infra manufacture power transformers?",
      a: "Yes. Proton Power Infra is a leading manufacturer of Inverter Duty Solar Transformers and provides specialized step-up and step-down transformer repair, rewinding, oil filtration, and maintenance services across India.",
    },
    {
      q: "Where are your corporate and regional offices located?",
      a: "Our corporate headquarters is in Indore (Madhya Pradesh) at Scheme 78, Vijay Nagar. We also operate regional offices and operational hubs in Delhi, Bhopal, and Dewas.",
    },
    {
      q: "What EPC services do you provide for large-scale solar projects?",
      a: "We provide complete turnkey EPC services including MNRE nodal registrations, LTOA open access liaisoning, PPA agreements, 3D irradiance modeling, civil & electrical installation, in-house transformer integration, and lifelong SCADA remote monitoring.",
    },
  ],
  residential: [
    {
      q: "Why should I switch to residential solar with Proton Power Infra?",
      a: "Residential solar cuts your electricity bills by up to 90%, protects your household against rising utility tariffs, increases your property's market value, and lowers your carbon footprint. Furthermore, our Indore team handles all net-metering and government subsidy applications seamlessly.",
    },
    {
      q: "How does the residential solar installation process work?",
      a: "Our process is simple and hassle-free: 1) Site Assessment to evaluate your energy bills and roof capacity; 2) Customized 3D Design tailored to your home; 3) Professional Installation by certified technicians; and 4) Net-meter activation so you start generating power immediately.",
    },
  ],
  commercial: [
    {
      q: "What are the advantages of Ground-Mounted solar for businesses?",
      a: "Ground-mounted solar arrays are ideal for commercial and industrial facilities with available land. They offer optimal panel tilt angles for maximum solar harvesting, infinite scalability, extreme structural durability, and easy maintenance without roof weight constraints.",
    },
    {
      q: "What tax benefits and incentives exist for commercial solar in India?",
      a: "Under Section 32 of the Indian Income Tax Act, commercial businesses can claim up to 40% Accelerated Depreciation on their solar power asset in the first year alone, yielding dramatic tax savings and rapid capital payback.",
    },
  ],
  industrial: [
    {
      q: "Which industrial sectors does Proton Power Infra cater to?",
      a: "We cater to high-energy manufacturing units, textile mills, cold storage and logistics warehouses, agricultural and food processing plants, and chemical/pharmaceutical manufacturing plants requiring continuous, cost-effective power.",
    },
    {
      q: "How does remote SCADA monitoring benefit industrial solar plants?",
      a: "Our SCADA implementation gives you real-time access to energy generation data from anywhere, compares actual output against engineering simulations, predicts maintenance requirements, and instantly detects on-field faults.",
    },
  ],
};
