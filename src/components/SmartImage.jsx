import { useState, useRef, useEffect } from "react";
import { ImageOff } from "lucide-react";

/**
 * SmartImage
 * Ultra-modern progressive image loader with glass shimmer placeholder,
 * smooth blur-up fade transition, and zero-flicker progressive loading.
 * Optimized with fetchPriority, native decoding, eager/lazy switches.
 */
export default function SmartImage({
  src,
  alt = "Proton Power Infra",
  className = "",
  containerClassName = "",
  loading = "lazy",
  priority = false,
  fetchPriority,
  onImageLoad,
  width,
  height,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* High-tech glass shimmer placeholder shown until image finishes loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-1 bg-gradient-to-br from-[#123C32]/15 via-[#202724]/20 to-[#123C32]/25 backdrop-blur-xs flex items-center justify-center">
          {/* Animated gradient shimmer bar */}
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/80 shadow-xs">
            <span>Loading Visual...</span>
          </div>
        </div>
      )}

      {/* Error Fallback */}
      {hasError ? (
        <div className="absolute inset-0 bg-[#202724] flex flex-col items-center justify-center text-[#525D57] p-4 text-center">
          <ImageOff className="w-8 h-8 mb-2 opacity-50 text-[#E8A83E]" />
          <span className="text-xs font-mono">Visual Rendering In Progress</span>
        </div>
      ) : (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : loading}
          fetchPriority={priority ? "high" : fetchPriority || "auto"}
          decoding={priority ? "sync" : "async"}
          onLoad={() => {
            setIsLoaded(true);
            if (onImageLoad) onImageLoad();
          }}
          onError={() => setHasError(true)}
          className={`transition-all duration-700 ease-out ${
            isLoaded
              ? "opacity-100 scale-100 blur-0"
              : "opacity-0 scale-103 blur-xs"
          } ${className}`}
          {...props}
        />
      )}
    </div>
  );
}
