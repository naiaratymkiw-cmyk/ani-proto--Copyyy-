import { Link } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
  onMenuToggle?: (isOpen: boolean) => void;
  bannerVisible?: boolean;
}

export function MobileNav({ onMenuToggle, bannerVisible = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      onMenuToggle?.(false);
    }, 300); // Match animation duration
  };

  const handleOpen = () => {
    setIsOpen(true);
    onMenuToggle?.(true);
  };

  return (
    <>
      {/* Mobile Menu Button - LEFT SIDE - Dynamically positioned based on banner */}
      <button
        onClick={isOpen ? handleClose : handleOpen}
        className={`lg:hidden fixed left-6 z-[45] bg-[#900] p-3 rounded-full shadow-lg transition-all duration-300 ${
          bannerVisible ? 'top-[68px]' : 'top-6'
        }`}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className={`lg:hidden fixed inset-0 z-40 bg-[#900] flex flex-col items-center justify-center ${isClosing ? 'animate-slideOutLeft' : 'animate-slideInLeft'}`}>
          <nav className="flex flex-col gap-8 items-center">
            <Link
              to="/"
              onClick={handleClose}
              className="font-['Inter:Medium',sans-serif] font-medium text-white text-2xl tracking-[-0.08px]"
            >
              Inicio
            </Link>
            <Link
              to="/actividades"
              onClick={handleClose}
              className="font-['Inter:Medium',sans-serif] font-medium text-white text-2xl tracking-[-0.08px]"
            >
              Actividades
            </Link>
            <Link
              to="/informacion"
              onClick={handleClose}
              className="font-['Inter:Medium',sans-serif] font-medium text-white text-2xl tracking-[-0.08px]"
            >
              Información
            </Link>
            <Link
              to="/historia"
              onClick={handleClose}
              className="font-['Inter:Medium',sans-serif] font-medium text-white text-2xl tracking-[-0.08px]"
            >
              Historia
            </Link>
            <Link
              to="/nosotros"
              onClick={handleClose}
              className="font-['Inter:Medium',sans-serif] font-medium text-white text-2xl tracking-[-0.08px]"
            >
              Nosotros
            </Link>
            <Link
              to="/contacto"
              onClick={handleClose}
              className="bg-[#00a840] px-8 py-4 rounded-full mt-4"
            >
              <span className="font-['Inter:Bold',sans-serif] font-bold text-white text-xl tracking-[-0.08px]">
                Contacto
              </span>
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}