import svgPaths from "./svg-xm3vu0rgl4";
import imgHero1 from "figma:asset/5da4250fbc9ea87dd8323da1e6323830ab330219.png";
import imgImage from "figma:asset/0897f8654a105d25cc8722fd75f2066288ffda35.png";
import imgImage1 from "figma:asset/184dbb2cf1264cddcbf4edd0cefa610b12bf4688.png";
import imgImage2 from "figma:asset/86cb352ca2c1d36b5499e4ab5e037679bf0ae807.png";

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
        <h2 className="block leading-[1.1] whitespace-pre-wrap">{`   Actividades`}</h2>
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
    <div className="content-stretch flex flex-col h-[58px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[476px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Clases de Tango</h4>
      </div>
    </div>
  );
}

function Button() {
  return (
    <button className="bg-[#900] content-stretch cursor-pointer flex items-end justify-end px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[144px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Contactarme</p>
      </div>
    </button>
  );
}

function Content() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] h-[604px] items-start justify-center pb-px pt-[25px] px-[44px] relative rounded-[16px] shrink-0 w-[666px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)]" />
      <Text1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[317px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[588px] whitespace-pre-wrap">
        <p className="leading-[1.45] mb-0">Sentí la pasión del 2x4 en nuestra casa. La Nacional Tango ofrece clases para todos los niveles, invitándote a descubrir la esencia de nuestra cultura rioplatense.</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[36px]">
            <span className="leading-[1.45]">Días y Horarios: Consultar disponibilidad según nivel.</span>
          </li>
          <li className="ms-[36px]">
            <span className="leading-[1.45]">Inscripciones: Abiertas durante todo el año.</span>
          </li>
        </ul>
        <p className="leading-[1.45]">Contactanos para recibir el cronograma actualizado y sumarte a nuestras pistas.</p>
      </div>
      <Button />
    </div>
  );
}

function Feature1() {
  return (
    <section className="bg-white h-[748px] relative shrink-0 w-full" data-name="Feature 2">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center pt-[8px] px-[150px] relative size-full">
          <Content />
          <div aria-hidden="true" className="h-[591px] relative rounded-[16px] shrink-0 w-[410px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col h-[58px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[476px]">
        <h4 className="block leading-[1.2] whitespace-pre-wrap">Cursos de Italiano</h4>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <button className="bg-[#900] content-stretch cursor-pointer flex items-end justify-end px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[144px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Contactarme</p>
      </div>
    </button>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] h-[672px] items-start justify-center pb-px pt-[25px] px-[44px] relative rounded-[16px] shrink-0 w-[666px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)]" />
      <Text2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[min-content] whitespace-pre-wrap">
        <p className="leading-[1.45] mb-0">Conectá con tus raíces a través del idioma. Ofrecemos cursos de italiano en diversos niveles con horarios flexibles de lunes a viernes.</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[36px]">
            <span className="leading-[1.45]">Turnos: 17:00 a 19:00 hs. | 19:00 a 21:00 hs.</span>
          </li>
          <li className="ms-[36px]">
            <span className="leading-[1.45]">Inscripciones: Abiertas durante todo el mes de marzo.</span>
          </li>
        </ul>
        <p className="leading-[1.45]">Consultanos para conocer el día específico según tu nivel.</p>
      </div>
      <Button1 />
    </div>
  );
}

function Feature() {
  return (
    <section className="bg-[#900] h-[950px] relative shrink-0 w-full" data-name="Feature 1">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center px-[150px] py-[45px] relative size-full">
          <div aria-hidden="true" className="h-[662px] relative rounded-[16px] shrink-0 w-[430px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
          </div>
          <Content1 />
        </div>
      </div>
    </section>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col h-[58px] items-start relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[578px]">
        <h4 className="whitespace-pre-wrap">
          <span className="leading-[1.2]">Ristorante</span>
          <span className="leading-[1.2] text-[#900]">{` Maria Fedele`}</span>
        </h4>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <button className="bg-[#900] content-stretch cursor-pointer flex items-end justify-end px-[16px] py-[12px] relative rounded-[12px] shrink-0 w-[144px]" data-name="Button">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[-0.09px] whitespace-nowrap">
        <p className="leading-[1.45]">Contactarme</p>
      </div>
    </button>
  );
}

function Content2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] h-[618px] items-start justify-center pb-px pt-[25px] px-[44px] relative rounded-[16px] shrink-0 w-[666px]" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_7px_18.8px_0px_rgba(153,0,0,0.2)]" />
      <Text3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-full">
        <p className="leading-[1.45] whitespace-pre-wrap">Maria Fedele abrió sus puertas en la Asociación, de miércoles a sábado por la noche. El menú es único para todos los comensales ,con un precio fijo por persona mas la consumición de bebidas y café.</p>
      </div>
      <Button2 />
    </div>
  );
}

function Feature2() {
  return (
    <section className="h-[748px] relative shrink-0 w-full" data-name="Feature 3">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center pb-[120px] pt-[122px] px-[150px] relative size-full">
          <Content2 />
          <div aria-hidden="true" className="h-[591px] relative rounded-[16px] shrink-0 w-[410px]" data-name="Image" role="presentation">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
          </div>
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

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[56px] items-start min-h-px min-w-px relative" data-name="Content">
      <Text4 />
      <SocialLinks />
    </div>
  );
}

function Header() {
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
      <Header />
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

function Header2() {
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
      <Header2 />
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
      <Content3 />
      <Nav1 />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[rgba(0,168,64,0.11)] h-[405px] relative shrink-0 w-full" data-name="Footer 1">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[64px] relative size-full">
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
      <Feature1 />
      <Feature />
      <Feature2 />
      <Footer />
    </div>
  );
}