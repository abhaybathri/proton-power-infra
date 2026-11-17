import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run initial calculation after DOM layout renders
    const timer = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [location.pathname]);

  // Reset scroll progress when path changes
  useEffect(() => {
    setScrollProgress(0);
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[100] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#123C32] via-[#E8A83E] to-[#123C32] shadow-[0_0_10px_rgba(232,168,62,0.7)] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
