import { Footer } from "../components/Footer";
import { Link } from "react-router";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Info, Search } from "lucide-react"; 
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { MobileNav } from "../components/MobileNav";

// --- TIPOS ---
interface ImageData {
  src: string;
  desc: string;
}

interface ModalState {
  isOpen: boolean;
  images: ImageData[];
  currentIndex: number;
}

const imgHero1 = "/images/nosotros/hero.png";
const imgFrondizi1981 = "/images/nosotros/frondizi-1981.png";

// --- NUEVAS FOTOS PARA LA SECCIÓN DUPLICADA (6 imágenes) ---
const fotosVisitaEspecial = Array.from({ length: 6 }, (_, i) => `/images/nosotros/premiacion-presidente${i + 1}.jpg`);

export default function Nosotros() {
  const [modalData, setModalData] = useState<ModalState>({ 
    isOpen: false, 
    images: [], 
    currentIndex: 0 
  });

  const espaciosInstitucion = [
    {
      titulo: "Presidenza",
      portada: "/images/nosotros/presidenza1.jpg",
      desc: "",
      fotos: Array.from({ length: 3 }, (_, i) => `/images/nosotros/presidenza${i + 1}.jpg`)
    },
    {
      titulo: "Auditorium",
      portada: "/images/nosotros/auditorium1.jpg",
      desc: "",
      fotos: Array.from({ length: 5 }, (_, i) => `/images/nosotros/auditorium${i + 1}.jpg`)
    },
    {
      titulo: "Atrio Principale",
      portada: "/images/nosotros/atrioprincipale1.jpg",
      desc: "",
      fotos: Array.from({ length: 7 }, (_, i) => `/images/nosotros/atrioprincipale${i + 1}.jpg`)
    },
    {
      titulo: "Segreteria",
      portada: "/images/nosotros/segreteria1.jpg",
      desc: "",
      fotos: Array.from({ length: 3 }, (_, i) => `/images/nosotros/segreteria${i + 1}.jpg`)
    },
    {
      titulo: "Corridoio",
      portada: "/images/nosotros/corridoio1.jpg",
      desc: "",
      fotos: Array.from({ length: 3 }, (_, i) => `/images/nosotros/corridoio${i + 1}.jpg`)
    },
    {
      titulo: "Salone D'Onore Storico",
      portada: "/images/nosotros/salonedonorestorico1.jpg",
      desc: "",
      fotos: Array.from({ length: 4 }, (_, i) => `/images/nosotros/salonedonorestorico${i + 1}.jpg`)
    },
    {
      titulo: "Aula Scolastica",
      portada: "/images/nosotros/aulascolastica1.jpg",
      desc: "",
      fotos: Array.from({ length: 3 }, (_, i) => `/images/nosotros/aulascolastica${i + 1}.jpg`)
    }
  ];

  const galleryData: ImageData[] = [
    { src: "/images/nosotros/galeria1.png", desc: "Presidente Arturo Frondizi" },
    { src: "/images/nosotros/galeria2.png", desc: "Consejo Directivo Presidente Francisco Manieri" },
    { src: "/images/nosotros/galeria3.png", desc: "Participación del presidente Arturo Frondizi al 125 aniversario de la istitucion" },
    { src: "/images/nosotros/galeria4.png", desc: "Arturo Frondizi y el Cardenal Primado Antonio Quarracino en nuesta istitucion" },
    { src: "/images/nosotros/galeria5.png", desc: "la virgen de Lujan donada por la istitucion a Roma" },
    { src: "/images/nosotros/galeria6.png", desc: "reunion socio por aniversario" },
    { src: "/images/nosotros/galeria7.png", desc: "Fachada enbanderada pora un acto istitucional" },
    { src: "/images/nosotros/galeria8.png", desc: "Enbacador Italiano en Argentina Giovanni Iannuzzi" },
    { src: "/images/nosotros/galeria9.png", desc: "Homenaje al Capitan de fregata Pedro Edgardo Giachino 1* caido en Malvina de sangre Italiana" },
    { src: "/images/nosotros/galeria10.png", desc: "Homenaje al Capitan de fregata Pedro Edgardo Giachino 1* caido en Malvina de sangre Italiana" },
    { src: "/images/nosotros/galeria11.png", desc: "Concierto de cuerda Maestro Ardolino" },
    { src: "/images/nosotros/galeria12.png", desc: "acto de Entronacion de la virjen de Lujan" },
    { src: "/images/nosotros/galeria13.png", desc: "Mesa de Trabajo de CGI Meloni, Frizzera, Grassi y Macri." },
    { src: "/images/nosotros/galeria14.png", desc: "Logotipo Institucional" },
    { src: "/images/nosotros/galeria15.png", desc: "Conmemoracion 100 aniversario, presencia de SRA Elena Faggionato de Frondizi" },
    { src: "/images/nosotros/galeria16.jpg", desc: "Galeria 16" },
     { src: "/images/nosotros/galeria20.jpg", desc: "Galeria 20" }, 
     { src: "/images/nosotros/galeria17.jpg", desc: "Galeria 17" },
       { src: "/images/nosotros/galeria18.jpg", desc: "Galeria 18" },
    { src: "/images/nosotros/galeria19.jpg", desc: "Galeria 19" },
    { src: "/images/nosotros/galeria22.jpeg", desc: "Con Motivo del 164 aniversario de su fundacion el presidente de la istitucion  Cavalier Marcelo pacifico denominar socios beneméritos a los señores Sergio Paoletti y Ariel Paoletti, por su gran contribución cultural - gastronómica al servicio de la institución, sintiéndose parte integrante de esta comunidad asociativa." },
    { src: "/images/nosotros/galeria21.jpeg", desc: "con Motivo del 164 aniversario de su fundacion el presidente de la istitucion  Cavalier marcelo pacifico al señor Francisco De Cunto, contador de la asociación, por su larga trayectoria profesional al servicio de nuestra institución, siempre a D’onoren, brindando su capacidad y hombría de bien" },
   
    { src: "/images/nosotros/galeria23.jpeg", desc: "Comición directiva festejando el 164 aniversario de la istitucion." },
    { src: "/images/nosotros/galeria24.jpeg", desc: "Vice presidente de la istitucion Arq. Rita Celia Mattiello" },
    { src: "/images/nosotros/galeria25.jpeg", desc: "El presidente Cavalier Marcelo Pacifico y el Segretario de la Istitucion Sres Davide Corso" },
    { src: "/images/nosotros/galeria26.jpeg", desc: "el  Presidente de la Istitucion Cavaler Marcelo Pacifico Con La segretaria Administrativa  Vicenta  De Marco" },
    { src: "/images/nosotros/galeria27.jpeg", desc: "Entrega de pergamena  y medalla de la istitucion" },
  ];

  const openModal = (images: (string | ImageData)[], index: number = 0) => {
    const formattedImages: ImageData[] = images.map((img) => {
      if (typeof img === "string") return { src: img, desc: "" };
      return img;
    });
    setModalData({ isOpen: true, images: formattedImages, currentIndex: index });
  };

  const closeModal = () => setModalData(prev => ({ ...prev, isOpen: false }));

  const navigate = (direction: 'next' | 'prev') => {
    setModalData(prev => {
      const newIndex = direction === 'next' 
        ? (prev.currentIndex + 1) % prev.images.length
        : (prev.currentIndex - 1 + prev.images.length) % prev.images.length;
      return { ...prev, currentIndex: newIndex };
    });
  };

  return (
    <div className="bg-white min-h-screen w-full font-sans">
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

      {/* Hero */}
      <section className="flex h-[300px] lg:h-[409px] items-center justify-center overflow-clip relative w-full">
        <div className="absolute inset-0 opacity-30">
          <img alt="" className="h-full w-full object-cover" src={imgHero1} />
        </div>
        <div className="absolute bg-white/40 inset-0" />
        <h2 className="relative bg-clip-text bg-gradient-to-r from-[#900] to-[#404040] font-bold text-4xl lg:text-[72px] text-center" style={{ WebkitTextFillColor: "transparent" }}>
          Sobre Nosotros
        </h2>
      </section>

      {/* --- RESTAURADO: Estilo Frondizi (Rosa/Marrón y Orgánico) --- */}
      <section className="py-12 lg:py-16 px-4 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-[500px] h-[350px] relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group" onClick={() => openModal([imgFrondizi1981])}>
            <img alt="Frondizi" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src={imgFrondizi1981} />
          </div>
          <div className="flex-1 p-[2px] rounded-2xl bg-gradient-to-r from-[#ffd1d1] to-[#f5f5f5]">
            <div className="bg-white p-8 rounded-2xl min-h-[350px] flex flex-col justify-center gap-4">
              <h5 className="text-[#900] text-2xl lg:text-3xl font-bold leading-tight">Arturo Frondizi y Cavalier Marcello Pacificó</h5>
              <p className="text-black/70 text-lg leading-relaxed italic">"El ex presidente Arturo Frondizi junto al presidente de la Institución con motivo de la celebración de nuestro 120 aniversario (1981)."</p>
            </div>
          </div>
        </div>
      </section>


      {/* --- NUEVA SECCIÓN DUPLICADA: Funcionalidad de Galería (6 fotos) --- */}
      <section className="py-8 lg:pb-16 px-4 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row-reverse gap-10 items-center">
          {/* Imagen a la derecha ahora para variar el ritmo visual, o dejala igual si preferís */}
          <div className="w-full lg:w-[500px] h-[350px] relative rounded-2xl overflow-hidden cursor-pointer shadow-lg group" onClick={() => openModal(fotosVisitaEspecial)}>
            <img alt="Visita Especial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={fotosVisitaEspecial[0]} />
            <div className="absolute bottom-4 right-4 bg-[#900]/90 text-white px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold shadow-lg">
              <Search size={14} /> Ver galería (6)
            </div>
          </div>
          <div className="flex-1 p-[2px] rounded-2xl bg-gradient-to-r from-[#f5f5f5] to-[#ffd1d1]">
            <div className="bg-white p-8 rounded-2xl min-h-[350px] flex flex-col justify-center gap-4">
              <h5 className="text-[#900] text-2xl lg:text-3xl font-bold leading-tight"> Entrega Placa Honoris Causa</h5>
              <p className="text-black/70 text-lg leading-relaxed italic">"Con motivo del 164º aniversario de su fundación, la vicepresidente Arq. Rita Celia Mattiello e el secretario Davide Corso entregan la placa honoris causa al presidente de la Asociación Nacional Italiana." Cavaliere della republica Italiana Marcello Pacifico"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cards de la Institución */}
      <section className="bg-gray-50/50 py-16 w-full">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-16">
          <div className="text-center mb-12">
            <h3 className="bg-clip-text bg-gradient-to-r from-[#900] to-[#666] font-bold text-4xl lg:text-[64px] mb-4" style={{ WebkitTextFillColor: "transparent" }}>Nuestra Institución</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {espaciosInstitucion.map((espacio, i) => (
              <article 
                key={i} 
                onClick={() => openModal(espacio.fotos)}
                className="bg-white rounded-2xl overflow-hidden relative border border-[rgba(0,0,0,0.1)] shadow-[0px_7px_18.8px_0px_rgba(100,0,0,0.44),0px_6px_12px_0px_rgba(0,0,0,0.03)] cursor-pointer hover:translate-y-[-4px] transition-transform duration-300 group"
              >
                <div className="relative overflow-hidden">
                   <img alt={espacio.titulo} className="w-full h-[250px] lg:h-[300px] object-cover" src={espacio.portada} />
                   <div className="absolute bottom-4 right-4 bg-[#900] text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg opacity-90 group-hover:opacity-100">
                      <Search size={16} /> Ver más fotos
                   </div>
                </div>
                <div className="p-6">
                  <h5 className="font-semibold text-2xl text-black mb-2">{espacio.titulo}</h5>
                  <p className="text-black/55 leading-relaxed font-medium">{espacio.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

 {/* Galería Institucional - Orden Cronológico Real */}
<section className="py-20 px-4 lg:px-16 w-full bg-white">
  <div className="max-w-[1400px] mx-auto">
    <div className="flex flex-col items-center mb-16 text-center">
      <h3 className="bg-clip-text bg-gradient-to-r from-[#900] to-[#666] font-bold text-4xl lg:text-[72px] mb-4" style={{ WebkitTextFillColor: "transparent" }}>
        Galería
      </h3>
      <p className="text-black/55 text-lg italic">Historia y actualidad: lo más nuevo al final de nuestra cronología</p>
    </div>

    {/* Grid de 3 columnas (Desktop) / 2 (Tablet) / 1 (Mobile) */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {galleryData.map((item, index) => (
        <div 
          key={index} 
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-50" 
          onClick={() => openModal(galleryData, index)}
        >
          {/* Imagen que ocupa todo el contenedor */}
          <img 
            src={item.src} 
            alt={item.desc}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 block" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          
          {/* Overlay que aparece en HOVER (Desktop) y al CLICK (Mobile) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-white text-sm font-medium leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {item.desc}
            </p>
          </div>

          {/* Badge de Info para guiar al usuario en Mobile */}
          <div className="absolute top-4 right-4 z-10 bg-black/20 backdrop-blur-md p-1.5 rounded-full text-white lg:hidden">
            <Info size={16} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* Modal */}
      {modalData.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={closeModal}>
          <button className="absolute top-6 right-6 text-white p-2 hover:bg-white/10 rounded-full transition-colors z-[110]"><X size={32} /></button>
          
          {modalData.images.length > 1 && (
            <>
              <button onClick={(e) => { e.stopPropagation(); navigate('prev'); }} className="absolute left-4 lg:left-10 text-white p-4 hover:bg-white/10 rounded-full z-[110]"><ChevronLeft size={48} /></button>
              <button onClick={(e) => { e.stopPropagation(); navigate('next'); }} className="absolute right-4 lg:right-10 text-white p-4 hover:bg-white/10 rounded-full z-[110]"><ChevronRight size={48} /></button>
            </>
          )}

          <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center gap-6" onClick={(e) => e.stopPropagation()}>
            <img src={modalData.images[modalData.currentIndex]?.src} className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl" alt="" />
            <div className="text-white text-center px-4">
              <p className="text-xl font-light italic mb-2">{modalData.images[modalData.currentIndex]?.desc}</p>
              {modalData.images.length > 1 && <span className="text-sm text-gray-400">Imagen {modalData.currentIndex + 1} de {modalData.images.length}</span>}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}