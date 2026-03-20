import { Link } from "react-router";
import { MobileNav } from "../components/MobileNav";
import { Footer } from "../components/Footer";
import { AnimatedSection, AnimatedCard } from "../components/AnimatedSection";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { useState } from "react";
import svgPaths from "../../imports/svg-q1th159rd1";
import iconPaths from "../../imports/svg-3pc2aqitc8";

// Imágenes locales - Página Inicio
const imgHero1 = "/images/inicio/hero.png";
const imgUntitledDesign201 = "/images/inicio/logo-ani.png";
const imgImage = "/images/inicio/evento-cultural.png";
const imgTangoEvento1 = "/images/inicio/evento-tango/.png";
const imgUrbino = "/images/inicio/destino-urbino.png";
const imgGenova = "/images/inicio/destino-genova.png";
const imgImage1 = "/images/nosotros/galeria1.png";
const imgImage2 = "/images/nosotros/galeria2.png";
const imgImage3 = "/images/nosotros/galeria3.png";
const imgImage4 = "/images/nosotros/galeria4.png";
const imgImage5 = "/images/nosotros/galeria5.png";
const imgImage6 = "/images/nosotros/galeria6.png";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function HomeNew() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="min-h-screen bg-white w-full">
      {/* 165th Anniversary Banner - GOLD - DISMISSIBLE */}
      {bannerVisible && (
        <div className="bg-gradient-to-r from-[#AE8625] via-[#F7EF8A] via-[#D2AC47] to-[#EDC967] py-3 lg:py-4 w-full sticky top-0 z-[60] shadow-lg border-b-2 border-[#AE8625]">
          <div className="flex items-center justify-center px-4 relative">
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[#900] text-sm lg:text-lg text-center tracking-[-0.02em]">
              🎊 ¡Celebramos 165 años! • 25 de Marzo, 1861-2026 🎊
            </p>
            {/* Close Button */}
            <button
              onClick={() => setBannerVisible(false)}
              className="absolute right-2 lg:right-4 p-1 hover:bg-[#AE8625] hover:bg-opacity-20 rounded-full transition-all duration-200"
              aria-label="Cerrar banner"
            >
              <X className="w-5 h-5 lg:w-6 lg:h-6 text-[#900]" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation - Lower z-index */}
      <MobileNav />

      {/* Desktop Header */}
      <header className="bg-[#900] content-stretch hidden lg:flex items-center justify-center py-[24px] relative shrink-0 w-full">
        <nav className="backdrop-blur-[35px] content-stretch flex gap-[40px] items-center justify-center px-[40px] py-[16px] relative rounded-[40px] shrink-0">
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
          <Link to="/contacto" className="bg-[#00a840] h-[39px] overflow-clip relative rounded-[30px] shrink-0 w-[117px]">
            <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[8px_13.5px_8px_12.5px] justify-center leading-[0] not-italic text-[16px] text-center text-white tracking-[-0.08px]">
              <p className="leading-[1.45] whitespace-pre-wrap">Contacto</p>
            </div>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-[500px] lg:h-[695px] relative pt-20 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover opacity-33 size-full" src={imgHero1} />
          <div className="absolute bg-[rgba(255,255,255,0.42)] inset-0" />
        </div>
        
        <div className="flex items-center justify-center size-full relative">
          {/* Mobile Layout - Stack: tagline, title, image, description, buttons */}
          <div className="flex flex-col lg:hidden items-center px-4 py-12 w-full gap-6">
            {/* Tagline */}
            <div className="bg-clip-text bg-gradient-to-r from-[#900] to-[#404040] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-xs max-w-full text-center" style={{ WebkitTextFillColor: "transparent" }}>
              <p className="leading-[1.212] text-[15px]">Primera escuela de italiano en latinoamérica</p>
            </div>
            
            {/* Title */}
            <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-4xl tracking-[-1.44px] leading-[1.1] text-center max-w-[320px]"><span className="text-black">Associazione Nazionale </span><span className="text-[#900]">Italiana</span></h1>
            
            {/* Image */}
            <div className="flex items-center justify-center w-full">
              <div className="w-full max-w-[280px]">
                <img alt="" className="w-full h-auto object-cover" src={imgUntitledDesign201} style={{ filter: 'drop-shadow(0px 4px 7.6px rgba(100, 0, 0, 0.44))' }} />
              </div>
            </div>
            
            {/* Description */}
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-sm text-[#404040] tracking-[-0.32px] leading-[1.6] text-center max-w-full">
              Más de 160 años reforzando nuestra identidad con clases, arte y actividades que mantienen vivo el espíritu de fraternidad italo-argentina
            </p>
            
            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contacto" className="bg-[#900] text-white px-6 py-3 rounded-xl font-['Inter:Medium',sans-serif] font-medium text-base tracking-[-0.09px]">
                Contactanos
              </Link>
              <Link to="/historia" className="px-6 py-3 rounded-xl font-['Inter:Medium',sans-serif] font-medium text-base text-black tracking-[-0.09px] border-2 border-[rgba(0,0,0,0.15)] border-solid">
                Ver Más
              </Link>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:flex items-center justify-between px-16 max-w-[1620px] mx-auto gap-12 w-full">
            {/* Left Content - Fade in */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 flex flex-col gap-6 max-w-[600px]"
            >
              {/* Tagline */}
              <div className="bg-clip-text bg-gradient-to-r from-[#900] to-[#404040] font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-xl lg:text-2xl" style={{ WebkitTextFillColor: "transparent" }}>Primera escuela de italiano en latinoamérica</div>
              
              {/* Title with Black + Red */}
              <h1 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-[72px] leading-[1.1] tracking-[-1.68px]">
                <span className="text-black">Associazione Nazionale </span>
                <span className="text-[#900]">Italiana</span>
              </h1>
              
              {/* Description */}
              <p className="font-['Inter:Regular',sans-serif] text-lg text-[rgba(0,0,0,0.7)] leading-[1.45]">
                Más de 160 años reforzando nuestra identidad con clases, arte y actividades que mantienen vivo el espíritu de fraternidad italo-argentina
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/contacto" className="bg-[#900] text-white px-4 py-3 rounded-xl font-['Inter:Medium',sans-serif] font-medium text-lg tracking-[-0.09px]">
                  Contactanos
                </Link>
                <Link to="/historia" className="px-4 py-3 rounded-xl font-['Inter:Medium',sans-serif] font-medium text-lg text-black tracking-[-0.09px] border-2 border-[rgba(0,0,0,0.15)] border-solid">
                  Ver Más
                </Link>
              </div>
            </motion.div>
            
            {/* Right Image - Slide in from right */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex items-center justify-center py-20 w-[665px]"
            >
              <div className="flex items-center justify-center rounded-bl-2xl rounded-tl-2xl w-[719px]">
                <div className="h-[364px] w-[362px]">
                  <img alt="" className="w-full h-auto object-cover" src={imgUntitledDesign201} style={{ filter: 'drop-shadow(0px 4px 7.6px rgba(100, 0, 0, 0.44))' }} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 lg:py-12 lg:h-[464px]">
        <div className="flex items-center justify-center size-full">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center px-4 lg:px-[150px]">
            {/* Gastronomía - Clickable Card */}
            <AnimatedCard delay={0.1}>
              <Link to="/actividades" className="bg-white flex flex-col gap-2 lg:gap-[15px] min-h-[220px] lg:h-[366px] items-center justify-center w-full max-w-[380px] lg:w-[380px] py-4 cursor-pointer group">
                <div className="bg-[#900] rounded-full shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] size-[70px] lg:size-[108px] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-200">
                  <div className="-translate-y-1/2 absolute aspect-[24/24] left-[15px] lg:left-[24px] overflow-clip right-[15px] lg:right-[24px] top-[calc(50%-0.5px)]">
                    <div className="absolute inset-[8.33%_12.5%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 50">
                        <path d={iconPaths.p21008ac0} fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-lg lg:text-2xl text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] leading-[1.45] w-full max-w-[288px]">
                  Gastronomía
                </h3>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-xs lg:text-sm text-[#1a202c] text-center tracking-[-0.28px] leading-[1.5] lg:leading-[1.75] w-full max-w-[276px] px-4">
                  Una experiencia gastronómica que te transporta a Italia a través de sus aromas y tradiciones
                </p>
              </Link>
            </AnimatedCard>

            {/* Clases - Clickable Card */}
            <AnimatedCard delay={0.2}>
              <Link to="/actividades" className="bg-white flex flex-col gap-2 lg:gap-[15px] min-h-[220px] lg:h-[366px] items-center justify-center w-full max-w-[380px] lg:w-[380px] py-4 cursor-pointer group">
                <div className="bg-[#900] rounded-full shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] size-[70px] lg:size-[108px] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-200">
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[40px] lg:h-[62px] left-[calc(50%-0.5px)] overflow-clip top-[calc(50%+0.5px)] w-[39px] lg:w-[61px]">
                    <div className="absolute inset-[7.28%_0]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 52.9737">
                        <g clipPath="url(#clip0_5_293)">
                          <path d={iconPaths.p1a58c680} fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_293">
                            <rect fill="white" height="52.9737" width="61" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="absolute inset-[43.13%_23.63%_34.57%_23.63%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.168 13.8245">
                        <g clipPath="url(#clip0_5_290)">
                          <path d={iconPaths.p16221380} fill="white" />
                        </g>
                        <defs>
                          <clipPath id="clip0_5_290">
                            <rect fill="white" height="13.8245" width="32.168" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-lg lg:text-2xl text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] leading-[1.45] w-full max-w-[288px]">
                  Clases
                </h3>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-xs lg:text-sm text-[#1a202c] text-center tracking-[-0.28px] leading-[1.5] lg:leading-[1.75] w-full max-w-[276px] px-4">
                  Explorá nuestras clases y talleres diseñados para fortalecer y difundir nuestra identidad cultural
                </p>
              </Link>
            </AnimatedCard>

            {/* Información sobre Italia - Clickable Card */}
            <AnimatedCard delay={0.3}>
              <Link to="/informacion" className="bg-white flex flex-col gap-2 lg:gap-[15px] min-h-[220px] lg:h-[366px] items-center justify-center w-full max-w-[380px] lg:w-[380px] py-4 cursor-pointer group">
                <div className="bg-[#900] rounded-full shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] size-[70px] lg:size-[108px] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-200">
                  <div className="absolute left-[19px] lg:left-[29px] size-[39px] lg:size-[60px] top-[17px] lg:top-[26.5px]">
                    <div className="absolute inset-[-1.02%_0_0_-1.42%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.8535 60.6117">
                        <g>
                          <g>
                            <path d={iconPaths.p48fc400} stroke="#FFFEFE" strokeWidth="4" fill="none" />
                            <path d={iconPaths.p3a4945a0} stroke="#FFFEFE" strokeLinecap="round" strokeWidth="4" fill="none" />
                            <path d={iconPaths.p3f85b40} stroke="#FFFEFE" strokeLinecap="round" strokeWidth="4" fill="none" />
                            <path d={iconPaths.p2280c400} stroke="#FFFEFE" strokeLinecap="round" strokeWidth="4" fill="none" />
                          </g>
                          <path d={iconPaths.p3b3a7580} stroke="#FFFEFE" strokeWidth="4" fill="none" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-lg lg:text-2xl text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] leading-[1.45] w-full max-w-[288px]">
                  Información sobre Italia
                </h3>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-xs lg:text-sm text-[#1a202c] text-center tracking-[-0.28px] leading-[1.5] lg:leading-[1.75] w-full max-w-[276px] px-4">
                  Asistí a uno de nuestros encuentros y aprendé  cómo se siente y  vive Italia.
                </p>
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Nuestras Actividades */}
      <section className="bg-white py-12 lg:py-16">
        {/* Header with Gradient */}
        <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center pt-2 lg:pt-[9px] mb-8 lg:mb-12 px-4">
          <h2 className="bg-clip-text bg-gradient-to-r from-[#900] to-[#404040] font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-4xl lg:text-[64px] tracking-[-1.28px] leading-[1.2] text-center" style={{ WebkitTextFillColor: "transparent" }}>
            Nuestras Actividades
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4 lg:px-[150px] pb-12 lg:pb-[81px] pt-8 lg:pt-[61px]">
          {/* Image */}
          <div className="w-full lg:h-[591px] rounded-2xl lg:w-[410px] overflow-hidden">
            <img alt="" className="w-full h-[400px] lg:h-[591px] object-cover rounded-2xl" src={imgImage} />
          </div>
          
          {/* Content Card */}
          <div className="bg-white rounded-2xl min-h-[400px] lg:h-[590.667px] w-full lg:w-[666px] px-6 lg:px-11 pt-12 lg:pt-[72px] pb-6 lg:pb-px relative border border-[#fffefe] border-solid shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)]">
            <div className="grid grid-cols-1 gap-y-8 lg:gap-y-12">
              {/* Cursos de Italiano */}
              <div className="flex flex-col gap-3 lg:gap-[15px]">
                <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-2xl lg:text-[32px] text-black tracking-[-0.64px] leading-[1.2]">
                  Cursos de Italiano
                </h4>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-lg text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.45]">
                  Aprendé el idioma de tus raíces con nuestros cursos en diversos niveles y horarios flexibles entre semana, tanto presencial como a distancia.
                </p>
              </div>

              {/* Restaurante */}
              <div className="flex flex-col gap-3 lg:gap-[15px]">
                <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-2xl lg:text-[32px] text-black tracking-[-0.64px] leading-[1.2]">
                  Restaurante
                </h4>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-lg text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.45]">
                  Dentro de nuestra asociación funciona el restaurant, María Fedele, ofreciendo un menú típico italiano
                </p>
              </div>

              {/* Clases de Tango */}
              <div className="flex flex-col gap-3 lg:gap-[15px]">
                <h4 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-2xl lg:text-[32px] text-black tracking-[-0.64px] leading-[1.2]">
                  La Nazional Tango
                </h4>
                <p className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-lg text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.45]">
                  ofreciendo clases de Milonga y realizando reuniones danzantes.
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-end">
                <Link to="/actividades" className="bg-[#900] text-white px-6 lg:px-4 py-3 rounded-xl font-['Inter:Medium',sans-serif] font-medium text-base lg:text-lg tracking-[-0.09px] leading-[1.45] w-[144px] text-center">
                  Ver Más
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aprendé sobre Italia */}
      <section className="bg-[#900] pb-16 lg:pb-[120px]">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center pt-12 lg:pt-[72px] pb-8 lg:pb-[61px] px-4">
          <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold text-4xl lg:text-[64px] text-white tracking-[-1.28px] leading-[1.2] text-center">
            Aprendé sobre Italia
          </h2>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-xl text-white tracking-[-0.1px] leading-[1.45] text-center">
            Que las fronteras no te limiten a poder conocer y vivir Italia
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4 lg:px-[177px]">
          {/* Card 1 */}
          <article className="bg-white rounded-2xl overflow-hidden relative border border-[rgba(0,0,0,0.1)] border-solid shadow-[0px_7px_18.8px_0px_rgba(100,0,0,0.44),0px_6px_12px_0px_rgba(0,0,0,0.03)]">
            <img alt="" className="w-full h-[250px] lg:h-[348px] object-cover" src={imgUrbino} />
            <div className="p-4 lg:p-6">
              <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-xl lg:text-2xl text-black tracking-[-0.48px] leading-[1.45] mb-2">
                La riqueza histórica de Urbino
              </h5>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-lg text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.4]">
                Un recorrido cultural por Urbino, cuna del Renacimiento, explorando su arquitectura....
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-2xl overflow-hidden relative border border-[rgba(0,0,0,0.1)] border-solid shadow-[0px_7px_18.8px_0px_rgba(100,0,0,0.44),0px_6px_12px_0px_rgba(0,0,0,0.03)]">
            <img alt="" className="w-full h-[250px] lg:h-[347px] object-cover" src={imgGenova} />
            <div className="p-4 lg:p-6">
              <h5 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-xl lg:text-2xl text-black tracking-[-0.48px] leading-[1.45] mb-2">
                Genova
              </h5>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-lg text-[rgba(0,0,0,0.55)] tracking-[-0.09px] leading-[1.4]">
                Reconocida por su arquitectura renacentista y los Palazzi dei Rolli, la ciudad ha revitalizado su frente costero...
              </p>
            </div>
          </article>

          {/* Button */}
          <div className="lg:col-start-2 flex justify-center lg:justify-end">
            <a href="https://www.youtube.com/@ideaitalia6773" className="bg-white text-[#900] px-6 lg:px-4 py-3 rounded-xl font-['Inter:Medium',sans-serif] font-medium text-base lg:text-lg tracking-[-0.09px] leading-[1.45] w-[144px] text-center cursor-pointer">
              Ver Más
            </a>
          </div>
        </div>
      </section>

      {/* Nuestra Comunidad */}
      <section className="py-12 lg:py-24">
        {/* Header with Gradient */}
        <div className="flex flex-col gap-3 lg:gap-[14px] items-center justify-center pt-12 lg:pt-[94px] pb-8 lg:pb-12 px-4">
          <h2 className="bg-clip-text bg-gradient-to-r from-[#900] to-[#666] font-['Inter:Bold',sans-serif] font-bold text-4xl lg:text-[64px] tracking-[-1.28px] leading-[1.2] text-center" style={{ WebkitTextFillColor: "transparent" }}>
            Nuestra Comunidad
          </h2>
          <p className="font-['Inter:Medium',sans-serif] font-medium text-base lg:text-xl text-[rgba(0,0,0,0.55)] tracking-[-0.1px] leading-[1.45] text-center">
            El reflejo de una comunidad que celebra su cultura y su gente
          </p>
        </div>

        {/* Gallery - Pinterest-style Masonry */}
        <div className="px-4 lg:px-16">
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 1024: 3 }}>
            <Masonry gutter="1rem">
              <div className="rounded-2xl overflow-hidden">
                <img alt="" className="w-full h-auto object-cover rounded-2xl" src={imgImage1} />
              </div>
              
              <div className="rounded-2xl overflow-hidden">
                <img alt="" className="w-full h-auto object-cover rounded-2xl" src={imgImage3} />
              </div>
              
              <div className="rounded-2xl overflow-hidden">
                <img alt="" className="w-full h-auto object-cover rounded-2xl" src={imgImage6} />
              </div>
              
              <div className="rounded-2xl overflow-hidden">
                <img alt="" className="w-full h-auto object-cover rounded-2xl" src={imgImage2} />
              </div>
              
              <div className="rounded-2xl overflow-hidden">
                <img alt="" className="w-full h-auto object-cover rounded-2xl" src={imgImage4} />
              </div>
              
              <div className="rounded-2xl overflow-hidden">
                <img alt="" className="w-full h-auto object-cover rounded-2xl" src={imgImage} />
              </div>
              
              <div className="rounded-2xl overflow-hidden">
                <img alt="" className="w-full h-auto object-cover rounded-2xl" src={imgImage5} />
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}