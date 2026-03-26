import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
  isFullscreen?: boolean;
  disableTransition?: boolean;
  darkMode?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  showCloseButton = true,
  isFullscreen = false,
  disableTransition = false,
  darkMode = false,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC ปิด
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const transitionClass = disableTransition
    ? ""
    : "transition-all duration-300 ease-out";

  const contentClasses = isFullscreen
    ? "w-full h-full"
    : `relative w-full max-w-[70vw] rounded-3xl shadow-2xl border ${transitionClass}`;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">

      {/* overlay */}
      {!isFullscreen && (
        <div
          className={`absolute inset-0 backdrop-blur-sm ${
            darkMode ? "bg-black/40" : "bg-white/30"
          }`}
          onClick={onClose}
        />
      )}

      {/* content */}
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`${contentClasses} ${className} relative z-10 max-h-[90vh] overflow-y-auto`}
      >
        {showCloseButton && (
          <button
            onClick={onClose}
            className={`absolute right-3 top-2 z-50 flex h-10 w-10 items-center justify-center
            ${
              darkMode
                ? "text-red-400 hover:text-red-300"
                : "text-red-500 hover:text-red-600"
            }`}
          >
            ✕
          </button>
        )}

        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.body
  );
};