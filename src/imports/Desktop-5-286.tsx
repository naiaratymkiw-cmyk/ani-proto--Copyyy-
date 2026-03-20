import svgPaths from "./svg-lkw60e8vf1";
import imgHero1 from "figma:asset/914eaaee154ebf9d1b2d2086f151871dcbf1de61.png";
import imgUntitledDesign201 from "figma:asset/632814a21edf1e92ab064e81b0252f3022e741f8.png";
import imgImage from "figma:asset/635ab4ecd38e46ee3819135a543ca1e9c0169912.png";
import img360F632011725WLo7D2Z2Hv4Wg4Pryecac43GxlJkqv5B1 from "figma:asset/529fb43a5368a24c2c2e6095a2abbbca6f847168.png";
import imgTangoEvento1 from "figma:asset/21cbfe438b6ce5a16f4f3b3507a64d61b62f8bac.png";
import imgImage1 from "figma:asset/574543a6b63228397481ad081dc7100d094d30b9.png";
import imgImage2 from "figma:asset/3e461c34cc630e961c39047393b0ee1a4a830921.png";
import imgImage3 from "figma:asset/5da4250fbc9ea87dd8323da1e6323830ab330219.png";
import imgImage4 from "figma:asset/586879380e578463d6668d2f1524d1981078434b.png";
import imgImage5 from "figma:asset/6ea92b92bfa2807df03bf4b469cf50cea095f4b3.png";
import imgImage6 from "figma:asset/814cbdedf47c643717f6a23dde06abeaea51a423.png";

function Frame5() {
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
      <Frame5 />
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

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-clip-text bg-gradient-to-r col-1 flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium from-[#900] justify-center ml-0 mt-0 relative row-1 text-[14px] to-[#404040] w-[441px]" style={{ WebkitTextFillColor: "transparent" }}>
        <p className="leading-[1.212] whitespace-pre-wrap">{`Hogar de la primera escuela de lengua italiana en  Latinoamérica`}</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center leading-[0] relative shrink-0 text-[#404040] w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[149px] justify-center not-italic relative shrink-0 text-[72px] tracking-[-1.44px] w-[619px]">
        <h2 className="font-['Plus_Jakarta_Sans:Bold',sans-serif] whitespace-pre-wrap">
          <span className="leading-[1.1]">{`Associazione Nazionale `}</span>
          <span className="leading-[1.1] text-[#900]">Italiana</span>
        </h2>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] tracking-[-0.32px] w-[512px]">
        <p className="leading-[1.6] whitespace-pre-wrap">Más de 160 años reforzando nuestra identidad con clases, arte y actividades que mantienen vivo el espíritu de fraternidad italo-argentina</p>
      </div>
    </div>
  );
}

function PrimaryButton() {
  return (
    <button className="bg-[#900] content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Contactanos</p>
      </div>
    </button>
  );
}

function SecondaryButton() {
  return (
    <button className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative rounded-[12px] shrink-0" data-name="Secondary button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-left tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Ver Más</p>
      </div>
    </button>
  );
}

function Buttons() {
  return (
    <div className="content-center cursor-pointer flex flex-wrap gap-[16px] items-center relative shrink-0 w-full" data-name="Buttons">
      <PrimaryButton />
      <SecondaryButton />
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start justify-center pl-[92px] pr-[40px] py-[40px] relative w-full">
          <Group />
          <Text />
          <Buttons />
        </div>
      </div>
    </div>
  );
}

function DeviceFrame() {
  return (
    <div aria-hidden="true" className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-bl-[16px] rounded-tl-[16px] shrink-0 w-[719px]" data-name="Device frame" role="presentation">
      <div className="h-[364px] relative shadow-[0px_4px_7.6px_0px_rgba(100,0,0,0.44)] shrink-0 w-[362px]" data-name="Untitled design (20) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[124.31%] left-0 max-w-none top-[-12.98%] w-full" src={imgUntitledDesign201} />
        </div>
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center pl-px py-[80px] relative shrink-0 w-[665px]" data-name="Image container">
      <DeviceFrame />
    </div>
  );
}

function Hero() {
  return (
    <section className="h-[695px] relative shrink-0 w-full" data-name="Hero 1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover opacity-33 size-full" src={imgHero1} />
        <div className="absolute bg-[rgba(255,255,255,0.42)] inset-0" />
      </div>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pl-[64px] relative size-full">
          <Container />
          <ImageContainer />
        </div>
      </div>
    </section>
  );
}

function MapRestaurantFill({ className }: { className?: string }) {
  return (
    <div className={className || "-translate-y-1/2 absolute aspect-[24/24] left-[24px] overflow-clip right-[24px] top-[calc(50%-0.5px)]"} data-name="map/restaurant-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Vector" />
      </svg>
      <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 50">
          <path d={svgPaths.p21008ac0} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function CircleSec() {
  return (
    <div className="bg-[#900] relative rounded-[200px] shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] shrink-0 size-[108px]" data-name="circle sec-">
      <MapRestaurantFill />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15px] h-[366px] items-center justify-center overflow-clip relative shrink-0 w-[380px]">
      <CircleSec />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] w-[288px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Gastronomía</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[62.004px] justify-center leading-[0] relative shrink-0 text-[#1a202c] text-[14px] text-center tracking-[-0.28px] w-[276.484px]">
        <p className="leading-[1.75] whitespace-pre-wrap">Una experiencia gastronómica que te transporta a Italia a través de sus aromas y tradiciones</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[7.28%_0] overflow-clip" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 52.9737">
        <g clipPath="url(#clip0_5_293)" id="Frame">
          <path d={svgPaths.p1a58c680} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_293">
            <rect fill="white" height="52.9737" width="61" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[43.13%_23.63%_34.57%_23.63%] overflow-clip" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.168 13.8245">
        <g clipPath="url(#clip0_5_290)" id="Frame">
          <path d={svgPaths.p16221380} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_5_290">
            <rect fill="white" height="13.8245" width="32.168" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Component001GraduationHat() {
  return (
    <div className="absolute inset-0 overflow-clip" data-name="001-graduation-hat">
      <Frame />
      <Frame1 />
    </div>
  );
}

function IconCoolIconN() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[62px] left-[calc(50%-0.5px)] overflow-clip top-[calc(50%+0.5px)] w-[61px]" data-name="icon cool-icon-n8">
      <Component001GraduationHat />
    </div>
  );
}

function CircleSec1() {
  return (
    <div className="bg-[#900] relative rounded-[200px] shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] shrink-0 size-[108px]" data-name="circle sec-">
      <IconCoolIconN />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15px] h-[366px] items-center justify-center overflow-clip relative shrink-0 w-[380px]">
      <CircleSec1 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] w-[288px]">
        <p className="leading-[1.45] whitespace-pre-wrap">{`Clases `}</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[62.004px] justify-center leading-[0] relative shrink-0 text-[#1a202c] text-[14px] text-center tracking-[-0.28px] w-[276.484px]">
        <p className="leading-[1.75] whitespace-pre-wrap">Explorá nuestras clases y talleres diseñados para fortalecer y difundir nuestra identidad cultural</p>
      </div>
    </div>
  );
}

function IconCoolIconN1() {
  return <div className="absolute bottom-1/4 left-[26.39%] right-[29.17%] top-[30.56%]" data-name="icon cool-icon-n8" />;
}

function CaptivePortal() {
  return <div className="absolute inset-[-16.5px_48px_64.5px_0]" data-name="Captive Portal" />;
}

function Group1() {
  return (
    <div className="absolute left-[29px] size-[60px] top-[26.5px]">
      <div className="absolute inset-[-1.02%_0_0_-1.42%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.8535 60.6117">
          <g id="Group 38">
            <g id="Group 19">
              <path d={svgPaths.p48fc400} id="Ellipse 60" stroke="var(--stroke-0, #FFFEFE)" strokeWidth="4" />
              <path d={svgPaths.p3a4945a0} id="Vector 6" stroke="var(--stroke-0, #FFFEFE)" strokeLinecap="round" strokeWidth="4" />
              <path d={svgPaths.p3f85b40} id="Vector 7" stroke="var(--stroke-0, #FFFEFE)" strokeLinecap="round" strokeWidth="4" />
              <path d={svgPaths.p2280c400} id="Vector 8" stroke="var(--stroke-0, #FFFEFE)" strokeLinecap="round" strokeWidth="4" />
            </g>
            <path d={svgPaths.p3b3a7580} id="Polygon 2" stroke="var(--stroke-0, #FFFEFE)" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function CircleSec2() {
  return (
    <div className="bg-[#900] overflow-clip relative rounded-[200px] shadow-[0px_4px_26.1px_0px_rgba(100,0,0,0.44)] shrink-0 size-[108px]" data-name="circle sec-">
      <IconCoolIconN1 />
      <CaptivePortal />
      <Group1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[15px] h-[366px] items-center justify-center overflow-clip relative shrink-0 w-[380px]">
      <CircleSec2 />
      <div className="flex flex-col font-['Plus_Jakarta_Sans:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[24px] text-[rgba(0,0,0,0.55)] text-center tracking-[-0.12px] w-[288px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Información sobre Italia</p>
      </div>
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal h-[62.004px] justify-center leading-[0] relative shrink-0 text-[#1a202c] text-[14px] text-center tracking-[-0.28px] w-[276.484px]">
        <p className="whitespace-pre-wrap">
          <span className="leading-[1.75]">{`Asistí a uno de nuestros encuentros y aprendé  `}</span>
          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] font-normal leading-[1.75]">{`cómo se siente y  vive Italia.`}</span>
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="h-[464px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-center px-[150px] relative size-full">
          <Frame2 />
          <Frame4 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center pt-[9px] relative shrink-0 w-full" data-name="Header">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold from-[#900] justify-center leading-[0] relative shrink-0 text-[64px] to-[#404040] tracking-[-1.28px] whitespace-nowrap" style={{ WebkitTextFillColor: "transparent" }}>
        <h3 className="block leading-[1.2]">Nuestras Actividades</h3>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="col-1 h-[119px] justify-self-stretch relative row-1 shrink-0" data-name="Text">
      <div className="content-stretch flex flex-col gap-[15px] items-start leading-[0] px-px relative size-full">
        <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-black tracking-[-0.64px] w-[342px]">
          <h4 className="block leading-[1.2] whitespace-pre-wrap">{`Cursos de Italiano `}</h4>
        </div>
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center min-w-full not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-[min-content]">
          <p className="leading-[1.45] whitespace-pre-wrap">Aprendé el idioma de tus raíces con nuestros cursos en diversos niveles y horarios flexibles entre semana.</p>
        </div>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[15px] items-start justify-self-stretch leading-[0] relative row-2 self-start shrink-0" data-name="Text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-black tracking-[-0.64px] w-full">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Restaurante</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Una gastronomía auténtica para transportarte al corazón de Italia en cada bocado.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#900] col-1 content-stretch cursor-pointer flex items-center justify-between justify-self-end px-[16px] py-[12px] relative rounded-[12px] row-4 self-start shrink-0 w-[144px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] w-[112px]">
        <p className="leading-[1.45] whitespace-pre-wrap">Ver Más</p>
      </div>
    </button>
  );
}

function Text3() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[15px] items-start justify-self-stretch leading-[0] relative row-3 self-stretch shrink-0" data-name="Text">
      <div className="flex flex-col font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[32px] text-black tracking-[-0.64px] w-full">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Clases de Tango</h4>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center not-italic relative shrink-0 text-[18px] text-[rgba(0,0,0,0.55)] tracking-[-0.09px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">En cada paso de tango honramos el legado de los inmigrantes que fusionaron sus sueños con el suelo argentino.</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white gap-x-[42px] gap-y-[48px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[repeat(4,minmax(0,1fr))] h-[590.667px] pb-px pt-[72px] px-[44px] relative rounded-[16px] shrink-0 w-[666px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)]" />
      <Text1 />
      <Text2 />
      <Button />
      <Text3 />
    </div>
  );
}

function Feature() {
  return (
    <section className="bg-white h-[779px] relative shrink-0 w-full" data-name="Feature 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center pb-[81px] pt-[61px] px-[150px] relative size-full">
          <div aria-hidden="true" className="h-[591px] relative rounded-[16px] shrink-0 w-[410px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
          </div>
          <Content />
        </div>
      </div>
    </section>
  );
}

function Header3() {
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

function Text4() {
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
          <Text4 />
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

function Text5() {
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
          <Text5 />
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
    <div className="bg-[#900] h-[698px] relative shrink-0 w-full" data-name="Feature cards 3">
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

function Header4() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center justify-center leading-[0] not-italic pt-[94px] relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#900] justify-center relative shrink-0 text-[64px] to-[#666] tracking-[-1.28px]" style={{ WebkitTextFillColor: "transparent" }}>
        <h3 className="block leading-[1.2]">Nuestra Comunidad</h3>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[20px] text-[rgba(0,0,0,0.55)] tracking-[-0.1px]">
        <p className="leading-[1.45]">El reflejo de una comunidad que celebra su cultura y su gente</p>
      </div>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-[887px] items-center min-h-px min-w-px relative" data-name="Column 1">
      <div className="code-behavior-wrapper flex h-[583px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[583px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[272px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[272px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-h-px min-w-px relative" data-name="Column 2">
      <div className="code-behavior-wrapper flex h-[251px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[251px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[258px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[258px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[359px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[359px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-[887px] items-center min-h-px min-w-px relative" data-name="Column 3">
      <div className="code-behavior-wrapper flex h-[251px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[251px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage6} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[604px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[604px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="content-stretch flex gap-[32px] h-[982px] items-start justify-center relative shrink-0 w-full" data-name="Gallery">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function FeatureGallery() {
  return (
    <section className="relative shrink-0 w-full" data-name="Feature gallery 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[64px] items-center justify-center pb-[120px] pt-[48px] px-[64px] relative w-full">
          <Header4 />
          <Gallery />
        </div>
      </div>
    </section>
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

function Text6() {
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
      <Text6 />
      <SocialLinks />
    </div>
  );
}

function Header5() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Inicio</p>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[130px]" data-name="Column 1">
      <Header5 />
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

function Header6() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Contacto</p>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <nav className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[311px]" data-name="Column 2">
      <Header6 />
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
      <Column3 />
      <Column4 />
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
    <footer className="bg-[rgba(0,168,64,0.11)] h-[410px] relative shrink-0 w-full" data-name="Footer 1">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center pb-[18px] px-[64px] relative size-full">
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
      <Feature />
      <Header3 />
      <FeatureCards />
      <FeatureGallery />
      <Footer />
    </div>
  );
}