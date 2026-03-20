import svgPaths from "./svg-o4vele9z9e";
import imgHero1 from "figma:asset/1c86e539205022461e788cbb874348bad39f6e0a.png";
import imgImage from "figma:asset/635ab4ecd38e46ee3819135a543ca1e9c0169912.png";
import img360F632011725WLo7D2Z2Hv4Wg4Pryecac43GxlJkqv5B1 from "figma:asset/529fb43a5368a24c2c2e6095a2abbbca6f847168.png";
import imgTangoEvento1 from "figma:asset/21cbfe438b6ce5a16f4f3b3507a64d61b62f8bac.png";

function Frame() {
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Inicio</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Actividades</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Información</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Historia</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fffefe] text-[16px] text-center tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Nosotros</p>
      </div>
      <Frame />
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
        <h2 className="block leading-[1.1] whitespace-pre-wrap">Información</h2>
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

function Text1() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-start relative shrink-0 w-[599px]" data-name="Text">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#404040] justify-center leading-[0] not-italic relative shrink-0 text-[64px] to-[#900] tracking-[-1.28px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Descubriendo Italia</h4>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#900] content-stretch cursor-pointer flex items-end justify-end px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[144px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] w-[112px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Ver más</p>
      </div>
    </button>
  );
}

function Content() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[528px] items-end justify-center pb-px pt-[25px] px-[44px] relative rounded-[16px] shrink-0 w-[666px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)]" />
      <Text1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[1.45] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full whitespace-pre-wrap">
        <p className="mb-0">Además de los cursos de lengua, ofrecemos encuentros dedicados a explorar la riqueza del arte, la geografía y las costumbres de la península.</p>
        <p>Es un punto de encuentro para quienes desean entender no solo cómo se habla, sino cómo se siente y se vive Italia.</p>
      </div>
      <Button />
    </div>
  );
}

function Feature() {
  return (
    <section className="h-[842px] relative shrink-0 w-full" data-name="Feature 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center pb-[45px] pt-[5px] px-[150px] relative size-full">
          <div aria-hidden="true" className="h-[528px] relative rounded-[16px] shrink-0 w-[410px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
          </div>
          <Content />
        </div>
      </div>
    </section>
  );
}

function Header() {
  return (
    <div className="bg-[#900] content-stretch flex flex-col gap-[24px] items-center justify-center leading-[0] pt-[72px] relative shrink-0 text-white w-full whitespace-nowrap" data-name="Header">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[64px] tracking-[-1.28px]">
        <h3 className="block leading-[1.2]">Aprendé sobre Italia</h3>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[20px] tracking-[-0.1px]">
        <p className="leading-[1.45]">Que las fronteras no te limiten a poder conocer y vivir Italia</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
          <h5 className="block leading-[1.45] whitespace-pre-wrap">La riqueza histórica de Urbino</h5>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
          <p className="leading-[1.4] whitespace-pre-wrap">Un recorrido cultural por Urbino, cuna del Renacimiento, explorando su arquitectura....</p>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <Text2 />
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <article className="bg-white block rounded-[16px] size-full" data-name="Card 1">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] w-full">
        <div className="h-[348px] relative shrink-0 w-[522px]" data-name="360_F_632011725_wLo7D2z2Hv4Wg4Pryecac43GXLJkqv5b 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img360F632011725WLo7D2Z2Hv4Wg4Pryecac43GxlJkqv5B1} />
        </div>
        <Body />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_18.8px_0px_rgba(100,0,0,0.44),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </article>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic px-[24px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[24px] text-black tracking-[-0.48px] w-full">
          <h5 className="block leading-[1.45] whitespace-pre-wrap">Puglia</h5>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
          <p className="leading-[1.4] whitespace-pre-wrap">Un fascinante viaje por la región de Puglia, en el sur de Italia, descubriendo sus paisajes...</p>
        </div>
      </div>
    </div>
  );
}

function Body1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[24px] relative w-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <article className="bg-white block rounded-[16px] size-full" data-name="Card 2">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="h-[347px] relative shrink-0 w-[554px]" data-name="tango-evento 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTangoEvento1} />
        </div>
        <Body1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_18.8px_0px_rgba(100,0,0,0.44),0px_6px_12px_0px_rgba(0,0,0,0.03)]" />
    </article>
  );
}

function Button1() {
  return (
    <a className="bg-white block content-stretch cursor-pointer flex items-center justify-between px-[16px] py-[12px] rounded-[12px] size-full" data-name="Button" href="https://www.youtube.com/@ideaitalia6773">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#900] text-[18px] text-center tracking-[-0.09px] w-[112px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Ver Más</p>
      </div>
    </a>
  );
}

function FeatureCards() {
  return (
    <div className="bg-[#900] h-[698px] relative shrink-0 w-full" data-name="Feature cards 2">
      <ul className="gap-x-[32px] gap-y-[32px] grid grid-cols-[__521px_521px] grid-rows-[repeat(2,fit-content(100%))] pb-[120px] pt-[61px] px-[177px] relative rounded-[inherit] size-full">
        <li className="col-1 justify-self-center relative row-1 self-start shrink-0 w-[521px]">
          <Card />
        </li>
        <li className="col-2 h-[489px] justify-self-center relative row-1 self-start shrink-0 w-[520px]">
          <Card1 />
        </li>
        <li className="col-2 justify-self-end relative row-2 self-start shrink-0 w-[144px]">
          <Button1 />
        </li>
      </ul>
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[100px]" data-name="Company">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center tracking-[-0.48px] w-[354px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Associazione Nazionale Italiana</p>
      </div>
    </div>
  );
}

function Text4() {
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_30_197)" id="Social link 1">
          <path d={svgPaths.p3c382d72} fill="var(--fill-0, black)" fillOpacity="0.45" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_30_197">
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_30_194)" id="Social link 2">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p1fcf5070} fill="black" fillOpacity="0.45" fillRule="evenodd" />
            <path d={svgPaths.pe7ea00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ab31680} fill="var(--fill-0, white)" />
            <path d={svgPaths.p28c6df0} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_30_194">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function SocialLinks() {
  return (
    <nav className="content-stretch cursor-pointer flex gap-[24px] items-center relative shrink-0" data-name="Social links">
      <SocialLink />
      <SocialLink1 />
    </nav>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text4 />
      <SocialLinks />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Inicio</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 1">
      <Header2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Historia</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Actividades</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Información</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Nosotros</p>
      </div>
    </nav>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Contacto</p>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[311px]" data-name="Column 2">
      <Header3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[1.45] whitespace-pre-wrap">11 4381-4054</p>
      </div>
      <a className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-[311px]" href="mailto:asociacionnazionaleitaliana@gmail.com">
        <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[1.45] underline whitespace-pre-wrap">asociacionnazionaleitaliana@gmail.com</p>
      </a>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.55)] tracking-[-0.08px] w-[min-content]">
        <p className="leading-[1.45] whitespace-pre-wrap">{`Adolfo Alsina 1465 `}</p>
      </div>
    </nav>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-[578px]" data-name="Nav">
      <Column />
      <Column1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[120px] items-start min-h-px min-w-px py-[80px] relative" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#900] border-solid border-t inset-0 pointer-events-none" />
      <Content1 />
      <Nav1 />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[rgba(0,168,64,0.11)] content-stretch flex h-[409px] items-center justify-center overflow-clip px-[64px] relative shrink-0 w-[1440px]" data-name="Footer 4">
      <Container1 />
    </footer>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <Header1 />
      <Hero />
      <Feature />
      <Header />
      <FeatureCards />
      <Footer />
    </div>
  );
}