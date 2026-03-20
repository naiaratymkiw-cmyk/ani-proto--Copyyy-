import { Footer } from "../components/Footer";
import { Link } from "react-router";
import svgPaths from "../../imports/svg-q1th159rd1";
import { MobileNav } from "../components/MobileNav";
import { useState } from "react";
import { toast, Toaster } from "sonner";

// Imágenes locales - Página Contacto
const imgHero1 = "/images/contacto/hero.png";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    documento: ''
  });

  const handleEmailCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "asociacionnazionaleitaliana@gmail.com";
    const subject = "Consulta";
    const body = "Hola! Quisiera saber más sobre la Asociación.";
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      toast.success("Email copiado al portapapeles!", {
        description: email,
        duration: 3000,
      });
    }).catch(() => {
      toast.error("No se pudo copiar el email");
    });
    
    // Also try to open email client
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields are required
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.telefono.trim() || !formData.documento.trim()) {
      toast.error('¡Campos requeridos!', {
        description: 'Por favor completa todos los campos.',
        duration: 3000,
      });
      return;
    }
    
    const email = "asociacionnazionaleitaliana@gmail.com";
    const subject = "Solicitud de Asociación";
    const body = "Hola! Me gustaría asociarme a la Asociación Nacional Italiana.\n\nMis datos son:\n\nNombre Completo: " + formData.nombre + "\nE-mail: " + formData.email + "\nNro de Teléfono: " + formData.telefono + "\nDocumento (DNI): " + formData.documento + "\n\nQuedo a la espera de su respuesta.\n\nSaludos cordiales.";

    const fullMessage = "Para: " + email + "\nAsunto: " + subject + "\n\n" + body;

    const mailtoLink = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    
    // Copy the ENTIRE message to clipboard
    navigator.clipboard.writeText(fullMessage).then(() => {
      toast.success('¡Mensaje copiado al portapapeles!', {
        description: 'Si no se abrió tu email, llamanos al 11 4381-4054',
        duration: 6000,
      });
    }).catch(() => {
      // Fallback if clipboard fails
      toast.info('¡Listo!', {
        description: 'Si no se abrió tu email, llamanos al 11 4381-4054',
        duration: 6000,
      });
    });
    
    // Try to open email client
    window.location.href = mailtoLink;
  };

  const isFormValid = formData.nombre.trim() !== '' && formData.email.trim() !== '' && formData.telefono.trim() !== '' && formData.documento.trim() !== '';

  return (
    <div className="bg-white min-h-screen w-full">
      <Toaster richColors position="top-center" />
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
      <section className="flex min-h-[300px] lg:h-[440px] items-center justify-center overflow-clip relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-33 overflow-hidden">
            <img alt="" className="absolute h-full w-full object-cover" src={imgHero1} />
          </div>
          <div className="absolute bg-[rgba(255,255,255,0.42)] inset-0" />
        </div>
        
        <div className="flex-[1_0_0] min-h-px min-w-px relative">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="flex flex-col items-center justify-center px-4 lg:pr-10 py-10 relative w-full">
              <div className="flex flex-col items-center justify-center shrink-0 w-full max-w-[1388px]">
                <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#900] min-h-[80px] lg:h-[149px] justify-center leading-[0] not-italic relative shrink-0 text-4xl lg:text-[72px] text-center to-[#404040] tracking-[-1.44px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
                  <h2 className="block leading-[1.1] whitespace-pre-wrap">Contacto</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards Section */}
      <section className="py-6 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-center justify-center px-4 lg:px-[150px]">
          {/* Email Card */}
          <a 
            href="mailto:asociacionnazionaleitaliana@gmail.com?subject=Consulta&body=Hola! Quisiera saber más sobre la Asociación."
            className="bg-white flex flex-col gap-2 lg:gap-[15px] min-h-[200px] lg:h-[366px] items-center justify-center w-full max-w-[380px] lg:w-[380px] py-4 cursor-pointer group"
            onClick={handleEmailCardClick}
          >
            <div className="bg-[#900] rounded-full shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] size-[70px] lg:size-[108px] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-200">
              <div className="-translate-x-1/2 absolute aspect-[24.894691467285156/24.894691467285156] bottom-[16px] lg:bottom-[24.5px] left-1/2 top-[15px] lg:top-[23.5px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g />
                </svg>
                <div className="absolute inset-[16.67%_8.33%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 40">
                    <path d={svgPaths.p1ce22e00} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-lg lg:text-2xl text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] leading-[1.45] w-full max-w-[288px]">
              Email
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-xs lg:text-sm text-[#1a202c] text-center tracking-[-0.28px] leading-[1.5] lg:leading-[1.75] w-full max-w-[305px] px-4 [text-decoration-skip-ink:none] decoration-solid underline">
              asociacionnazionaleitaliana@gmail.com
            </p>
          </a>

          {/* Phone Card */}
          <a 
            href="tel:+541143814054"
            className="bg-white flex flex-col gap-2 lg:gap-[15px] min-h-[200px] lg:h-[366px] items-center justify-center w-full max-w-[380px] lg:w-[380px] py-4 cursor-pointer group"
          >
            <div className="bg-[#900] rounded-full shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] size-[70px] lg:size-[108px] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-200">
              <div className="-translate-x-1/2 absolute aspect-[24.894691467285156/24.894691467285156] bottom-[16px] lg:bottom-[24.5px] left-1/2 overflow-clip top-[15px] lg:top-[23.5px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g />
                </svg>
                <div className="absolute inset-[8.33%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                    <path d={svgPaths.pd124700} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-lg lg:text-2xl text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] leading-[1.45] w-full max-w-[288px]">
              Telefono
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-xs lg:text-sm text-[#1a202c] text-center tracking-[-0.28px] leading-[1.5] lg:leading-[1.75] w-full max-w-[276px] px-4">11 4381-4054</p>
          </a>

          {/* Address Card */}
          <a 
            href="https://maps.app.goo.gl/DzuiMFVJiHt8PAo68"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex flex-col gap-2 lg:gap-[15px] min-h-[200px] lg:h-[366px] items-center justify-center w-full max-w-[380px] lg:w-[380px] py-4 cursor-pointer group"
          >
            <div className="bg-[#900] rounded-full shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] size-[70px] lg:size-[108px] flex items-center justify-center relative group-hover:scale-110 transition-transform duration-200">
              <div className="absolute aspect-[24.894691467285156/24.894691467285156] left-[15.5px] lg:left-[24px] overflow-clip right-[15.5px] lg:right-[24px] top-[13px] lg:top-[20.5px]">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g />
                </svg>
                <div className="absolute inset-[8.33%]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
                    <path d={svgPaths.p3817ff00} fill="white" />
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold text-lg lg:text-2xl text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] leading-[1.45] w-full max-w-[288px]">
              {`Dirección `}
            </h3>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal text-xs lg:text-sm text-[#1a202c] text-center tracking-[-0.28px] leading-[1.5] lg:leading-[1.75] w-full max-w-[276px] px-4">Adolfo Alsina 1465 (C1088AAK) - Buenos Aires - Argentina</p>
          </a>
        </div>
      </section>

      {/* Form Section */}
      <section className="min-h-[600px] lg:h-[848px] relative shrink-0 w-full py-8 lg:py-0">
        <div className="flex flex-row justify-center size-full">
          <div className="flex items-start justify-center pt-8 lg:pt-[54px] px-4 lg:px-[150px] relative size-full">
            {/* Form with Gradient Border and Shadow */}
            <div className="min-h-[600px] lg:h-[716px] relative rounded-2xl lg:rounded-bl-[74px] lg:rounded-tr-[51px] shrink-0 w-full max-w-[1025px]">
              <div className="flex flex-col gap-6 lg:gap-[27px] items-center justify-center overflow-clip relative rounded-[inherit] size-full px-4 py-8 lg:p-0">
                <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#404040] text-3xl lg:text-5xl text-center tracking-[-0.24px] w-full max-w-[726px]">
                  <p className="leading-[1.45] whitespace-pre-wrap">{`¿Querés Asociarte? `}</p>
                </div>

                {/* Nombre Completo */}
                <div className="flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full max-w-[468px]">
                  <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#404040] text-sm lg:text-base tracking-[0.16px] w-full whitespace-pre-wrap">
                    <span className="leading-[1.5]">Nombre Completo</span>
                    <span className="leading-[1.5]">{` `}</span>
                    <span className="leading-[1.5] text-[#ed0131]">*</span>
                  </p>
                  <div className="relative rounded-[4px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[rgba(64,64,64,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-col items-start p-3 relative w-full">
                      <input 
                        type="text"
                        placeholder="Ejemplo Nombre"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="bg-transparent border-none flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic outline-none relative shrink-0 text-[#b8bcca] text-sm lg:text-base tracking-[0.16px] w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full max-w-[468px]">
                  <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#404040] text-sm lg:text-base tracking-[0.16px] w-full whitespace-pre-wrap">
                    <span className="leading-[1.5]">E-mail</span>
                    <span className="leading-[1.5]">{` `}</span>
                    <span className="leading-[1.5] text-[#ed0131]">*</span>
                  </p>
                  <div className="relative rounded-[4px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[rgba(64,64,64,0.59)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-col items-start p-3 relative w-full">
                      <input 
                        type="email"
                        placeholder="Ejemplo@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-transparent border-none flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic outline-none relative shrink-0 text-[#b8bcca] text-sm lg:text-base tracking-[0.16px] w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Nro de Telefono */}
                <div className="flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full max-w-[468px]">
                  <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#404040] text-sm lg:text-base tracking-[0.16px] w-full whitespace-pre-wrap">
                    <span className="leading-[1.5]">Nro de Telefono</span>
                    <span className="leading-[1.5]">{` `}</span>
                    <span className="leading-[1.5] text-[#ed0131]">*</span>
                  </p>
                  <div className="relative rounded-[4px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[rgba(64,64,64,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-col items-start p-3 relative w-full">
                      <input 
                        type="tel"
                        placeholder="+5432450..."
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="bg-transparent border-none flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic outline-none relative shrink-0 text-[#b8bcca] text-sm lg:text-base tracking-[0.16px] w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Documento (DNI) */}
                <div className="flex flex-col gap-[2px] items-start overflow-clip relative shrink-0 w-full max-w-[468px]">
                  <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#404040] text-sm lg:text-base tracking-[0.16px] w-full whitespace-pre-wrap">
                    <span className="leading-[1.5]">Documento (DNI)</span>
                    <span className="leading-[1.5]">{` `}</span>
                    <span className="leading-[1.5] text-[#ed0131]">*</span>
                  </p>
                  <div className="relative rounded-[4px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border border-[rgba(64,64,64,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-col items-start p-3 relative w-full">
                      <input 
                        type="text"
                        placeholder="32.567.431"
                        value={formData.documento}
                        onChange={(e) => setFormData({ ...formData, documento: e.target.value })}
                        className="bg-transparent border-none flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic outline-none relative shrink-0 text-[#b8bcca] text-sm lg:text-base tracking-[0.16px] w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  className={`flex items-center justify-center px-6 lg:px-4 py-4 lg:py-3 relative rounded-xl shrink-0 w-full max-w-[468px] min-h-[44px] transition-all ${
                    isFormValid 
                      ? 'bg-[#900] cursor-pointer hover:bg-[#b00]' 
                      : 'bg-[rgba(153,0,0,0.4)] cursor-not-allowed'
                  }`}
                  onClick={handleSubmit} 
                  disabled={!isFormValid}
                >
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-base lg:text-lg text-center text-white tracking-[-0.09px] whitespace-nowrap">
                    <p className="leading-[1.45]">Asociarme</p>
                  </div>
                </button>
              </div>
              
              {/* Gradient Border with Shadow - Simplified on Mobile */}
              <div 
                aria-hidden="true" 
                className="absolute border border-solid inset-0 pointer-events-none rounded-2xl lg:rounded-bl-[74px] lg:rounded-tr-[51px] shadow-[0px_5px_38.7px_-6px_#900]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}