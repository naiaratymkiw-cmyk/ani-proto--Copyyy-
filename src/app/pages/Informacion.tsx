import svgPaths from "../../imports/svg-o4vele9z9e";
import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { MobileNav } from "../components/MobileNav";

// Imágenes locales - Página Información
const imgHero1 = "/images/informacion/hero.png";
const imgImage = "/images/informacion/servicio-cultural.png";
const img360F632011725WLo7D2Z2Hv4Wg4Pryecac43GxlJkqv5B1 = "/images/informacion/servicio-tango.png";
const imgUrbino = "/images/informacion/destino-urbino.png";
const imgGenova = "/images/informacion/destino-genova.png";

export default function Informacion() {
  return (
    <div className="bg-white w-full overflow-x-hidden">
      {/* Mobile Navigation */}
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
      <section className="flex min-h-[300px] lg:h-[440px] items-center justify-center overflow-clip relative shrink-0 w-full pt-20 lg:pt-0">
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
                  <h2 className="block leading-[1.1] whitespace-pre-wrap">Información</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section - Descubriendo Italia */}
      <section className="py-12 lg:h-[842px] relative shrink-0 w-full">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center pb-8 lg:pb-[45px] pt-8 lg:pt-[5px] px-4 lg:px-[150px] relative size-full">
            {/* Image - First on mobile */}
            <div className="h-[400px] lg:h-[528px] relative rounded-2xl shrink-0 w-full lg:w-[410px] order-1 lg:order-1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-2xl size-full" src={imgImage} />
            </div>
            
            {/* Content Box */}
            <div className="bg-white flex flex-col min-h-[400px] lg:h-[528px] items-end justify-center pb-6 lg:pb-px pt-6 lg:pt-[25px] px-6 lg:px-11 relative rounded-2xl shrink-0 w-full lg:w-[666px] order-2 lg:order-2">
              <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-2xl shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)]" />
              
              <div className="flex flex-col items-start relative shrink-0 w-full max-w-full">
                <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#404040] justify-center leading-[0] not-italic relative shrink-0 text-3xl lg:text-[64px] to-[#900] tracking-[-1.28px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
                  <h4 className="block leading-[1.2] whitespace-pre-wrap">Descubriendo Italia</h4>
                </div>
              </div>
              
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[1.45] not-italic relative shrink-0 text-base lg:text-2xl text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full whitespace-pre-wrap mt-6">
                <p className="mb-0">Además de los cursos de lengua, ofrecemos encuentros dedicados a explorar la riqueza del arte, la geografía y las costumbres de la península.</p>
                <p>Es un punto de encuentro para quienes desean entender no solo cómo se habla, sino cómo se siente y se vive Italia.</p>
              </div>
              
              <div className="flex justify-end">
                <Link to="/contacto" className="bg-[#900] cursor-pointer flex items-center justify-center px-4 py-3 relative rounded-xl shrink-0 w-[170px] mt-6">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-lg text-center text-white tracking-[-0.09px]">
                    <p className="leading-[1.45] whitespace-pre-wrap">Contactarme</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aprendé sobre Italia Section */}
      <div className="bg-[#900] flex flex-col gap-4 lg:gap-6 items-center justify-center leading-[0] pt-12 lg:pt-[72px] px-4 relative shrink-0 text-white w-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-3xl lg:text-[64px] tracking-[-1.28px] text-center">
          <h3 className="block leading-[1.2]">Aprendé sobre Italia</h3>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-base lg:text-[20px] tracking-[-0.1px] text-center">
          <p className="leading-[1.45]">Que las fronteras no te limiten a poder conocer y vivir Italia</p>
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="bg-[#900] py-12 lg:pb-[120px] lg:pt-[61px] relative shrink-0 w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-x-8 lg:gap-y-8 px-4 lg:px-[177px] relative w-full">
          {/* Card 1 - La riqueza histórica de Urbino */}
          <article className="bg-white rounded-2xl w-full lg:w-auto relative shadow-[0px_7px_18.8px_0px_rgba(100,0,0,0.44),0px_6px_12px_0px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
              <div className="h-[250px] lg:h-[348px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgUrbino} />
              </div>
              
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col justify-center size-full">
                  <div className="flex flex-col items-start justify-center p-4 lg:p-6 relative w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col gap-2 items-start leading-[0] not-italic px-4 lg:px-6 relative w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-xl lg:text-2xl text-black tracking-[-0.48px] w-full">
                          <h5 className="block leading-[1.45] whitespace-pre-wrap">La riqueza histórica de Urbino</h5>
                        </div>
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-base lg:text-lg text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
                          <p className="leading-[1.4] whitespace-pre-wrap">Un recorrido cultural por Urbino, cuna del Renacimiento, explorando su arquitectura....</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
          </article>
          
          {/* Card 2 - Genova */}
          <article className="bg-white rounded-2xl w-full lg:w-auto relative shadow-[0px_7px_18.8px_0px_rgba(100,0,0,0.44),0px_6px_12px_0px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
              <div className="h-[250px] lg:h-[347px] relative shrink-0 w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgGenova} />
              </div>
              
              <div className="relative shrink-0 w-full">
                <div className="flex flex-col justify-center size-full">
                  <div className="flex flex-col items-start justify-center p-4 lg:p-6 relative w-full">
                    <div className="relative shrink-0 w-full">
                      <div className="flex flex-col gap-2 items-start leading-[0] not-italic px-4 lg:px-6 relative w-full">
                        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-xl lg:text-2xl text-black tracking-[-0.48px] w-full">
                          <h5 className="block leading-[1.45] whitespace-pre-wrap">Genova</h5>
                        </div>
                        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-base lg:text-lg text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
                          <p className="leading-[1.4] whitespace-pre-wrap">Reconocida por su arquitectura renacentista y los Palazzi dei Rolli, la ciudad ha revitalizado su frente costero...</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-2xl" />
          </article>
          
          {/* Ver Más Button - Right aligned on desktop, centered on mobile */}
          <div className="flex lg:col-start-2 lg:justify-end justify-center">
            <a className="bg-white cursor-pointer flex items-center justify-between px-4 py-3 rounded-xl w-[144px]" href="https://www.youtube.com/@ideaitalia6773">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#900] text-lg text-center tracking-[-0.09px] w-[112px]">
                <p className="leading-[1.45] whitespace-pre-wrap">Ver Más</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}