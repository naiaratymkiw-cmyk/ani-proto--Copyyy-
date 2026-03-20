import { Link } from "react-router";
import { MobileNav } from "../components/MobileNav";
import { Footer } from "../components/Footer";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Imágenes locales - Página Historia
const imgHero1 = "/images/historia/hero.png";
const imgImage = "/images/historia/timeline1.png";
const imgImage1 = "/images/historia/timeline2.png";
const imgImage2 = "/images/historia/timeline3.png";
const imgImage3 = "/images/historia/timeline4.png";
const imgImage4 = "/images/historia/timeline5.png";
const imgRestauracion2018 = "/images/historia/restauracion-general1.png";
const imgRestauracion2018b = "/images/historia/restauracion-general2.png";
const imgLegadoReal2019 = "/images/historia/legado-real.png";
const imgVideoThumbnail = "/images/historia/video-thumbnail.png";

// Roof restoration images - BEFORE (damaged ceiling) - 5 images
const imgRoofBefore1 = "/images/historia/techo-antes1.png";
const imgRoofBefore2 = "/images/historia/techo-antes2.png";
const imgRoofBefore3 = "/images/historia/techo-antes3.png";
const imgRoofBefore4 = "/images/historia/techo-antes4.png";
const imgRoofBefore5 = "/images/historia/techo-antes5.png";

// Roof restoration images - AFTER (restored metal roof) - 5 images
const imgRoofAfter1 = "/images/historia/techo-despues1.png";
const imgRoofAfter2 = "/images/historia/techo-despues2.png";
const imgRoofAfter3 = "/images/historia/techo-despues3.png";
const imgRoofAfter4 = "/images/historia/techo-despues4.png";
const imgRoofAfter5 = "/images/historia/techo-despues5.png";

// Facade restoration images - BEFORE (during restoration) - 3 images
const imgFacadeBefore1 = "/images/historia/fachada-antes1.png";
const imgFacadeBefore2 = "/images/historia/fachada-antes2.png";
const imgFacadeBefore3 = "/images/historia/fachada-antes3.png";

// Facade restoration images - AFTER (restored facade) - 3 images
const imgFacadeAfter1 = "/images/historia/fachada-despues1.png";
const imgFacadeAfter2 = "/images/historia/fachada-despues2.png";
const imgFacadeAfter3 = "/images/historia/fachada-despues3.png";

// Artwork restoration images - BEFORE (damaged)
const imgArtworkBefore1 = "/images/historia/cuadro-antes1.png";
const imgArtworkBefore2 = "/images/historia/cuadro-antes2.png";
const imgArtworkBefore3 = "/images/historia/cuadro-antes3.png";

// Artwork restoration images - AFTER (restored)
const imgArtworkAfter1 = "/images/historia/cuadro-despues1.png";
const imgArtworkAfter2 = "/images/historia/cuadro-despues2.png";
const imgArtworkAfter3 = "/images/historia/cuadro-despues3.png";

// Doors restoration images - BEFORE (old wooden doors)
const imgDoorsBefore1 = "/images/historia/puertas-antes1.png";
const imgDoorsBefore2 = "/images/historia/puertas-antes2.png";

// Doors restoration images - AFTER (modern glass doors with logo)
const imgDoorsAfter1 = "/images/historia/puertas-despues1.png";
const imgDoorsAfter2 = "/images/historia/puertas-despues2.png";

// Newspaper/Magazine images for 2018 restoration coverage (PDF pages)
const imgNewspaper1 = "/images/historia/revista1.png";
const imgNewspaper2 = "/images/historia/revista2.png";
const imgNewspaper3 = "/images/historia/revista3.png";
const imgNewspaper4 = "/images/historia/revista4.png";
const imgNewspaper5 = "/images/historia/revista5.png";
const imgNewspaper7 = "/images/historia/revista6.png";
const imgNewspaper8 = "/images/historia/revista7.png";
const imgNewspaper9 = "/images/historia/revista8.png";
const imgNewspaper10 = "/images/historia/revista9.png";

// Restoration work photos from PDF
const imgRestWork1 = "/images/historia/trabajo1.png";
const imgRestWork2 = "/images/historia/trabajo2.png";
const imgRestWork3 = "/images/historia/trabajo3.png";
const imgRestWork4 = "/images/historia/trabajo4.png";
const imgRestWork5 = "/images/historia/trabajo5.png";
const imgRestWork6 = "/images/historia/trabajo6.png";
const imgRestWork7 = "/images/historia/trabajo7.png";
const imgRestWork8 = "/images/historia/trabajo8.png";
const imgRestWork9 = "/images/historia/trabajo9.png";
const imgRestWork11 = "/images/historia/trabajo10.png";
const imgRestWork12 = "/images/historia/trabajo11.png";

// Logo image for "El Significado del Logo" section
const imgLogo = "/images/historia/logo-italia-turrita.png";

function ContactoButton() {
  return (
    <Link to="/contacto" className="bg-[#00a840] h-[39px] overflow-clip relative rounded-[30px] shrink-0 w-[117px]">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[8px_13.5px_8px_12.5px] justify-center leading-[0] not-italic text-[16px] text-center text-white tracking-[-0.08px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Contacto</p>
      </div>
    </Link>
  );
}

// Carousel Component with Navigation Arrows (reusable for newspapers and restoration photos)
function ImageCarousel({ images, onImageClick }: { images: string[], onImageClick: (index: number, images: string[]) => void }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      {/* Main image display */}
      <div className="relative h-[400px] lg:h-[600px] overflow-clip rounded-xl cursor-pointer" onClick={() => onImageClick(currentIndex, images)}>
        <img 
          src={images[currentIndex]} 
          alt={`Image ${currentIndex + 1}`} 
          className="w-full h-full object-contain bg-white/5"
        />
        <div className="absolute inset-0 hover:bg-white/10 transition-colors flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity bg-black/50 text-white px-4 py-2 rounded-lg font-['Inter:Medium',sans-serif]">
            Click para ampliar
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 lg:p-4 rounded-full transition-all"
        aria-label="Previous newspaper"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 lg:p-4 rounded-full transition-all"
        aria-label="Next newspaper"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="text-center mt-4 font-['Inter:Medium',sans-serif] text-white/70 text-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

// Lightbox Modal for Zooming
function LightboxModal({ isOpen, onClose, allImages, currentIndex, onNavigate }: {
  isOpen: boolean;
  onClose: () => void;
  allImages: string[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate('prev');
      if (e.key === 'ArrowRight') onNavigate('next');
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4" onClick={onClose}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all z-10"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate('prev'); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all z-10"
        aria-label="Previous image"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNavigate('next'); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-4 rounded-full transition-all z-10"
        aria-label="Next image"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Image with zoom */}
      <div className="max-w-[95vw] max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <img
          src={allImages[currentIndex]}
          alt="Image detail"
          className="w-auto h-auto max-w-full object-contain"
          style={{ maxHeight: '90vh' }}
        />
      </div>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full font-['Inter:Medium',sans-serif] text-sm">
        {currentIndex + 1} / {allImages.length}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <nav className="backdrop-blur-[35px] content-stretch flex gap-[40px] items-center justify-center px-[40px] py-[16px] relative rounded-[40px] shrink-0" data-name="Nav">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[40px]" />
      <Link to="/" className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Inicio</p>
      </Link>
      <Link to="/actividades" className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Actividades</p>
      </Link>
      <Link to="/informacion" className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Información</p>
      </Link>
      <Link to="/historia" className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Historia</p>
      </Link>
      <Link to="/nosotros" className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Nosotros</p>
      </Link>
      <ContactoButton />
    </nav>
  );
}

function DesktopHeader() {
  return (
    <header className="bg-[#900] content-stretch hidden lg:flex items-center justify-center py-[24px] relative shrink-0 w-full" data-name="Header 1">
      <Nav />
    </header>
  );
}

export default function Historia() {
  // Historia page component
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("historia");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  
  // All newspaper/magazine images array
  const newspapers = [
    imgNewspaper1, imgNewspaper2, imgNewspaper3, imgNewspaper4, imgNewspaper5,
    imgNewspaper7, imgNewspaper8, imgNewspaper9, imgNewspaper10
  ];
  
  // Restoration work photos array
  const restorationPhotos = [
    imgRestWork1, imgRestWork2, imgRestWork3, imgRestWork4, imgRestWork5, imgRestWork6,
    imgRestWork7, imgRestWork8, imgRestWork9, imgRestWork11, imgRestWork12
  ];
  
  // Roof restoration images arrays
  const roofBeforeImages = [imgRoofBefore1, imgRoofBefore2, imgRoofBefore3, imgRoofBefore4, imgRoofBefore5];
  const roofAfterImages = [imgRoofAfter1, imgRoofAfter2, imgRoofAfter3, imgRoofAfter4, imgRoofAfter5];
  
  // Facade restoration images arrays
  const facadeBeforeImages = [imgFacadeBefore1, imgFacadeBefore2, imgFacadeBefore3];
  const facadeAfterImages = [imgFacadeAfter1, imgFacadeAfter2, imgFacadeAfter3];
  
  // Artwork restoration images arrays
  const artworkBeforeImages = [imgArtworkBefore1, imgArtworkBefore2, imgArtworkBefore3];
  const artworkAfterImages = [imgArtworkAfter1, imgArtworkAfter2, imgArtworkAfter3];
  
  // Doors restoration images
  const doorsImages = [imgDoorsBefore1, imgDoorsBefore2, imgDoorsAfter1, imgDoorsAfter2];
  
  // Timeline historical images
  const timelineImages = [imgImage, imgImage1, imgImage2, imgImage3, imgImage4, imgRestauracion2018, imgRestauracion2018b, imgLegadoReal2019];
  
  const openLightbox = (index: number, images: string[]) => {
    setLightboxIndex(index);
    setLightboxImages(images);
    setLightboxOpen(true);
  };
  
  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
    } else {
      setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
    }
  };

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const historiaSection = document.getElementById("historia-section");
      const restauracionSection = document.getElementById("restauracion-section");
      
      if (historiaSection && restauracionSection) {
        const scrollPosition = window.scrollY + 200; // Offset for better detection
        const historiaTop = historiaSection.offsetTop;
        const restauracionTop = restauracionSection.offsetTop;
        
        if (scrollPosition >= restauracionTop) {
          setActiveSection("restauracion");
        } else if (scrollPosition >= historiaTop) {
          setActiveSection("historia");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Offset for sticky menu
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const restorationWorks = [
    {
      title: "Limpieza e Intervención Inicial",
      items: [
        "Lavado hidropunzado: Limpieza profunda de toda la superficie para eliminar hollín y agentes contaminantes.",
        "Retiro de elementos espurios: Eliminación de cables, clavos, grampas y cartelería obsoleta que dañaban la estética original.",
        "Desalojo de vegetaci��n: Limpieza de plantas invasoras en grietas y cornisas."
      ]
    },
    {
      title: "Restauración de Muros y Molduras",
      items: [
        "Consolidación de revoques: Reparación de partes flojas y eliminación de ampollas o desprendimientos.",
        "Reconstrucción de ornamentos: Recuperación de molduras, pilastras y detalles decorativos faltantes mediante el uso de morteros que respetan la mezcla original.",
        "Tratamiento de grietas: Sellado de fisuras estructurales y superficiales para evitar futuras filtraciones."
      ]
    },
    {
      title: "Balcones y Carpinterías",
      items: [
        "Restauración de balcones: Reparación de las bases (ménsulas) y tratamiento impermeabilizante.",
        "Pintura y protección de herrería: Decapado (quitar pintura vieja) y aplicación de esmalte protector en barandas de hierro y rejas.",
        "Puesta en valor de aberturas: Restauración de las ventanas y puertas de madera de los balcones."
      ]
    },
    {
      title: "Acabados y Terminación",
      items: [
        "Pintura integral: Aplicación de un esquema de color institucional que resalta los relieves y la arquitectura del edificio.",
        "Recuperación de carpintería metálica: Tratamiento de las cortinas metálicas de los locales de planta baja."
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen w-full">
      {/* Desktop Navigation Header */}
      <DesktopHeader />
      
      {/* Mobile Navigation */}
      <MobileNav onMenuToggle={setIsMobileMenuOpen} />
      
      {/* Hero Section */}
      <section className="flex min-h-[250px] lg:h-[440px] items-center justify-center overflow-clip relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-33 overflow-hidden">
            <img alt="" className="absolute h-full lg:h-[245.45%] left-0 lg:left-[-1.46%] max-w-none top-0 lg:top-[-51.73%] w-full lg:w-[102.27%] object-cover" src={imgHero1} />
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.42)] inset-0" />
        </div>
        
        <div className="relative w-full px-4">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="flex flex-col items-center justify-center py-10 lg:pr-10 relative w-full">
              <div className="flex flex-col items-center justify-center shrink-0 max-w-full">
                <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#900] justify-center leading-[0] not-italic relative shrink-0 text-4xl lg:text-[72px] text-center to-[#404040] tracking-[-1.44px] max-w-full lg:h-[149px]" style={{ WebkitTextFillColor: "transparent" }}>
                  <h2 className="block leading-[1.1] whitespace-pre-wrap">Historia</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="bg-white py-8 lg:py-12 w-full">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Title */}
          <h3 className="font-['Inter:Bold',sans-serif] font-bold text-2xl lg:text-[40px] text-center text-[#900] tracking-[-0.8px] leading-[1.2] mb-6 lg:mb-8">Diálogo entre el Presidente y la Vicepresidente de la Institución</h3>
          
          {/* Video Container */}
          <div className="relative w-full aspect-video">
            {!isVideoPlaying ? (
              /* Custom Thumbnail with Play Button */
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="absolute inset-0 w-full h-full rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <img
                  src={imgVideoThumbnail}
                  alt="Charla con el Presidente"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <svg
                      className="w-10 h-10 lg:w-12 lg:h-12 text-[#900] ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            ) : (
              /* Google Drive video */
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl shadow-lg"
                src="https://drive.google.com/file/d/1kDjvumKDK5q9eFGYPR_3cROwHCraZ8ko/preview"
                title="Charla con el Presidente de la Asociación"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </section>

      {/* Sticky Anchor Menu */}
      <div className={`sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 pt-20 pb-4 lg:py-4 px-4 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center justify-center gap-3 lg:gap-4 max-w-[600px] mx-auto">
          <button
            onClick={() => scrollToSection("historia-section")}
            className={`
              px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-['Inter:SemiBold',sans-serif] font-semibold text-sm lg:text-base
              transition-all duration-300 whitespace-nowrap
              ${activeSection === "historia"
                ? "bg-[#900] text-white shadow-lg shadow-[#900]/30"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            Historia
          </button>
          <button
            onClick={() => scrollToSection("restauracion-section")}
            className={`
              px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-['Inter:SemiBold',sans-serif] font-semibold text-sm lg:text-base
              transition-all duration-300 whitespace-nowrap
              ${activeSection === "restauracion"
                ? "bg-[#900] text-white shadow-lg shadow-[#900]/30"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            Restauración
          </button>
        </div>
      </div>

      {/* Timeline Section */}
      <section className="py-4 lg:py-[45px] px-4 lg:px-12 relative w-full" id="historia-section">
        <div className="flex flex-col gap-8 lg:gap-[60px] items-center relative w-full max-w-[1680px] mx-auto">
          
          {/* Entry 1: 1861 - Fundación */}
          <div className="flex flex-col min-[1351px]:flex-row min-[1351px]:gap-[60px] items-center relative w-full max-w-full min-[1351px]:max-w-[1453px]">
            {/* Year + Image - ORDER 1 on mobile, shows first */}
            <div className="flex flex-col items-center w-full min-[1351px]:w-auto order-1 min-[1351px]:order-1 min-[1351px]:flex-shrink-0">
              <div className="flex items-center justify-center py-4 lg:py-[26px]">
                <h2 className="bg-clip-text bg-gradient-to-r block font-['Inter:Bold',sans-serif] font-bold from-[#900] leading-[1.1] not-italic text-6xl lg:text-[128px] to-[#404040] tracking-[-2.56px]" style={{ WebkitTextFillColor: "transparent" }}>
                  1861
                </h2>
              </div>
              <div 
                className="h-[300px] lg:h-[419px] relative w-full min-[1351px]:w-[568px] overflow-clip rounded-xl cursor-pointer hover:opacity-90 transition-opacity" 
                onClick={() => openLightbox(0, timelineImages)}
              >
                <img alt="Fundación 1861" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage} />
              </div>
            </div>
            
            {/* Content Box - RED gradient faces LEFT (toward image) */}
            <div className="relative w-full min-[1351px]:flex-1 min-[1351px]:max-w-[961px] order-2 min-[1351px]:order-2 mt-4 min-[1351px]:mt-0">
              <div className="relative p-[2px] rounded-2xl" style={{
                background: 'linear-gradient(90deg, #990000 0%, #ffffff 100%)'
              }}>
                <div className="bg-white flex flex-col gap-6 lg:gap-[52px] min-h-[400px] lg:h-[618px] items-start justify-center p-6 lg:pb-px lg:pt-[25px] lg:px-11 rounded-2xl">
                  <div className="flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-2xl lg:text-[48px] text-black tracking-[-0.96px] w-full">
                      <h4 className="block leading-[1.2]">Fundación</h4>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] not-italic relative shrink-0 text-base lg:text-2xl text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
                    <p className="whitespace-pre-wrap pr-0 lg:pr-[76px]">El 25 de marzo se declara fundada la "Società Nazionale Italiana", en un momento histórico que coincide con la proclamación de Víctor Manuel II como rey de Italia y la unión de los italianos bajo una sola bandera. Inspirados por la lucha de su tierra natal, 233 inmigrantes deciden fundar esta entidad en tierras del Plata para dar testimonio de lealtad a sus raíces, estableciendo como pilares el socorro mutuo, la asistencia y la difusión de la cultura italiana.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entry 2: 1862 - Primera Contribución */}
          <div className="flex flex-col min-[1351px]:flex-row min-[1351px]:gap-[60px] items-center relative w-full max-w-full min-[1351px]:max-w-[1384px]">
            {/* Year + Image - ORDER 1 on mobile */}
            <div className="flex flex-col items-center w-full min-[1351px]:w-auto order-1 min-[1351px]:order-2 min-[1351px]:flex-shrink-0">
              <div className="flex items-center justify-center py-4 lg:py-[26px]">
                <h2 className="bg-clip-text bg-gradient-to-r block font-['Inter:Bold',sans-serif] font-bold from-[#900] leading-[1.1] not-italic text-6xl lg:text-[128px] to-[#404040] tracking-[-2.56px]" style={{ WebkitTextFillColor: "transparent" }}>
                  1862
                </h2>
              </div>
              <div 
                className="h-[300px] lg:h-[419px] relative w-full min-[1351px]:w-[568px] overflow-clip rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(1, timelineImages)}
              >
                <img alt="Historia 1894" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage1} />
              </div>
            </div>
            
            {/* Content Box - RED gradient faces RIGHT (toward image) */}
            <div className="relative w-full min-[1351px]:flex-1 min-[1351px]:max-w-[825px] order-2 min-[1351px]:order-1 mt-4 min-[1351px]:mt-0">
              <div className="relative p-[2px] rounded-2xl" style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #990000 100%)'
              }}>
                <div className="bg-white flex flex-col gap-6 lg:gap-12 min-h-[400px] lg:h-[618px] items-start justify-center p-6 lg:pb-px lg:pl-[83px] lg:pr-11 lg:pt-[25px] rounded-2xl">
                  <div className="flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-2xl lg:text-[48px] text-black tracking-[-0.96px] max-w-full">
                      <h4 className="block leading-[1.2] whitespace-pre-wrap">Primera Contribución</h4>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] not-italic relative shrink-0 text-base lg:text-2xl text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
                    <p className="whitespace-pre-wrap">Este año marca el inicio de las grandes obras de bien público de la institución. Gracias a las cuotas de sus asociados y subsidios de la corona italiana, la Sociedad logra concretar su primera gran contribución para la construcción del Hospital Italiano. Debido a este apoyo fundamental, el 2 de agosto se le asigna un lugar de honor en los registros oficiales y, meses más tarde, la entidad pasa a integrar formalmente la comisión edilicia encargada del hospital.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entry 3: 1868 - Primera escuela */}
          <div className="flex flex-col min-[1351px]:flex-row min-[1351px]:gap-[60px] items-center relative w-full max-w-full min-[1351px]:max-w-[1453px]">
            {/* Year + Image - ORDER 1 on mobile */}
            <div className="flex flex-col items-center w-full min-[1351px]:w-auto order-1 min-[1351px]:order-1 min-[1351px]:flex-shrink-0">
              <div className="flex items-center justify-center py-4 lg:py-[26px]">
                <h2 className="bg-clip-text bg-gradient-to-r block font-['Inter:Bold',sans-serif] font-bold from-[#900] leading-[1.1] not-italic text-6xl lg:text-[128px] to-[#404040] tracking-[-2.56px]" style={{ WebkitTextFillColor: "transparent" }}>
                  1868
                </h2>
              </div>
              <div className="h-[300px] lg:h-[419px] relative w-full min-[1351px]:w-[568px] overflow-clip">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero1} />
              </div>
            </div>
            
            {/* Content Box - RED gradient faces LEFT (toward image) */}
            <div className="relative w-full min-[1351px]:flex-1 min-[1351px]:max-w-[961px] order-2 min-[1351px]:order-2 mt-4 min-[1351px]:mt-0">
              <div className="relative p-[2px] rounded-2xl" style={{
                background: 'linear-gradient(90deg, #990000 0%, #ffffff 100%)'
              }}>
                <div className="bg-white flex flex-col gap-6 lg:gap-[52px] min-h-[400px] lg:h-[618px] items-start justify-center p-6 lg:pb-px lg:pt-[25px] lg:px-11 rounded-2xl">
                  <div className="flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-2xl lg:text-[48px] text-black tracking-[-0.96px] max-w-full">
                      <h4 className="block leading-[1.2] whitespace-pre-wrap">Primera escuela de Italiano en Latinoamérica</h4>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] not-italic relative shrink-0 text-base lg:text-2xl text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
                    <p className="whitespace-pre-wrap">El 26 de diciembre se produce un hito para la educación en el continente con la fundación de la primera escuela elemental de idioma italiano en Latinoamérica, ubicada en la calle La Piedad 418. Con apenas 33 alumnos iniciales —entre los que figurarían futuras personalidades como Pío Collivadino e Iris Marga—, la institución inicia un ambicioso proyecto educativo gratuito que luego se extendería a barrios como La Boca, incluyendo formación técnica, artística y musical.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entry 4: 1870 - Compromiso Social */}
          <div className="flex flex-col min-[1351px]:flex-row min-[1351px]:gap-[60px] items-center relative w-full max-w-full min-[1351px]:max-w-[1453px]">
            {/* Year + Image - ORDER 1 on mobile */}
            <div className="flex flex-col items-center w-full min-[1351px]:w-auto order-1 min-[1351px]:order-2 min-[1351px]:flex-shrink-0">
              <div className="flex items-center justify-center py-4 lg:py-[26px]">
                <h2 className="bg-clip-text bg-gradient-to-r block font-['Inter:Bold',sans-serif] font-bold from-[#900] leading-[1.1] not-italic text-6xl lg:text-[128px] to-[#404040] tracking-[-2.56px]" style={{ WebkitTextFillColor: "transparent" }}>
                  1870
                </h2>
              </div>
              <div 
                className="h-[300px] lg:h-[419px] relative w-full min-[1351px]:w-[568px] overflow-clip rounded-2xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(2, timelineImages)}
              >
                <img alt="Historia 1900" className="absolute inset-0 max-w-none object-cover size-full rounded-2xl" src={imgImage2} />
              </div>
            </div>
            
            {/* Content Box - RED gradient faces RIGHT (toward image) */}
            <div className="relative w-full min-[1351px]:flex-1 min-[1351px]:max-w-[823px] order-2 min-[1351px]:order-1 mt-4 min-[1351px]:mt-0">
              <div className="relative p-[2px] rounded-2xl" style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #990000 100%)'
              }}>
                <div className="bg-white flex flex-col gap-6 lg:gap-12 min-h-[400px] lg:h-[618px] items-start justify-center p-6 lg:pb-px lg:pl-[83px] lg:pr-11 lg:pt-[25px] rounded-2xl">
                  <div className="flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-2xl lg:text-[48px] text-black tracking-[-0.96px] max-w-full">
                      <h4 className="block leading-[1.2] whitespace-pre-wrap">Compromiso Social</h4>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] not-italic relative shrink-0 text-base lg:text-2xl text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
                    <p className="whitespace-pre-wrap">Durante la devastadora tragedia de la fiebre amarilla en Buenos Aires, la asociación demuestra su compromiso social brindando una labor de ayuda heroica. La entidad contribuyó con la totalidad de los fondos que tenía en caja para atender a los enfermos y organizó la logística necesaria para instalar 10 puestos de socorros distribuidos estratégicamente en distintos barrios de la ciudad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entry 5: 1877 - El hogar definitivo */}
          <div className="flex flex-col min-[1351px]:flex-row min-[1351px]:gap-[60px] items-center relative w-full max-w-full min-[1351px]:max-w-[1453px]">
            {/* Year + Image - ORDER 1 on mobile */}
            <div className="flex flex-col items-center w-full min-[1351px]:w-auto order-1 min-[1351px]:order-1 min-[1351px]:flex-shrink-0">
              <div className="flex items-center justify-center py-4 lg:py-[26px]">
                <h2 className="bg-clip-text bg-gradient-to-r block font-['Inter:Bold',sans-serif] font-bold from-[#900] leading-[1.1] not-italic text-6xl lg:text-[128px] to-[#404040] tracking-[-2.56px]" style={{ WebkitTextFillColor: "transparent" }}>
                  1877
                </h2>
              </div>
              <div 
                className="h-[300px] lg:h-[419px] relative w-full min-[1351px]:w-[568px] overflow-clip rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(3, timelineImages)}
              >
                <img alt="Historia 1939" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage3} />
              </div>
            </div>
            
            {/* Content Box with NEW gradient border all around - ORDER 2 on mobile */}
            <div className="relative w-full min-[1351px]:flex-1 min-[1351px]:max-w-[961px] order-2 min-[1351px]:order-2 mt-4 min-[1351px]:mt-0">
              {/* Gradient Border Wrapper - NEW APPROACH */}
              <div className="relative p-[2px] rounded-2xl" style={{
                background: 'linear-gradient(90deg, #990000 0%, #ffffff 100%)'
              }}>
                {/* Inner white content box */}
                <div className="bg-white flex flex-col gap-6 min-h-[400px] lg:h-[618px] items-start justify-center p-6 lg:pb-[31px] lg:pt-[25px] lg:px-11 rounded-2xl">
                  <div className="flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-2xl lg:text-[48px] text-black tracking-[-0.96px] max-w-full">
                      <h4 className="block leading-[1.2] whitespace-pre-wrap">El hogar definitivo</h4>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] not-italic relative shrink-0 text-base lg:text-2xl text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
                    <p className="whitespace-pre-wrap">Siete años después de la crisis sanitaria, la asociación entra en una nueva y más pujante etapa de su existencia. Este crecimiento se materializa con la construcción y mudanza a su nueva sede social ubicada en la calle Alsina 1465. Este edificio se convirtió en el corazón de sus actividades y continúa siendo el domicilio de la institución hasta el día de hoy.</p>
                  </div>
                </div>
              </div>
              
              {/* OLD GRADIENT BORDER CODE - SAVED AS BACKUP - COMMENTED OUT
              <div className="bg-white flex flex-col gap-6 min-h-[400px] lg:h-[618px] items-start justify-center p-6 lg:pb-[31px] lg:pt-[25px] lg:px-11 relative rounded-2xl w-full">
                <div aria-hidden="true" className="min-[1351px]:hidden absolute inset-0 pointer-events-none" style={{ 
                  background: 'linear-gradient(90deg, #900 0%, #404040 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px',
                  borderRadius: '16px'
                }} />
                <div aria-hidden="true" className="hidden min-[1351px]:block absolute bottom-0 left-0 pointer-events-none top-0 w-[200px]" style={{ 
                  background: 'linear-gradient(90deg, #900 0%, #404040 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  padding: '2px 0 2px 2px',
                  borderRadius: '16px 0 0 16px'
                }} />
              </div>
              */}
            </div>
          </div>

          {/* Entry 6: 1896 - El fortalecimiento */}
          <div className="flex flex-col min-[1351px]:flex-row min-[1351px]:gap-[60px] items-center relative w-full max-w-full min-[1351px]:max-w-[1384px]">
            {/* Year + Image - ORDER 1 on mobile */}
            <div className="flex flex-col items-center w-full min-[1351px]:w-auto order-1 min-[1351px]:order-2 min-[1351px]:flex-shrink-0">
              <div className="flex items-center justify-center py-4 lg:py-[26px]">
                <h2 className="bg-clip-text bg-gradient-to-r block font-['Inter:Bold',sans-serif] font-bold from-[#900] leading-[1.1] not-italic text-6xl lg:text-[128px] to-[#404040] tracking-[-2.56px]" style={{ WebkitTextFillColor: "transparent" }}>
                  1896
                </h2>
              </div>
              <div 
                className="h-[300px] lg:h-[419px] relative w-full min-[1351px]:w-[568px] overflow-clip rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => openLightbox(4, timelineImages)}
              >
                <img alt="Historia 1953" className="absolute inset-0 max-w-none object-cover size-full" src={imgImage4} />
              </div>
            </div>
            
            {/* Content Box - RED gradient faces RIGHT (toward image) */}
            <div className="relative w-full min-[1351px]:flex-1 min-[1351px]:max-w-[808px] order-2 min-[1351px]:order-1 mt-4 min-[1351px]:mt-0">
              <div className="relative p-[2px] rounded-2xl" style={{
                background: 'linear-gradient(90deg, #ffffff 0%, #990000 100%)'
              }}>
                <div className="bg-white flex flex-col gap-6 lg:gap-12 min-h-[400px] lg:h-[618px] items-start justify-center p-6 lg:pb-px lg:pl-[83px] lg:pr-11 lg:pt-[25px] rounded-2xl">
                  <div className="flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-2xl lg:text-[48px] text-black tracking-[-0.96px] max-w-full">
                      <h4 className="block leading-[1.2] whitespace-pre-wrap">El fortalecimiento del socorro mutuo</h4>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] not-italic relative shrink-0 text-base lg:text-2xl text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
                    <p className="whitespace-pre-wrap">La entidad reorganiza aspectos clave de su funcionamiento y adopta el nombre de Associazione di Mutuo Soccorso e Cultura Nazionale Italiana. Bajo esta nueva denominación, la asociación volcó gran parte de su presupuesto al área asistencial, reforzando sus servicios médicos y de farmacia hasta contar con un equipo de 17 profesionales y sistemas de emergencia e internación contratados especialmente.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Entry 7: El Significado del Logo - Italia Turrita (LAST ENTRY, FLIPPED) */}
          <div className="flex flex-col min-[1351px]:flex-row min-[1351px]:gap-[60px] items-center relative w-full max-w-full min-[1351px]:max-w-[1453px]">
            {/* Logo Image - ORDER 1 on mobile, LEFT on desktop */}
            <div className="flex flex-col items-center w-full min-[1351px]:w-auto order-1 min-[1351px]:order-1 min-[1351px]:flex-shrink-0">
              <div className="h-[300px] lg:h-[419px] relative w-full min-[1351px]:w-[568px] overflow-clip rounded-xl bg-white flex items-center justify-center p-8">
                <img alt="Logo Italia Turrita" className="max-w-full max-h-full object-contain" src={imgLogo} />
              </div>
            </div>
            
            {/* Content Box - RED gradient faces LEFT (toward logo) */}
            <div className="relative w-full min-[1351px]:flex-1 min-[1351px]:max-w-[961px] order-2 min-[1351px]:order-2 mt-4 min-[1351px]:mt-0">
              <div className="relative p-[2px] rounded-2xl" style={{
                background: 'linear-gradient(90deg, #990000 0%, #ffffff 100%)'
              }}>
                <div className="bg-white flex flex-col gap-6 lg:gap-[52px] min-h-[400px] lg:min-h-[618px] items-start justify-center p-6 lg:pb-px lg:pt-[25px] lg:px-11 rounded-2xl">
                  <div className="flex flex-col items-start relative shrink-0 w-full">
                    <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-2xl lg:text-[48px] text-black tracking-[-0.96px] w-full">
                      <h4 className="block leading-[1.2]">El Significado del Logo</h4>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] not-italic relative shrink-0 text-base lg:text-2xl text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
                    <div 
                      className="whitespace-pre-wrap overflow-hidden transition-all duration-500 ease-in-out"
                      style={{ 
                        maxHeight: isLogoExpanded ? '1000px' : '140px' 
                      }}
                    >
                      <p className="mb-4"><strong>🇮🇹 Versione Italiana</strong></p>
                      <p className="mb-2"><strong>Origine antica:</strong> La figura femminile coronata da torri deriva dall'iconografia antica (come la dea Cibele o personificazioni di città) e apparve per la prima volta in epoca romana (114 d.C.) per simboleggiare la sovranità della penisola come terra di città libere.</p>
                      <p className="mb-2"><strong>Significato della corona:</strong> Il termine "turrita" deriva dal latino turritus ("munito di torri"). La corona rappresenta l'eredità dei comuni italiani e la natura urbana della nazione.</p>
                      <p className="mb-2"><strong>Evoluzione:</strong> Nel 1603, Cesare Ripa ne codificò l'aspetto moderno nell'opera Iconologia, aggiungendo la Stella d'Italia sopra il capo, simbolo di buon auspicio e destino nazionale.</p>
                      <p className="mb-6"><strong>Uso moderno:</strong> È stata il simbolo principale durante il Risorgimento e oggi appare su monete, francobolli e documenti ufficiali come la carta d'identità.</p>
                      
                      <p className="mb-4"><strong>🇪🇸 Versión en Español</strong></p>
                      <p className="mb-2"><strong>Origen antiguo:</strong> La figura femenina con corona de torres proviene de la iconografía clásica (como la diosa Cibeles) y apareció por primera vez en monedas romanas (114 d.C.) para representar a Italia como una tierra de ciudades soberanas.</p>
                      <p className="mb-2"><strong>Significado de la corona:</strong> "Turrita" significa "con torres" (del latín turritus). La corona simboliza la historia de los municipios italianos (comuni) y la fuerza de su civilización urbana.</p>
                      <p className="mb-2"><strong>Evolución:</strong> En el siglo XVII, Cesare Ripa definió su imagen definitiva con la Estrella de Italia sobre su cabeza, que representa el destino brillante de la nación.</p>
                      <p><strong>Uso actual:</strong> Fue el símbolo clave de la unificación (Risorgimento) y sigue presente en pasaportes, monedas y documentos de la República Italiana.</p>
                    </div>
                    {!isLogoExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-white to-transparent pointer-events-none" />
                    )}
                    <button
                      onClick={() => setIsLogoExpanded(!isLogoExpanded)}
                      className="mt-4 font-['Inter:SemiBold',sans-serif] font-semibold text-[#900] hover:text-[#b00] transition-colors text-base lg:text-xl relative z-10"
                    >
                      {isLogoExpanded ? '... Ver menos' : '... Ver más'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RED BACKGROUND - RESTAURACIÓN SECTION */}
      <section className="bg-[#900] py-12 lg:py-[80px] px-4 lg:px-12 relative w-full" id="restauracion-section">
        <div className="flex flex-col gap-8 lg:gap-[60px] items-center relative w-full max-w-[1680px] mx-auto">
          
          {/* Section Title */}
          <div className="flex flex-col items-center justify-center w-full pb-4 lg:pb-8 gap-6">
            <h3 className="font-['Inter:Bold',sans-serif] font-bold text-white text-3xl lg:text-[56px] tracking-[-1.12px] leading-[1.2] text-center">
              Restauración
            </h3>
            
            {/* Anchor Navigation Pills */}
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-5 lg:gap-x-4 lg:gap-y-7">
              <a 
                href="#techo-section" 
                className="font-['Inter:Bold',sans-serif] font-bold text-white text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer border border-white/20 hover:border-white/40"
              >
                Techo
              </a>
              <a 
                href="#fachada-section" 
                className="font-['Inter:Bold',sans-serif] font-bold text-white text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer border border-white/20 hover:border-white/40"
              >
                Fachada
              </a>
              <a 
                href="#cuadro-section" 
                className="font-['Inter:Bold',sans-serif] font-bold text-white text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer border border-white/20 hover:border-white/40"
              >
                Cuadro
              </a>
              <a 
                href="#puertas-section" 
                className="font-['Inter:Bold',sans-serif] font-bold text-white text-sm lg:text-base px-4 lg:px-6 py-2 lg:py-2.5 bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer border border-white/20 hover:border-white/40"
              >
                Puertas
              </a>
            </div>
          </div>

          {/* RESTORATION PROJECT - PDF CONTENT */}
          
          <div className="w-full max-w-[1400px] mx-auto mb-16 lg:mb-24">
            <div className="relative p-[2px] rounded-2xl" style={{ background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.3) 100%)' }}>
              <div className="bg-[#900] flex flex-col gap-6 lg:gap-10 p-6 lg:p-12 rounded-2xl">
                <div>
                  <h3 className="font-['Inter:Bold',sans-serif] font-bold text-white text-3xl lg:text-[52px] tracking-[-1.04px] leading-[1.2] text-center">
                    Proyecto de Restauración Integral
                  </h3>
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-white/80 text-lg lg:text-xl tracking-[-0.02em] text-center mt-3">
                    Comenzado en 2018
                  </p>
                </div>
                
                {/* Project Description */}
                <div className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-lg text-white/90 leading-[1.6] max-w-[1100px] mx-auto space-y-6">
                  <div>
                    <h4 className="font-['Inter:Bold',sans-serif] font-bold text-white text-xl lg:text-2xl mb-3">Descripción General del Proyecto</h4>
                    <p>
                      El Proyecto se propuso rescatar la Fachada del edificio situado en Adolfo Alsina 1461/1465, 
                      donde se halla implantada la ASOCIACIÓN DE SOCORROS MUTUOS Y CULTURA "NAZIONALE ITALIANA".
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-['Inter:Bold',sans-serif] font-bold text-white text-xl lg:text-2xl mb-3">Importancia Histórica y Cultural</h4>
                    <p className="mb-3">
                      La institución constituye un hito cultural relevante, ya que su origen data de 1861, surgida para 
                      la asistencia social de la inmigración italiana. El edificio reporta una connotación urbana relevante, 
                      ya que su estética refiere a los lineamientos dimanados de la "Ecole Beaux Arts", con un eclecticismo 
                      materializado en su frente sobre la calle Alsina.
                    </p>
                    <p>
                      La ASOCIACIÓN DE SOCORROS MUTUOS Y CULTURA "NAZIONALE ITALIANA" constituye una entidad centenaria 
                      (fundada el 25 de Marzo de 1861) y fue creada para la ayuda mutua entre miembros y el firme propósito 
                      de propagar la "instrucción", según los cánones pedagógicos más avanzados de la época y difundir también 
                      la cultura italiana.
                    </p>
                  </div>
                  
                </div>
                
                {/* Restoration Work Photos Carousel */}
                <div className="mt-8 lg:mt-12">
                  <h4 className="font-['Inter:Bold',sans-serif] font-bold text-white text-2xl lg:text-3xl mb-6 text-center">Previo a la Restauración</h4>
                  <ImageCarousel images={restorationPhotos} onImageClick={openLightbox} />
                </div>
              </div>
            </div>
          </div>
          
          {/* EL ORGULLOSO RESULTADO - MAGAZINE COVERAGE */}
          <div className="w-full max-w-[1400px] mx-auto mb-16 lg:mb-32">
            <div className="relative p-[2px] rounded-2xl" style={{ background: 'linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,0.3) 100%)' }}>
              <div className="bg-[#900] flex flex-col gap-6 lg:gap-10 p-6 lg:p-12 rounded-2xl">
                <h3 className="font-['Inter:Bold',sans-serif] font-bold text-white text-3xl lg:text-[52px] tracking-[-1.04px] leading-[1.2] text-center">El Proceso                </h3>
                <div className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-xl text-white/90 leading-[1.6] text-center max-w-[900px] mx-auto">
                  
                </div>
                <div className="mt-8 lg:mt-12">
                  <ImageCarousel images={newspapers} onImageClick={openLightbox} />
                </div>
              </div>
            </div>
          </div>
          
          {/* ANTES Y DESPUÉS - DETAILED RESTORATION SECTIONS */}
          
          {/* Main Title for Before/After Section */}
          <div className="w-full max-w-[1600px] mx-auto mt-8 lg:mt-12 mb-8 lg:mb-12">
            <h3 className="font-['Inter:Bold',sans-serif] font-bold text-white text-3xl lg:text-[52px] tracking-[-1.04px] leading-[1.2] text-center">
              El Orgulloso Antes y Después
            </h3>
          </div>
          
          {/* ROOF RESTORATION (Techo) */}
          <div id="techo-section" className="w-full max-w-[1600px] mx-auto scroll-mt-24">
            <h4 className="font-['Inter:Bold',sans-serif] font-bold text-white text-2xl lg:text-[36px] tracking-[-0.72px] leading-[1.2] text-center mb-8 lg:mb-12">
              Restauración del Techo
            </h4>
            
            {/* BEFORE/AFTER stacked vertically - 5 images each */}
            <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
              {/* BEFORE Section - 5 images in grid */}
              <div>
                <div className="flex justify-center mb-4 lg:mb-6">
                  <h5 className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-xs lg:text-sm tracking-[-0.28px] leading-[1.2] bg-white px-4 py-1 rounded-full">
                    ANTES
                  </h5>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4 max-w-[1400px] mx-auto">
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(0, roofBeforeImages)}
                  >
                    <img src={imgRoofBefore1} alt="Techo antes 1" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(1, roofBeforeImages)}
                  >
                    <img src={imgRoofBefore2} alt="Techo antes 2" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(2, roofBeforeImages)}
                  >
                    <img src={imgRoofBefore3} alt="Techo antes 3" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(3, roofBeforeImages)}
                  >
                    <img src={imgRoofBefore4} alt="Techo antes 4" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(4, roofBeforeImages)}
                  >
                    <img src={imgRoofBefore5} alt="Techo antes 5" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* AFTER Section - 5 images in grid */}
              <div>
                <div className="flex justify-center mb-4 lg:mb-6">
                  <h5 className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-xs lg:text-sm tracking-[-0.28px] leading-[1.2] bg-white px-4 py-1 rounded-full">
                    DESPUÉS
                  </h5>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4 max-w-[1400px] mx-auto">
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(0, roofAfterImages)}
                  >
                    <img src={imgRoofAfter1} alt="Techo después 1" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(1, roofAfterImages)}
                  >
                    <img src={imgRoofAfter2} alt="Techo después 2" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(2, roofAfterImages)}
                  >
                    <img src={imgRoofAfter3} alt="Techo después 3" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(3, roofAfterImages)}
                  >
                    <img src={imgRoofAfter4} alt="Techo después 4" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(4, roofAfterImages)}
                  >
                    <img src={imgRoofAfter5} alt="Techo después 5" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Roof Intervention Details */}
            <div className="mt-8 lg:mt-12 px-4 lg:px-8 py-6 lg:py-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <h5 className="font-['Inter:Bold',sans-serif] font-bold text-white text-lg lg:text-[28px] tracking-[-0.56px] leading-[1.3] mb-6">
                Renovación del Techo: Seguridad y Modernización
              </h5>
              <p className="text-white/90 font-['Inter',sans-serif] text-base lg:text-[18px] leading-[1.6] mb-6">
                Debido al deterioro estructural del techo original y para neutralizar cualquier riesgo, procedimos a su reemplazo integral. Optamos por una nueva estructura de materiales livianos y de alta resistencia que garantiza la máxima seguridad de nuestros socios y la preservación a largo plazo del edificio.
              </p>
              <h6 className="font-['Inter:Bold',sans-serif] font-bold text-white text-base lg:text-[22px] mb-4 underline">
                Intervenciones técnicas realizadas:
              </h6>
              <ul className="space-y-3 lg:space-y-4 text-white/90 font-['Inter',sans-serif] text-base lg:text-[18px] leading-[1.6]">
                <li><strong>•</strong> <strong>Reemplazo de cubierta:</strong> Retiro de la estructura deteriorada y colocación de una nueva superficie liviana para reducir la carga sobre los muros portantes.</li>
                <li><strong>•</strong> <strong>Tratamiento de desagües:</strong> Reparación y adecuación de canaletas y bajadas pluviales para asegurar la correcta evacuación del agua y evitar filtraciones.</li>
                <li><strong>•</strong> <strong>Saneamiento de bovedillas:</strong> Limpieza y consolidación de las estructuras inferiores afectadas por la humedad antigua.</li>
                <li><strong>•</strong> <strong>Impermeabilización:</strong> Aplicación de aislantes térmicos e hídricos de última generación para proteger el interior del salón.</li>
              </ul>
            </div>
          </div>

          {/* FACADE RESTORATION (Fachada) */}
          <div id="fachada-section" className="w-full max-w-[1600px] mx-auto mt-12 lg:mt-20 scroll-mt-24">
            <h4 className="font-['Inter:Bold',sans-serif] font-bold text-white text-2xl lg:text-[36px] tracking-[-0.72px] leading-[1.2] text-center mb-8 lg:mb-12">
              Restauración de la Fachada
            </h4>
            
            {/* BEFORE/AFTER stacked vertically - 3 images each */}
            <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
              {/* BEFORE Section - 3 images */}
              <div>
                <div className="flex justify-center mb-4 lg:mb-6">
                  <h5 className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-xs lg:text-sm tracking-[-0.28px] leading-[1.2] bg-white px-4 py-1 rounded-full">
                    ANTES
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-3 lg:gap-4 max-w-[1200px] mx-auto">
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(0, facadeBeforeImages)}
                  >
                    <img src={imgFacadeBefore1} alt="Fachada antes 1" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(1, facadeBeforeImages)}
                  >
                    <img src={imgFacadeBefore2} alt="Fachada antes 2" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(2, facadeBeforeImages)}
                  >
                    <img src={imgFacadeBefore3} alt="Fachada antes 3" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* AFTER Section - 3 images (2 vertical + 1 horizontal) */}
              <div>
                <div className="flex justify-center mb-4 lg:mb-6">
                  <h5 className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-xs lg:text-sm tracking-[-0.28px] leading-[1.2] bg-white px-4 py-1 rounded-full">
                    DESPUÉS
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-3 lg:gap-4 max-w-[1200px] mx-auto">
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(0, facadeAfterImages)}
                  >
                    <img src={imgFacadeAfter1} alt="Fachada después 1" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(1, facadeAfterImages)}
                  >
                    <img src={imgFacadeAfter2} alt="Fachada después 2" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(2, facadeAfterImages)}
                  >
                    <img src={imgFacadeAfter3} alt="Fachada después 3" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Facade Intervention Details */}
            <div className="mt-8 lg:mt-12 px-4 lg:px-8 py-6 lg:py-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <h5 className="font-['Inter:Bold',sans-serif] font-bold text-white text-lg lg:text-[28px] tracking-[-0.56px] leading-[1.3] mb-6">
                La Intervención de la fachada contempla:
              </h5>
              <p className="text-white/90 font-['Inter',sans-serif] text-base lg:text-[18px] leading-[1.6] mb-6">
                Para devolverle al edificio su fisonomía original y garantizar su seguridad, se determinó un plan de acción centrado en la recuperación de materiales y la eliminación de agentes de deterioro.
              </p>
              <h6 className="font-['Inter:Bold',sans-serif] font-bold text-white text-base lg:text-[22px] mb-4 underline">
                Tareas técnicas detalladas:
              </h6>
              <ul className="space-y-3 lg:space-y-4 text-white/90 font-['Inter',sans-serif] text-base lg:text-[18px] leading-[1.6]">
                <li><strong>•</strong> <strong>Saneamiento de superficies:</strong> Limpieza mediante hidrolavado controlado para remover depósitos de hollín y guano, seguido del retiro de vegetación invasiva y elementos ajenos (cables, grampas y cartelería obsoleta).</li>
                <li><strong>•</strong> <strong>Restauración de mampostería y ornamentos:</strong> Consolidación de revoques desprendidos y reconstrucción artesanal de molduras, pilastras y bajorrelieves dañados, respetando la composición de los morteros históricos.</li>
                <li><strong>•</strong> <strong>Tratamiento de carpinterías y herrería:</strong> Restauración de las aberturas de madera y decapado de barandas de hierro en balcones, aplicando esquemas de pintura de protección anticorrosiva.</li>
                <li><strong>•</strong> <strong>Protección y terminación hídrica:</strong> Sellado de grietas y fisuras superficiales, finalizando con la aplicación de un revestimiento que permite la respiración del muro pero impide el ingreso de humedad.</li>
              </ul>
            </div>
          </div>

          {/* ARTWORK RESTORATION (Obras de Arte) */}
          <div id="cuadro-section" className="w-full max-w-[1600px] mx-auto mt-12 lg:mt-20 scroll-mt-24">
            <h4 className="font-['Inter:Bold',sans-serif] font-bold text-white text-2xl lg:text-[36px] tracking-[-0.72px] leading-[1.2] text-center mb-8 lg:mb-12">
              Restauración del Ejemplar donado por el Rey
            </h4>
            
            {/* BEFORE/AFTER stacked vertically - 3 images each */}
            <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
              {/* BEFORE Section - 3 images side by side */}
              <div>
                <div className="flex justify-center mb-4 lg:mb-6">
                  <h5 className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-xs lg:text-sm tracking-[-0.28px] leading-[1.2] bg-white px-4 py-1 rounded-full">
                    ANTES
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-3 lg:gap-4 max-w-[1200px] mx-auto">
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(0, artworkBeforeImages)}
                  >
                    <img src={imgArtworkBefore1} alt="Obra de arte antes 1" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(1, artworkBeforeImages)}
                  >
                    <img src={imgArtworkBefore2} alt="Obra de arte antes 2" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(2, artworkBeforeImages)}
                  >
                    <img src={imgArtworkBefore3} alt="Obra de arte antes 3" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* AFTER Section - 3 images side by side */}
              <div>
                <div className="flex justify-center mb-4 lg:mb-6">
                  <h5 className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-xs lg:text-sm tracking-[-0.28px] leading-[1.2] bg-white px-4 py-1 rounded-full">
                    DESPUÉS
                  </h5>
                </div>
                <div className="grid grid-cols-3 gap-3 lg:gap-4 max-w-[1200px] mx-auto">
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(0, artworkAfterImages)}
                  >
                    <img src={imgArtworkAfter1} alt="Obra de arte después 1" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(1, artworkAfterImages)}
                  >
                    <img src={imgArtworkAfter2} alt="Obra de arte después 2" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(2, artworkAfterImages)}
                  >
                    <img src={imgArtworkAfter3} alt="Obra de arte después 3" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Painting Intervention Details */}
            <div className="mt-8 lg:mt-12 px-4 lg:px-8 py-6 lg:py-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <h5 className="font-['Inter:Bold',sans-serif] font-bold text-white text-lg lg:text-[28px] tracking-[-0.56px] leading-[1.3] mb-6 underline">
                La Intervención de la pintura contempla:
              </h5>
              <ol className="space-y-3 lg:space-y-4 text-white/90 font-['Inter',sans-serif] text-base lg:text-[18px] leading-[1.6]">
                <li><strong>1.</strong> Limpieza mecánica de polvo y suciedad ambiental localizada en el anverso y reverso de la obra.</li>
                <li><strong>2.</strong> Tratamiento de consolidación, re adhesión de capa pictórica y/ o de preparación desprendida o en peligro de desprendimiento</li>
                <li><strong>3.</strong> Control de la correcta adhesión de la capa pictórica.</li>
                <li><strong>4.</strong> Limpieza húmeda del film pictórico.</li>
                <li><strong>5.</strong> Tratamiento sobre abrasiones, agrietamiento y golpes.</li>
                <li><strong>6.</strong> Tratamientos sobre tajos</li>
                <li><strong>7.</strong> Injertos de tela sobre el tajo principal.</li>
                <li><strong>8.</strong> Nivelado de las faltantes de capa pictórica mediante estucos apropiados.</li>
                <li><strong>9.</strong> Reintegración pictórica sobre los estucos, con colores especialmente diseñados para este fin.</li>
                <li><strong>10.</strong> Capa de protección final</li>
                <li><strong>11.</strong> Documentación fotográfica sobre los tratamientos realizados.</li>
                <li><strong>12.</strong> Se agregó un vidrio de protección.</li>
              </ol>
            </div>
          </div>

          {/* DOORS RESTORATION (Puertas) */}
          <div id="puertas-section" className="w-full max-w-[1600px] mx-auto mt-12 lg:mt-20 scroll-mt-24">
            <h4 className="font-['Inter:Bold',sans-serif] font-bold text-white text-2xl lg:text-[36px] tracking-[-0.72px] leading-[1.2] text-center mb-8 lg:mb-12">
              Modernización de las Puertas
            </h4>
            
            {/* BEFORE/AFTER stacked vertically - 2 images each */}
            <div className="space-y-6 lg:space-y-8 mb-8 lg:mb-12">
              {/* BEFORE Section - 2 images side by side */}
              <div>
                <div className="flex justify-center mb-4 lg:mb-6">
                  <h5 className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-xs lg:text-sm tracking-[-0.28px] leading-[1.2] bg-white px-4 py-1 rounded-full">
                    ANTES
                  </h5>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-[900px] mx-auto">
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(0, doorsImages)}
                  >
                    <img src={imgDoorsBefore1} alt="Puertas antes 1" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(1, doorsImages)}
                  >
                    <img src={imgDoorsBefore2} alt="Puertas antes 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* AFTER Section - 2 images side by side */}
              <div>
                <div className="flex justify-center mb-4 lg:mb-6">
                  <h5 className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-xs lg:text-sm tracking-[-0.28px] leading-[1.2] bg-white px-4 py-1 rounded-full">
                    DESPUÉS
                  </h5>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:gap-4 max-w-[900px] mx-auto">
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(2, doorsImages)}
                  >
                    <img src={imgDoorsAfter1} alt="Puertas después 1" className="w-full h-full object-cover" />
                  </div>
                  <div 
                    className="aspect-[3/4] overflow-clip rounded-xl cursor-pointer hover:opacity-90 hover:scale-[1.02] transition-all"
                    onClick={() => openLightbox(3, doorsImages)}
                  >
                    <img src={imgDoorsAfter2} alt="Puertas después 2" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>

            {/* Doors Intervention Details */}
            <div className="mt-8 lg:mt-12 px-4 lg:px-8 py-6 lg:py-8 bg-white/5 rounded-2xl backdrop-blur-sm">
              <h5 className="font-['Inter:Bold',sans-serif] font-bold text-white text-lg lg:text-[28px] tracking-[-0.56px] leading-[1.3] mb-6">
                Modernización de las Puertas
              </h5>
              <p className="text-white/90 font-['Inter',sans-serif] text-base lg:text-[18px] leading-[1.6] mb-6">
                La intervención se centró en la recuperación de la madera original y la optimización funcional de los accesos, revirtiendo el desgaste por intemperie y reforzando la identidad institucional mediante la incorporación de nuevos elementos de seguridad y señalética.
              </p>
              <h6 className="font-['Inter:Bold',sans-serif] font-bold text-white text-base lg:text-[22px] mb-4 underline">
                Tareas técnicas realizadas:
              </h6>
              <ul className="space-y-3 lg:space-y-4 text-white/90 font-['Inter',sans-serif] text-base lg:text-[18px] leading-[1.6]">
                <li><strong>•</strong> <strong>Puesta en valor de la madera:</strong> Decapado integral, lijado artesanal para recuperar la veta original y aplicación de barnices con filtros UV de alta resistencia.</li>
                <li><strong>•</strong> <strong>Ajuste estructural y herrería:</strong> Reposición de piezas faltantes, ajuste de hojas para un cierre hermético y pulido de bronces, picaportes y fallebas originales.</li>
                <li><strong>•</strong> <strong>Sistema de doble acceso y seguridad:</strong> Instalación de puertas de vidrio tras las hojas de madera, que incrementan la protección del recinto y jerarquizan la fachada.</li>
                <li><strong>•</strong> <strong>Identidad Institucional:</strong> Aplicación del logo de la institución sobre los nuevos cristales, logrando un reconocimiento visual inmediato y una integración estética moderna con el patrimonio histórico.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
      
      {/* Lightbox Modal for Image Zoom */}
      <LightboxModal 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)}
        allImages={lightboxImages}
        currentIndex={lightboxIndex}
        onNavigate={navigateLightbox}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}