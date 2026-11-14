import { useState, useEffect } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, Send, RefreshCw } from "lucide-react";
import { COMPANY_DETAILS } from "../data/companyData";

export default function EnquiryForm({ defaultCustomerType = "residential", defaultCapacity = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    customerType: defaultCustomerType,
    projectLocation: "",
    propertyType: "",
    monthlyConsumption: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (defaultCustomerType) {
      setFormData((prev) => ({ ...prev, customerType: defaultCustomerType }));
    }
  }, [defaultCustomerType]);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobileNumber.trim().replace(/\s+/g, ""))) {
      newErrors.mobileNumber = "Please enter a valid 10-digit Indian mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.projectLocation.trim()) {
      newErrors.projectLocation = "Project location / city is required";
    }

    if (!formData.customerType) {
      newErrors.customerType = "Please select a customer type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate realistic asynchronous submission
    setTimeout(() => {
      const generatedId = "PPI-" + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      customerType: defaultCustomerType,
      projectLocation: "",
      propertyType: "",
      monthlyConsumption: "",
      message: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-[#123C32]/20 shadow-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#E9F0E9] text-[#123C32] flex items-center justify-center mx-auto ring-8 ring-[#123C32]/10">
          <CheckCircle2 className="w-10 h-10 text-[#123C32]" />
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-[#123C32]/10 text-[#123C32] text-xs font-bold uppercase tracking-wider mb-2">
            Enquiry Received Successfully
          </span>
          <h3 className="text-2xl font-bold text-[#202724]">
            Thank You, {formData.fullName}!
          </h3>
          <p className="text-sm text-[#525D57] mt-2 max-w-md mx-auto leading-relaxed">
            Your solar project inquiry has been logged in our system. A senior technical consultant from Proton Power Infra will review your site specifications and contact you within 24 business hours.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#F7F8F4] border border-[#E2E8E2] max-w-sm mx-auto text-left text-xs space-y-1.5">
          <div className="flex justify-between">
            <span className="text-[#525D57]">Reference ID:</span>
            <span className="font-bold text-[#123C32]">{referenceId}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#525D57]">Sector:</span>
            <span className="font-semibold capitalize text-[#202724]">{formData.customerType} Solar</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#525D57]">Location:</span>
            <span className="font-semibold text-[#202724]">{formData.projectLocation}</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/919770744687?text=Hello%20Proton%20Power%20Infra%2C%20I%20just%20submitted%20solar%20enquiry%20Ref%20${referenceId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold shadow hover:bg-[#20ba59] transition-colors"
          >
            <span>Notify us immediately on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#E2E8E2] text-xs font-semibold text-[#525D57] hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Submit Another Query</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#E2E8E2] shadow-xl space-y-5"
    >
      <div className="border-b border-gray-100 pb-4">
        <h3 className="text-xl font-bold text-[#202724]">
          Request a Free Solar Feasibility Study
        </h3>
        <p className="text-xs text-[#525D57] mt-1">
          Complete the form below to receive a customized techno-commercial proposal.
        </p>
      </div>

      {/* Customer Type Selector */}
      <div>
        <label className="block text-xs font-bold text-[#202724] uppercase tracking-wider mb-2">
          Customer Type <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-2.5">
          {[
            { id: "residential", label: "Residential" },
            { id: "commercial", label: "Commercial" },
            { id: "industrial", label: "Industrial" },
          ].map((type) => (
            <label
              key={type.id}
              className={`flex items-center justify-center py-2.5 px-3 rounded-lg border text-xs font-bold cursor-pointer transition-all ${
                formData.customerType === type.id
                  ? "bg-[#123C32] text-white border-[#123C32] shadow-sm"
                  : "bg-[#F7F8F4] text-[#525D57] border-[#E2E8E2] hover:border-[#123C32]/40"
              }`}
            >
              <input
                type="radio"
                name="customerType"
                value={type.id}
                checked={formData.customerType === type.id}
                onChange={handleChange}
                className="sr-only"
              />
              <span>{type.label}</span>
            </label>
          ))}
        </div>
        {errors.customerType && (
          <p className="text-red-600 text-xs mt-1">{errors.customerType}</p>
        )}
      </div>

      {/* Full Name & Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Vikram Sharma"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.fullName
                ? "border-red-400 focus:ring-red-200"
                : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
            }`}
          />
          {errors.fullName && (
            <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-xs text-gray-500 font-medium">
              +91
            </span>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="98765 43210"
              maxLength={10}
              className={`w-full pl-11 pr-3.5 py-2.5 rounded-lg border text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.mobileNumber
                  ? "border-red-400 focus:ring-red-200"
                  : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
              }`}
            />
          </div>
          {errors.mobileNumber && (
            <p className="text-red-600 text-xs mt-1">{errors.mobileNumber}</p>
          )}
        </div>
      </div>

      {/* Email & Project Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vikram@example.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.email
                ? "border-red-400 focus:ring-red-200"
                : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
            }`}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1.5">
            Project Location / City <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            placeholder="e.g. Vijay Nagar, Indore"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.projectLocation
                ? "border-red-400 focus:ring-red-200"
                : "border-[#E2E8E2] focus:ring-[#123C32]/20 focus:border-[#123C32]"
            }`}
          />
          {errors.projectLocation && (
            <p className="text-red-600 text-xs mt-1">{errors.projectLocation}</p>
          )}
        </div>
      </div>

      {/* Property Type & Monthly Consumption */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1.5">
            Property / Facility Type
          </label>
          <select
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8E2] text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
          >
            <option value="">Select facility structure...</option>
            {formData.customerType === "residential" && (
              <>
                <option value="Independent Villa">Independent Villa / Bungalow</option>
                <option value="Row House">Row House</option>
                <option value="Housing Society / Apartment">Housing Society / Apartment</option>
                <option value="Farmhouse">Farmhouse</option>
              </>
            )}
            {formData.customerType === "commercial" && (
              <>
                <option value="Office Complex">Corporate Office Complex</option>
                <option value="Hospital">Hospital / Healthcare Facility</option>
                <option value="Hotel / Resort">Hotel / Resort / Hospitality</option>
                <option value="School / College">Educational Institution / Campus</option>
                <option value="Shopping Mall / Retail">Shopping Mall / Retail Showroom</option>
              </>
            )}
            {formData.customerType === "industrial" && (
              <>
                <option value="Manufacturing Factory">Manufacturing Factory / Shed</option>
                <option value="Cold Storage">Cold Storage & Refrigeration</option>
                <option value="Textile Mill">Textile / Weaving Mill</option>
                <option value="Logistics Warehouse">Logistics & Distribution Warehouse</option>
                <option value="Chemical / Pharma Plant">Chemical & Pharmaceutical Unit</option>
              </>
            )}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#202724] mb-1.5">
            Avg Monthly Electricity Bill (Optional)
          </label>
          <input
            type="text"
            name="monthlyConsumption"
            value={formData.monthlyConsumption}
            onChange={handleChange}
            placeholder="e.g. ₹15,000 / month"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8E2] text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
          />
        </div>
      </div>

      {/* Message / Requirements */}
      <div>
        <label className="block text-xs font-semibold text-[#202724] mb-1.5">
          Project Requirements / Message (Optional)
        </label>
        <textarea
          rows={3}
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Share details like roof type (RCC/Tin shed), available shadow-free area, or specific energy goals..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E2E8E2] text-sm text-[#202724] bg-[#F7F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#123C32]/20 focus:border-[#123C32]"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg text-sm font-bold bg-[#123C32] hover:bg-[#1A4D41] text-white shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Processing Your Request...</span>
          </>
        ) : (
          <>
            <span>Submit Solar Consultation Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="text-[11px] text-[#525D57] text-center pt-1">
        🔒 Your contact information is kept strictly confidential and used solely for your engineering proposal.
      </div>
    </form>
  );
}
