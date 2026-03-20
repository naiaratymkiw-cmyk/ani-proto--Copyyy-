import svgPaths from "./svg-lm48gpkwd2";
import imgHero1 from "figma:asset/1bd47b04f24a05a038ff29963510cd942eba097b.png";
import imgImage from "figma:asset/574543a6b63228397481ad081dc7100d094d30b9.png";
import imgImage1 from "figma:asset/586879380e578463d6668d2f1524d1981078434b.png";
import imgImage2 from "figma:asset/5da4250fbc9ea87dd8323da1e6323830ab330219.png";
import imgImage3 from "figma:asset/6ea92b92bfa2807df03bf4b469cf50cea095f4b3.png";
import imgImage4 from "figma:asset/635ab4ecd38e46ee3819135a543ca1e9c0169912.png";
import imgImage5 from "figma:asset/3e461c34cc630e961c39047393b0ee1a4a830921.png";
import imgImage6 from "figma:asset/814cbdedf47c643717f6a23dde06abeaea51a423.png";
import imgImage7 from "figma:asset/a8f9c2e3e17ceb759073f68e0f449b0a86ae5e22.png";
import imgImage8 from "figma:asset/61cbe28032c85e6aeefc9bab5c8b6500aea23e06.png";
import imgImage9 from "figma:asset/31e8894f0f10474a099024791439502d392054e1.png";
import imgImage10 from "figma:asset/e4b6e820040e2fc3be30666c8e53a46a6bc0b4d6.png";

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
        <h2 className="block leading-[1.1] whitespace-pre-wrap">Sobre Nosotros</h2>
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
    <section className="content-stretch flex h-[409px] items-center justify-center overflow-clip relative shrink-0 w-full" data-name="Hero 1">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-33 overflow-hidden">
          <img alt="" className="absolute h-[264.06%] left-[-1.46%] max-w-none top-[-63.23%] w-[102.27%]" src={imgHero1} />
        </div>
        <div className="absolute bg-[rgba(255,255,255,0.42)] inset-0" />
      </div>
      <Container />
    </section>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] h-[265px] items-center justify-center leading-[0] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Header">
      <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['Inter:Bold',sans-serif] font-bold from-[#900] justify-center relative shrink-0 text-[64px] to-[#666] tracking-[-1.28px]" style={{ WebkitTextFillColor: "transparent" }}>
        <h3 className="block leading-[1.2]">Galería</h3>
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
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[272px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[272px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage1} />
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
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage2} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[251px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[251px] rounded-[16px] w-full" data-name="Image" role="presentation" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 416 251\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(24.75 15.5 -25.689 41.02 168.5 96)\\'><stop stop-color=\\'rgba(255,212,212,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(229,159,159,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(217,133,133,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(204,106,106,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(191,80,80,1)\\' offset=\\'0.625\\'/><stop stop-color=\\'rgba(178,53,53,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(166,27,27,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(159,13,13,1)\\' offset=\\'0.9375\\'/><stop stop-color=\\'rgba(153,0,0,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }} />
      </div>
      <div className="code-behavior-wrapper flex h-[359px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[359px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-[929px] items-center min-h-px min-w-px relative" data-name="Column 3">
      <div className="code-behavior-wrapper flex h-[251px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[251px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgHero1} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[646px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[646px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <div className="content-stretch flex gap-[32px] h-[962px] items-start justify-center relative shrink-0 w-full" data-name="Gallery">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-[887px] items-center min-h-px min-w-px relative" data-name="Column 1">
      <div className="code-behavior-wrapper flex h-[465px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[465px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage5} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[390px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[390px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage6} />
        </div>
      </div>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] items-center min-h-px min-w-px relative" data-name="Column 2">
      <div className="code-behavior-wrapper flex h-[251px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[251px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage7} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[185px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[185px] rounded-[16px] w-full" data-name="Image" role="presentation" style={{ backgroundImage: "url(\'data:image/svg+xml;utf8,<svg viewBox=\\'0 0 416 185\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(24.75 11.424 -25.689 30.234 168.5 70.757)\\'><stop stop-color=\\'rgba(255,212,212,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(229,159,159,1)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(217,133,133,1)\\' offset=\\'0.375\\'/><stop stop-color=\\'rgba(204,106,106,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(191,80,80,1)\\' offset=\\'0.625\\'/><stop stop-color=\\'rgba(178,53,53,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(166,27,27,1)\\' offset=\\'0.875\\'/><stop stop-color=\\'rgba(159,13,13,1)\\' offset=\\'0.9375\\'/><stop stop-color=\\'rgba(153,0,0,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>\')" }} />
      </div>
      <div className="code-behavior-wrapper flex h-[359px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[359px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage8} />
        </div>
      </div>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-[982px] items-center min-h-px min-w-px relative" data-name="Column 3">
      <div className="code-behavior-wrapper flex h-[273px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[273px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage9} />
        </div>
      </div>
      <div className="code-behavior-wrapper flex h-[646px] relative shrink-0 tailwind w-full">
        <div aria-hidden="true" className="h-[646px] relative rounded-[16px] w-full" data-name="Image" role="presentation">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage10} />
        </div>
      </div>
    </div>
  );
}

function Gallery1() {
  return (
    <div className="content-stretch flex gap-[32px] h-[982px] items-start justify-center relative shrink-0 w-full" data-name="Gallery">
      <Column3 />
      <Column4 />
      <Column5 />
    </div>
  );
}

function FeatureGallery() {
  return (
    <section className="relative shrink-0 w-full" data-name="Feature gallery 2">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[120px] pt-[48px] px-[64px] relative w-full">
          <Header />
          <Gallery />
          <Gallery1 />
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

function Header2() {
  return (
    <div className="content-stretch flex items-start pb-[16px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.08px] whitespace-nowrap">
        <p className="leading-[1.45]">Inicio</p>
      </div>
    </div>
  );
}

function Column6() {
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

function Column7() {
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
      <Column6 />
      <Column7 />
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
    <footer className="bg-[rgba(0,168,64,0.11)] content-stretch flex h-[529px] items-center justify-center overflow-clip pb-[120px] px-[64px] relative shrink-0 w-[1440px]" data-name="Footer 4">
      <Container1 />
    </footer>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative size-full" data-name="Desktop">
      <Header1 />
      <Hero />
      <FeatureGallery />
      <Footer />
    </div>
  );
}