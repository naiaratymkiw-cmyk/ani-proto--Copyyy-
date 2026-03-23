import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { MobileNav } from "../components/MobileNav";

// Imágenes locales - Página Actividades
const imgHero1 = "/images/actividades/hero.png";
const imgImage = "/images/actividades/actividad1.png";
const imgImage1 = "/images/actividades/actividad2.png";
const imgImage2 = "/images/actividades/actividad3.png";

export default function Actividades() {
  return (
    <div className="bg-white min-h-screen w-full">
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
      <section className="min-h-[300px] lg:h-[440px] relative flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-33 overflow-hidden">
            <img alt="" className="absolute h-full lg:h-[245.45%] left-0 lg:left-[-1.46%] max-w-none top-0 lg:top-[-51.73%] w-full lg:w-[102.27%] object-cover" src={imgHero1} />
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.42)] inset-0" />
        </div>
        
        <div className="relative flex items-center justify-center w-full px-4">
          <div className="flex flex-col items-center justify-center py-10 lg:pr-10">
            <div className="bg-clip-text bg-gradient-to-r from-[#900] to-[#404040] font-['Inter:Bold',sans-serif] font-bold text-4xl lg:text-[72px] text-center tracking-[-1.44px] leading-[1.1] flex items-center justify-center max-w-full lg:h-[149px] lg:w-[1387px]" style={{ WebkitTextFillColor: "transparent" }}>
              <h2>Actividades</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1 - Cursos de Italiano */}
      <section className="bg-white py-12 lg:h-[950px]">
        <div className="flex items-center justify-center size-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center px-4 lg:px-[150px] py-8 lg:py-[45px] size-full">
            {/* Image - First on mobile, left on desktop */}
            <div className="h-[400px] lg:h-[662px] rounded-2xl w-full lg:w-[430px] lg:flex-shrink-0 overflow-hidden order-1 lg:order-1">
              <img alt="" className="size-full object-cover rounded-2xl" src={imgImage1} />
            </div>
            
            {/* Content Box */}
            <div className="bg-white rounded-2xl min-h-[400px] lg:h-[672px] w-full lg:w-[666px] px-6 lg:px-11 pt-6 lg:pt-[25px] pb-6 lg:pb-px flex flex-col gap-6 lg:gap-12 relative border border-[#fffefe] border-solid shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)] order-2 lg:order-2">
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic shrink-0 text-3xl lg:text-[48px] text-black tracking-[-0.96px] max-w-full lg:w-[476px]">
                  <h4 className="block leading-[1.2] whitespace-pre-wrap">Cursos de Italiano</h4>
                </div>
              </div>
              
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic shrink-0 text-base lg:text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[min-content] whitespace-pre-wrap">
                <p className="leading-[1.45] mb-0">Aprendé el idioma de tus raíces con nuestros cursos en diversos niveles y horarios flexibles entre semana, tanto presencial como a distancia.</p>
                <ul className="list-disc mb-0">
                  <li className="mb-0 ms-[36px]">
                    <span className="leading-[1.45]">Turnos: 15:00 a 17:00 hs. | 17:00 a 19:00 hs.</span>
                  </li>
                  <li className="ms-[36px]">
                    <span className="leading-[1.45]">Inscripciones: Abiertas durante todo el mes de marzo.</span>
                  </li>
                </ul>
                <p className="leading-[1.45]">Consultanos para conocer el día específico según tu nivel.</p>
              </div>
              
              <div className="flex justify-end">
                <Link to="/contacto" className="bg-[#900] flex items-end justify-end px-4 py-3 rounded-xl shrink-0 w-[144px]">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
                    <p className="leading-[1.45]">Contactarme</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 - Clases de Tango */}
      <section className="bg-[#900] py-12 lg:h-[748px]">
        <div className="flex items-center justify-center size-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center pt-2 px-4 lg:px-[150px] size-full">
            {/* Content Box */}
            <div className="bg-white rounded-2xl min-h-[400px] lg:h-[604px] w-full lg:w-[666px] px-6 lg:px-11 pt-6 lg:pt-[25px] pb-6 lg:pb-px flex flex-col gap-6 lg:gap-12 relative border border-[#fffefe] border-solid shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)] order-2 lg:order-1">
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic shrink-0 text-3xl lg:text-[48px] text-black tracking-[-0.96px] max-w-full lg:w-[476px]">
                  <h4 className="block leading-[1.2] whitespace-pre-wrap">La Nazional Tango</h4>
                </div>
              </div>
              
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic shrink-0 text-base lg:text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] max-w-full lg:w-[588px] whitespace-pre-wrap">
                <p className="leading-[1.45] mb-0">Ofreciendo clases de Milonga y realizando reuniones danzantes.</p>
                <ul className="list-disc mb-0">
                  <li className="mb-0 ms-[36px]">
                    <span className="leading-[1.45]">Días y Horarios: Consultar disponibilidad según nivel.</span>
                  </li>
                  <li className="ms-[36px]">
                    <span className="leading-[1.45]">Inscripciones: Abiertas durante todo el año.</span>
                  </li>
                </ul>
                
              </div>
              
              <div className="flex justify-end">
                <Link to="/contacto" className="bg-[#900] flex items-end justify-end px-4 py-3 rounded-xl shrink-0 w-[144px]">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
                    <p className="leading-[1.45]">Contactarme</p>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Image - First on mobile, second on desktop */}
            <div className="h-[400px] lg:h-[591px] rounded-2xl w-full lg:w-[410px] lg:flex-shrink-0 overflow-hidden order-1 lg:order-2">
              <img alt="" className="size-full object-cover rounded-2xl" src={imgImage} />
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 - Ristorante Maria Fedele */}
      <section className="bg-white py-12 lg:h-[748px]">
        <div className="flex items-center justify-center size-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center pb-8 lg:pb-[120px] pt-8 lg:pt-[122px] px-4 lg:px-[150px] size-full">
            {/* Content Box */}
            <div className="bg-white rounded-2xl min-h-[400px] lg:h-[618px] w-full lg:w-[666px] px-6 lg:px-11 pt-6 lg:pt-[25px] pb-6 lg:pb-px flex flex-col gap-6 lg:gap-8 justify-center relative border border-[#fffefe] border-solid shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)] order-2 lg:order-1">
              <div className="flex flex-col items-start w-full">
                <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic shrink-0 text-3xl lg:text-[48px] text-black tracking-[-0.96px] max-w-full lg:w-[578px]">
                  <h4 className="whitespace-pre-wrap">
                    <span className="leading-[1.2]">Ristorante</span>
                    <span className="leading-[1.2] text-[#900]">{` Maria Fedele`}</span>
                  </h4>
                </div>
              </div>
              
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic shrink-0 text-base lg:text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
                <p className="leading-[1.45] whitespace-pre-wrap mb-0">Dentro de nuestra asociación funciona el restaurant, María Fedele, ofreciendo un menú típico italiano.</p>
                
              </div>
              
              <div className="flex justify-end">
                <Link to="/contacto" className="bg-[#900] flex items-end justify-end px-4 py-3 rounded-xl shrink-0 w-[144px]">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
                    <p className="leading-[1.45]">Contactarme</p>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Image - First on mobile, second on desktop */}
            <div className="h-[400px] lg:h-[591px] rounded-2xl w-[410px] max-w-full mx-auto lg:mx-0 flex-shrink-0 overflow-hidden order-1 lg:order-2">
              <img alt="" className="size-full object-cover rounded-2xl" src={imgImage2} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}