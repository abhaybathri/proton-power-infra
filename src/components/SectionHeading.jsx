export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light", // 'light' (dark text on light bg) or 'dark' (light text on dark bg)
  className = "",
}) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
            isDark
              ? "bg-[#E8A83E]/15 text-[#E8A83E] border border-[#E8A83E]/30"
              : "bg-[#123C32]/10 text-[#123C32] border border-[#123C32]/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A83E]"></span>
          <span>{eyebrow}</span>
        </div>
      )}

      {title && (
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
            isDark ? "text-white" : "text-[#202724]"
          }`}
        >
          {title}
        </h2>
      )}

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[#E9F0E9]/80" : "text-[#525D57]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
