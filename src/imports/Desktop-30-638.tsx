import svgPaths from "./svg-q1th159rd1";
import imgHero1 from "figma:asset/5da4250fbc9ea87dd8323da1e6323830ab330219.png";

function Frame4() {
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
      <Frame4 />
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
        <h2 className="block leading-[1.1] whitespace-pre-wrap">Contacto</h2>
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

function CircleSec() {
  return (
    <div className="bg-[#900] relative rounded-[200px] shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] shrink-0 size-[108px]" data-name="circle sec-">
      <div className="-translate-x-1/2 absolute aspect-[24.894691467285156/24.894691467285156] bottom-[24.5px] left-1/2 top-[23.5px]" data-name="business/mail-fill">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 40">
            <path d={svgPaths.p1ce22e00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15px] h-[366px] items-center justify-center overflow-clip relative shrink-0 w-[380px]">
      <CircleSec />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] w-[288px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Email</p>
      </div>
      <a className="block font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[62px] leading-[0] relative shrink-0 text-[#1a202c] text-[16px] text-center tracking-[-0.32px] w-[305px]" href="mailto:asociacionnazionaleitaliana@gmail.com">
        <p className="[text-decoration-skip-ink:none] cursor-pointer decoration-solid leading-[1.75] underline whitespace-pre-wrap">asociacionnazionaleitaliana@gmail.com</p>
      </a>
    </div>
  );
}

function IconCoolIconN() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[62px] left-[calc(50%-0.5px)] top-[calc(50%+0.5px)] w-[61px]" data-name="icon cool-icon-n8" />;
}

function CircleSec1() {
  return (
    <div className="bg-[#900] relative rounded-[200px] shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] shrink-0 size-[108px]" data-name="circle sec-">
      <IconCoolIconN />
      <div className="-translate-x-1/2 absolute aspect-[24.894691467285156/24.894691467285156] bottom-[24.5px] left-1/2 overflow-clip top-[23.5px]" data-name="business/chat-3-fill">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
            <path d={svgPaths.pd124700} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15px] h-[366px] items-center justify-center overflow-clip relative shrink-0 w-[380px]">
      <CircleSec1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] w-[288px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Telefono</p>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[62.004px] leading-[1.75] relative shrink-0 text-[#1a202c] text-[16px] text-center tracking-[-0.32px] w-[276.484px] whitespace-pre-wrap">0054 11) 4381-4054</p>
    </div>
  );
}

function IconCoolIconN1() {
  return <div className="absolute bottom-1/4 left-[26.39%] right-[29.17%] top-[30.56%]" data-name="icon cool-icon-n8" />;
}

function InFlight() {
  return <div className="absolute inset-[35.5px_36px_35.5px_35px]" data-name="InFlight" />;
}

function CircleSec2() {
  return (
    <div className="bg-[#900] overflow-clip relative rounded-[200px] shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] shrink-0 size-[108px]" data-name="circle sec-">
      <IconCoolIconN1 />
      <InFlight />
      <div className="absolute aspect-[24.894691467285156/24.894691467285156] left-[24px] overflow-clip right-[24px] top-[20.5px]" data-name="buildings/bank-fill">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 50">
            <path d={svgPaths.p3817ff00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15px] h-[366px] items-center justify-center overflow-clip relative shrink-0 w-[380px]">
      <CircleSec2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] w-[288px]">
        <p className="leading-[1.45] whitespace-pre-wrap">{`Dirección `}</p>
      </div>
      <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[62.004px] leading-[1.75] relative shrink-0 text-[#1a202c] text-[16px] text-center tracking-[-0.32px] w-[276.484px] whitespace-pre-wrap">Adolfo Alsina 1465 (C1088AAK) - Buenos Aires - Argentina</p>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[24px] h-[376px] items-center justify-center pt-[39px] px-[150px] relative shrink-0 w-[1440px]" data-name="Header">
      <Frame />
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Text Block">
      <div aria-hidden="true" className="absolute border border-[rgba(64,64,64,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b8bcca] text-[16px] tracking-[0.16px] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Ejemplo Nombre</p>
        </div>
      </div>
    </div>
  );
}

function TextBlock1() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Text Block">
      <div aria-hidden="true" className="absolute border border-[rgba(64,64,64,0.59)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b8bcca] text-[16px] tracking-[0.16px] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">Ejemplo@email.com</p>
        </div>
      </div>
    </div>
  );
}

function TextBlock2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Text Block">
      <div aria-hidden="true" className="absolute border border-[rgba(64,64,64,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b8bcca] text-[16px] tracking-[0.16px] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">+5432450...</p>
        </div>
      </div>
    </div>
  );
}

function TextBlock3() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-full" data-name="Text Block">
      <div aria-hidden="true" className="absolute border border-[rgba(64,64,64,0.6)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start p-[12px] relative w-full">
        <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b8bcca] text-[16px] tracking-[0.16px] w-full">
          <p className="leading-[1.5] whitespace-pre-wrap">32.567.431</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#900] content-stretch cursor-pointer flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[468px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Asociarme</p>
      </div>
    </button>
  );
}

function Frame3() {
  return (
    <div className="h-[716px] relative rounded-bl-[74px] rounded-tr-[51px] shrink-0 w-[1025px]">
      <div className="content-stretch flex flex-col gap-[27px] items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#404040] text-[48px] text-center tracking-[-0.24px] w-[726px]">
          <p className="leading-[1.45] whitespace-pre-wrap">{`¿Querés Asociarte? `}</p>
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Text Input">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#404040] text-[0px] text-[16px] tracking-[0.16px] w-full whitespace-pre-wrap">
            <span className="leading-[1.5]">Nombre Completo</span>
            <span className="leading-[1.5]">{` `}</span>
            <span className="leading-[1.5] text-[#ed0131]">*</span>
          </p>
          <TextBlock />
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Text Input">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#404040] text-[0px] text-[16px] tracking-[0.16px] w-full whitespace-pre-wrap">
            <span className="leading-[1.5]">E-mail</span>
            <span className="leading-[1.5]">{` `}</span>
            <span className="leading-[1.5] text-[#ed0131]">*</span>
          </p>
          <TextBlock1 />
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Text Input">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#404040] text-[16px] tracking-[0.16px] w-full whitespace-pre-wrap">{`Nro de Telefono `}</p>
          <TextBlock2 />
        </div>
        <div className="content-stretch flex flex-col gap-[2px] items-start overflow-clip relative shrink-0" data-name="Text Input">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#404040] text-[16px] tracking-[0.16px] w-full whitespace-pre-wrap">Documento (DNI)</p>
          <TextBlock3 />
        </div>
        <Button />
      </div>
      <div aria-hidden="true" className="absolute border border-[#fff3f3] border-solid inset-0 pointer-events-none rounded-bl-[74px] rounded-tr-[51px] shadow-[0px_5px_38.7px_-6px_#900]" />
    </div>
  );
}

function Header2() {
  return (
    <div className="h-[848px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pt-[54px] px-[150px] relative size-full">
          <Frame3 />
        </div>
      </div>
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

function Text1() {
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

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text1 />
      <SocialLinks />
    </div>
  );
}

function Header3() {
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
      <Header3 />
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

function Header4() {
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
      <Header4 />
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
      <Content />
      <Nav1 />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[rgba(0,168,64,0.11)] h-[536px] relative shrink-0 w-full" data-name="Footer 1">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[120px] px-[64px] relative size-full">
          <Container1 />
        </div>
      </div>
    </footer>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <Header1 />
      <Hero />
      <Header />
      <Header2 />
      <Footer />
    </div>
  );
}