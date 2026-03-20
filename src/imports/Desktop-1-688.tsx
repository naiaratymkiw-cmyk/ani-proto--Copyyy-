import svgPaths from "./svg-ni6jbqea71";
import imgHero1 from "figma:asset/6ea92b92bfa2807df03bf4b469cf50cea095f4b3.png";
import imgImage from "figma:asset/a8f9c2e3e17ceb759073f68e0f449b0a86ae5e22.png";
import imgImage1 from "figma:asset/02d542d6922c9a760bfa87318babb9a4a41b2b68.png";
import imgImage2 from "figma:asset/e1264a2a7a92aeccb166fe0f591f6965bbfd2e90.png";
import imgImage3 from "figma:asset/2ebbeadac80a14945d5d98a2242e7e11f18a4dd9.png";
import imgImage4 from "figma:asset/e4b6e820040e2fc3be30666c8e53a46a6bc0b4d6.png";
import { Link } from "react-router";

function Frame7() {
  return (
    <div className="bg-[#00a840] h-[39px] overflow-clip relative rounded-[30px] shrink-0 w-[117px]">
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold inset-[8px_13.5px_8px_12.5px] justify-center leading-[0] not-italic text-[16px] text-center text-white tracking-[-0.08px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Contacto</p>
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Actividades</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Información</p>
      </div>
      <Link to="/historia" className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Historia</p>
      </Link>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Nosotros</p>
      </div>
      <Frame7 />
    </nav>
  );
}

function Header1() {
  return (
    <header className="bg-[#900] content-stretch flex items-center justify-center py-[24px] relative shrink-0 w-full" data-name="Header 1">
      <Nav />
    </header>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-[1388px]" data-name="Text">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#900] h-[149px] justify-center leading-[0] not-italic relative shrink-0 text-[72px] text-center to-[#404040] tracking-[-1.44px] w-[1387px]" style={{ WebkitTextFillColor: "transparent" }}>
        <h2 className="block leading-[1.1] whitespace-pre-wrap">Historia</h2>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pr-[40px] py-[40px] relative w-full">
          <Text />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="content-stretch flex h-[440px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Hero 1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-33 overflow-hidden">
          <img alt="" className="absolute h-[245.45%] left-[-1.46%] max-w-none top-[-51.73%] w-[102.27%]" src={imgHero1} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.42)] inset-0" />
      </div>
      <Container />
    </section>
  );
}

function Frame8() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center justify-self-stretch py-[26px] relative row-2 self-start shrink-0">
      <h2 className="bg-clip-text bg-gradient-to-r block font-['Inter:Bold',sans-serif] font-bold from-[#900] leading-[1.1] not-italic relative shrink-0 text-[128px] to-[#404040] tracking-[-2.56px]" style={{ WebkitTextFillColor: "transparent" }}>
        1861
      </h2>
    </div>
  );
}

function Frame() {
  return (
    <div className="col-1 gap-x-[17px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[618px] justify-self-start overflow-clip pl-[51px] pt-[36px] relative row-1 self-start shrink-0 w-[568px]">
      <Frame8 />
      <div aria-hidden="true" className="col-1 h-[419px] justify-self-end relative row-1 self-start shrink-0 w-[568px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col h-[58px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[476px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Fundación</h4>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col gap-[48px] h-[618px] items-start justify-center pb-px pt-[25px] px-[44px] relative rounded-[16px] row-1 shrink-0 w-[961px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[652px]">
        <p className="leading-[1.45] whitespace-pre-wrap">El 25 de marzo se declara fundada la “Società Nazionale Italiana”, en un momento histórico que coincide con la proclamación de Víctor Manuel II como rey de Italia y la unión de los italianos bajo una sola bandera. Inspirados por la lucha de su tierra natal, 233 inmigrantes deciden fundar esta entidad en tierras del Plata para dar testimonio de lealtad a sus raíces, estableciendo como pilares el socorro mutuo, la asistencia y la difusión de la cultura italiana.</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="gap-x-[60px] gap-y-[60px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] relative shrink-0 w-[1453px]">
      <Frame />
      <Content />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col h-[58px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[617px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Primera Contribución</h4>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] h-[618px] items-start justify-center pb-px pl-[83px] pr-[44px] pt-[25px] relative rounded-[16px] shrink-0 w-[825px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[698px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Este año marca el inicio de las grandes obras de bien público de la institución. Gracias a las cuotas de sus asociados y subsidios de la corona italiana, la Sociedad logra concretar su primera gran contribución para la construcción del Hospital Italiano. Debido a este apoyo fundamental, el 2 de agosto se le asigna un lugar de honor en los registros oficiales y, meses más tarde, la entidad pasa a integrar formalmente la comisión edilicia encargada del hospital.</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center justify-self-end py-[26px] relative row-2 self-start shrink-0 w-[568px]">
      <div className="bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#900] h-[133px] leading-[1.1] not-italic relative shrink-0 text-[128px] to-[#404040] tracking-[-2.56px] w-[305px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent" }}>
        <h2 className="block mb-0">1862</h2>
        <h2 className="block">&nbsp;</h2>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="gap-x-[17px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[618px] overflow-clip pl-[51px] pt-[36px] relative shrink-0 w-[568px]">
      <Frame9 />
      <div aria-hidden="true" className="col-1 h-[419px] justify-self-end relative row-1 self-start shrink-0 w-[568px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-[1384px]">
      <Content1 />
      <Frame3 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center justify-self-stretch py-[26px] relative row-2 self-start shrink-0">
      <div className="bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#900] h-[133px] leading-[1.1] not-italic relative shrink-0 text-[128px] to-[#404040] tracking-[-2.56px] w-[326px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent" }}>
        <h2 className="block mb-0">1868</h2>
        <h2 className="block">&nbsp;</h2>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[623px] overflow-clip relative shrink-0 w-[571px]">
      <Frame10 />
      <div aria-hidden="true" className="col-1 h-[419px] justify-self-end relative row-1 self-start shrink-0 w-[568px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHero1} />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex h-[623px] items-center justify-center pr-[3px] relative shrink-0 w-[568px]">
      <Frame6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col h-[104px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[688px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Primera escuela de Italiano en LATAM</h4>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[52px] h-[618px] items-start justify-center pb-px pt-[25px] px-[44px] relative rounded-[16px] shrink-0 w-[961px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[652px]">
        <p className="leading-[1.45] whitespace-pre-wrap">El 26 de diciembre se produce un hito para la educación en el continente con la fundación de la primera escuela elemental de idioma italiano en Latinoamérica, ubicada en la calle La Piedad 418. Con apenas 33 alumnos iniciales —entre los que figurarían futuras personalidades como Pío Collivadino e Iris Marga—, la institución inicia un ambicioso proyecto educativo gratuito que luego se extendería a barrios como La Boca, incluyendo formación técnica, artística y musical.</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-[1453px]">
      <Frame5 />
      <Content2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col h-[58px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[617px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Compromiso Social</h4>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] h-[618px] items-start justify-center pb-px pl-[83px] pr-[44px] pt-[25px] relative rounded-[16px] shrink-0 w-[823px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text4 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[696px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Durante la devastadora tragedia de la fiebre amarilla en Buenos Aires, la asociación demuestra su compromiso social brindando una labor de ayuda heroica. La entidad contribuyó con la totalidad de los fondos que tenía en caja para atender a los enfermos y organizó la logística necesaria para instalar 10 puestos de socorros distribuidos estratégicamente en distintos barrios de la ciudad.</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center justify-self-stretch py-[26px] relative row-2 self-start shrink-0">
      <div className="bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#900] h-[133px] leading-[1.1] not-italic relative shrink-0 text-[128px] to-[#404040] tracking-[-2.56px] w-[305px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent" }}>
        <h2 className="block mb-0">1870</h2>
        <h2 className="block">&nbsp;</h2>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="gap-x-[17px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[618px] overflow-clip pl-[51px] pt-[36px] relative shrink-0 w-[568px]">
      <Frame13 />
      <div aria-hidden="true" className="col-1 h-[419px] justify-self-end relative row-1 self-start shrink-0 w-[568px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center pl-[43px] py-[240px] relative shrink-0 w-[368px]">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#900] h-[149px] justify-center leading-[0] not-italic relative shrink-0 text-[128px] to-[#404040] tracking-[-2.56px] w-[355px]" style={{ WebkitTextFillColor: "transparent" }}>
        <h2 className="block leading-[1.1] whitespace-pre-wrap">1870</h2>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-[1453px]">
      <Content3 />
      <Frame12 />
      <Frame14 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center justify-self-stretch py-[26px] relative row-2 self-start shrink-0">
      <div className="bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#900] h-[133px] leading-[1.1] not-italic relative shrink-0 text-[128px] to-[#404040] tracking-[-2.56px] w-[305px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent" }}>
        <h2 className="block mb-0">1877</h2>
        <h2 className="block">&nbsp;</h2>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="gap-x-[17px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[618px] overflow-clip pl-[51px] pt-[36px] relative shrink-0 w-[568px]">
      <Frame18 />
      <div aria-hidden="true" className="col-1 h-[419px] justify-self-end relative row-1 self-start shrink-0 w-[568px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex h-[618px] items-center justify-center pr-[3px] py-[240px] relative shrink-0 w-[600px]">
      <Frame17 />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col h-[104px] items-start mb-[-30px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[688px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">El hogar definitivo</h4>
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[618px] items-start justify-center pb-[31px] pt-[25px] px-[44px] relative rounded-[16px] shrink-0 w-[961px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text5 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] mb-[-30px] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[652px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Siete años después de la crisis sanitaria, la asociación entra en una nueva y más pujante etapa de su existencia. Este crecimiento se materializa con la construcción y mudanza a su nueva sede social ubicada en la calle Alsina 1465. Este edificio se convirtió en el corazón de sus actividades y continúa siendo el domicilio de la institución hasta el día de hoy.</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[60px] h-[640px] items-start relative shrink-0 w-[1453px]">
      <Frame16 />
      <Content4 />
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col h-[58px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[617px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">El fortalecimiento del socorro mutuo</h4>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] h-[618px] items-start justify-center pb-px pl-[83px] pr-[44px] pt-[25px] relative rounded-[16px] shrink-0 w-[808px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text6 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[654px]">
        <p className="leading-[1.45] whitespace-pre-wrap">La entidad reorganiza aspectos clave de su funcionamiento y adopta el nombre de Associazione di Mutuo Soccorso e Cultura Nazionale Italiana. Bajo esta nueva denominación, la asociación volcó gran parte de su presupuesto al área asistencial, reforzando sus servicios médicos y de farmacia hasta contar con un equipo de 17 profesionales y sistemas de emergencia e internación contratados especialmente.</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center justify-self-stretch py-[26px] relative row-2 self-start shrink-0">
      <div className="bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#900] h-[133px] leading-[1.1] not-italic relative shrink-0 text-[128px] to-[#404040] tracking-[-2.56px] w-[323px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent" }}>
        <h2 className="block mb-0">1896</h2>
        <h2 className="block">&nbsp;</h2>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="gap-x-[17px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[618px] overflow-clip pl-[51px] pt-[36px] relative shrink-0 w-[568px]">
      <Frame22 />
      <div aria-hidden="true" className="col-1 h-[419px] justify-self-end relative row-1 self-start shrink-0 w-[568px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex h-[618px] items-center justify-center pl-[43px] py-[240px] relative shrink-0 w-[516px]">
      <Frame21 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[60px] items-center relative shrink-0 w-[1384px]">
      <Content5 />
      <Frame20 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="col-1 content-stretch flex items-center justify-center justify-self-stretch py-[26px] relative row-2 self-start shrink-0">
      <div className="bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#900] h-[133px] leading-[1.1] not-italic relative shrink-0 text-[128px] to-[#404040] tracking-[-2.56px] w-[400px] whitespace-pre-wrap" style={{ WebkitTextFillColor: "transparent" }}>
        <h2 className="block mb-0">2020?</h2>
        <h2 className="block">&nbsp;</h2>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="gap-x-[17px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___fit-content(100%)_fit-content(100%)_minmax(0,1fr)] h-[618px] overflow-clip pl-[51px] pt-[36px] relative shrink-0 w-[568px]">
      <Frame26 />
      <div aria-hidden="true" className="col-1 h-[419px] justify-self-end relative row-1 self-start shrink-0 w-[568px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex h-[618px] items-center justify-center pr-[3px] py-[240px] relative shrink-0 w-[600px]">
      <Frame25 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col h-[104px] items-start mb-[-30px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[688px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Restauración Fachada</h4>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[618px] items-start justify-center pb-[31px] pt-[25px] px-[44px] relative rounded-[16px] shrink-0 w-[961px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text7 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] mb-[-30px] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[652px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Siete años después de la crisis sanitaria, la asociación entra en una nueva y más pujante etapa de su existencia. Este crecimiento se materializa con la construcción y mudanza a su nueva sede social ubicada en la calle Alsina 1465. Este edificio se convirtió en el corazón de sus actividades y continúa siendo el domicilio de la institución hasta el día de hoy.</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[60px] items-start relative shrink-0 w-[1453px]">
      <Frame24 />
      <Content6 />
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]" data-name="Company">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[24px] text-black text-center tracking-[-0.48px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Namedly</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Text">
      <Company />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[1.45] whitespace-pre-wrap">Descriptive line about what your company does.</p>
      </div>
    </div>
  );
}

function SocialLink() {
  return (
    <button className="block relative shrink-0 size-[24px]" data-name="Social link 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_317)" id="Social link 1">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_317">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function SocialLink1() {
  return (
    <button className="block relative shrink-0 size-[24px]" data-name="Social link 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_314)" id="Social link 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="black" fillOpacity="0.45" fillRule="evenodd" />
            <path d={svgPaths.pe7ea00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ab31680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28c6df0} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_314">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function SocialLink2() {
  return (
    <button className="block relative shrink-0 size-[24px]" data-name="Social link 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Social link 3">
          <path d={svgPaths.pdaf0200} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function SocialLinks() {
  return (
    <nav className="content-stretch cursor-pointer flex gap-[24px] items-center relative shrink-0" data-name="Social links">
      <SocialLink />
      <SocialLink1 />
      <SocialLink2 />
    </nav>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text8 />
      <SocialLinks />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Features</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 1">
      <Header />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Core features</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Pro experience</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Integrations</p>
      </div>
    </nav>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Learn more</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 2">
      <Header2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Blog</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Case studies</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Customer stories</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Best practices</p>
      </div>
    </nav>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Support</p>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 3">
      <Header3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Contact</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Support</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Legal</p>
      </div>
    </nav>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0" data-name="Nav">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[120px] items-center justify-center px-[88px] py-[80px] relative shrink-0 w-[1441px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Content7 />
      <Nav1 />
    </div>
  );
}

function Feature() {
  return (
    <section className="h-[4119px] relative shrink-0 w-full" data-name="Feature 1">
      <div className="content-stretch flex flex-col gap-[60px] items-start pr-[119px] py-[45px] relative size-full">
        <Frame1 />
        <Frame2 />
        <Frame4 />
        <Frame11 />
        <Frame15 />
        <Frame19 />
        <Frame23 />
        <Container1 />
      </div>
    </section>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <Header1 />
      <Hero />
      <Feature />
    </div>
  );
}