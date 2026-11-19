import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Aceternity UI Timeline Component (Customized for Proton Power Infra)
 * Converted to pure React JSX with Motion (motion/react).
 * Preserves the vertical timeline, sticky year headers, and scroll-driven progress line.
 */
export function Timeline({ data, introduction }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Dynamic height measurement with ResizeObserver to respond to viewport changes
  useEffect(() => {
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    resizeObserver.observe(ref.current);
    window.addEventListener("resize", updateHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-[#F7F8F4] text-[#252A27] relative selection:bg-[#E8A83E]/30"
    >
      {/* Introduction Section */}
      {introduction && (
        <div className="max-w-7xl mx-auto pt-10 sm:pt-14 md:pt-16 pb-4 sm:pb-6 px-4 sm:px-6 md:px-8 lg:px-10">
          {introduction}
        </div>
      )}

      {/* Timeline Stream */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-14 sm:pb-20 px-4 sm:px-6 md:px-8 lg:px-10">
        {data.map((item, index) => (
          <div
            key={item.year || index}
            className="flex justify-start pt-8 sm:pt-12 md:pt-16 lg:pt-20 md:gap-8 lg:gap-12"
          >
            {/* Desktop Left Column: Sticky Marker & Year */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-28 md:top-36 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Circular Milestone Dot centered at the vertical line */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-[#F7F8F4] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#E9F0E9] border border-[#123C32]/40 flex items-center justify-center shadow-xs">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#123C32]" />
                </div>
              </div>

              {/* Prominent Desktop Year Typography */}
              <div className="hidden md:block md:pl-20">
                <span className="text-3xl lg:text-4xl xl:text-5xl font-black font-tech text-[#123C32] tracking-tight">
                  {item.title}
                </span>
                {item.era && (
                  <div className="text-[11px] font-mono text-[#525D57] uppercase tracking-wider mt-1">
                    {item.era}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Mobile Year + Milestone Narrative & Highlights */}
            <div className="relative pl-14 sm:pl-16 pr-2 sm:pr-4 md:pl-4 w-full">
              {/* Mobile Year Display */}
              <div className="md:hidden block mb-2 text-left">
                <span className="text-2xl sm:text-3xl font-black font-tech text-[#123C32] tracking-tight">
                  {item.title}
                </span>
                {item.era && (
                  <span className="ml-2.5 text-[10px] font-mono text-[#525D57] uppercase tracking-wider">
                    • {item.era}
                  </span>
                )}
              </div>

              {/* Milestone Content */}
              {item.content}
            </div>
          </div>
        ))}

        {/* Continuous Vertical Timeline Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 md:left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-[#123C32]/25 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] pointer-events-none"
        >
          {/* Motion Scroll Progress Fill */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b from-[#123C32] via-[#E8A83E] to-[#123C32] rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Timeline;
