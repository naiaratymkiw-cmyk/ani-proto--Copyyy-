import { Link } from "react-router";
import svgPaths from "../../imports/svg-q1th159rd1";
import { toast } from "sonner";

export function Footer() {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const email = "asociacionnazionaleitaliana@gmail.com";
    
    // Copy to clipboard
    navigator.clipboard.writeText(email).then(() => {
      toast.success("Email copiado al portapapeles!", {
        description: email,
        duration: 3000,
      });
    }).catch(() => {
      toast.error("No se pudo copiar el email");
    });
    
    // Also try to open email client (for those who have one)
    window.location.href = `mailto:${email}`;
  };

  return (
    <footer className="bg-[rgba(0,168,64,0.11)] py-12 lg:py-20 w-full">
      <div className="flex items-center justify-center size-full px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[120px] items-start py-8 lg:py-12 w-full max-w-[1920px] relative border-t border-[#900] border-solid">
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8 lg:gap-14 w-full lg:w-auto">
            <div className="flex flex-col gap-2">
              <h3 className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-xl lg:text-2xl text-black tracking-[-0.48px] leading-[1.45] max-w-full">
                Associazione Nazionale Italiana
              </h3>
              <p className="font-['Inter:Medium',sans-serif] font-medium text-sm lg:text-base text-[rgba(0,0,0,0.55)] tracking-[-0.08px] leading-[1.45]">
                Hogar de la cultura y tradición italiana en Argentina
              </p>
            </div>
          </div>
          
          {/* Right Navigation */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-10 w-full lg:w-auto">
            {/* Column 1 - Inicio */}
            <nav className="flex flex-col gap-2 min-w-0">
              <div className="pb-4">
                <Link to="/" className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-sm lg:text-base text-black tracking-[-0.08px] leading-[1.45] cursor-pointer">
                  Inicio
                </Link>
              </div>
              <Link to="/historia" className="font-['Inter:Medium',sans-serif] font-medium text-sm lg:text-base text-[rgba(0,0,0,0.55)] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:text-[rgba(0,0,0,0.75)] transition-colors">
                Historia
              </Link>
              <Link to="/actividades" className="font-['Inter:Medium',sans-serif] font-medium text-sm lg:text-base text-[rgba(0,0,0,0.55)] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:text-[rgba(0,0,0,0.75)] transition-colors">
                Actividades
              </Link>
              <Link to="/informacion" className="font-['Inter:Medium',sans-serif] font-medium text-sm lg:text-base text-[rgba(0,0,0,0.55)] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:text-[rgba(0,0,0,0.75)] transition-colors">
                Información
              </Link>
              <Link to="/nosotros" className="font-['Inter:Medium',sans-serif] font-medium text-sm lg:text-base text-[rgba(0,0,0,0.55)] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:text-[rgba(0,0,0,0.75)] transition-colors">
                Nosotros
              </Link>
            </nav>
            
            {/* Column 2 - Contacto */}
            <nav className="flex flex-col gap-2 min-w-0 flex-1">
              <div className="pb-4">
                <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-sm lg:text-base text-black tracking-[-0.08px] leading-[1.45]">
                  Contacto
                </p>
              </div>
              <a href="tel:+541143814054" className="font-['Inter:Medium',sans-serif] font-medium text-sm lg:text-base text-[rgba(0,0,0,0.55)] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:text-[rgba(0,0,0,0.75)] transition-colors">
                11 4381-4054
              </a>
              <a href="mailto:asociacionnazionaleitaliana@gmail.com" onClick={handleEmailClick} className="font-['Inter:Medium',sans-serif] font-medium text-sm lg:text-base text-[rgba(0,0,0,0.55)] tracking-[-0.08px] leading-[1.45] underline cursor-pointer break-words hover:text-[rgba(0,0,0,0.75)] transition-colors">
                asociacionnazionaleitaliana@gmail.com
              </a>
              <a href="https://maps.app.goo.gl/DzuiMFVJiHt8PAo68" target="_blank" rel="noopener noreferrer" className="font-['Inter:Medium',sans-serif] font-medium text-sm lg:text-base text-[rgba(0,0,0,0.55)] tracking-[-0.08px] leading-[1.45] cursor-pointer hover:text-[rgba(0,0,0,0.75)] transition-colors">
                Adolfo Alsina 1465
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}