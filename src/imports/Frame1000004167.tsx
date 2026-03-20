import imgImage from "figma:asset/a8f9c2e3e17ceb759073f68e0f449b0a86ae5e22.png";

function Frame2() {
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
      <Frame2 />
      <div aria-hidden="true" className="col-1 h-[419px] justify-self-end relative row-1 self-start shrink-0 w-[568px]" data-name="Image" role="presentation">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Text() {
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
    <div className="bg-white col-2 content-stretch flex flex-col gap-[48px] h-[618px] items-start justify-center justify-self-start pb-px pt-[25px] px-[44px] relative rounded-bl-[16px] rounded-tl-[16px] row-1 shrink-0 w-[812px]" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#fffefe] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[16px] rounded-tl-[16px]" />
      <Text />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[652px]">
        <p className="leading-[1.45] whitespace-pre-wrap">El 25 de marzo se declara fundada la “Società Nazionale Italiana”, en un momento histórico que coincide con la proclamación de Víctor Manuel II como rey de Italia y la unión de los italianos bajo una sola bandera. Inspirados por la lucha de su tierra natal, 233 inmigrantes deciden fundar esta entidad en tierras del Plata para dar testimonio de lealtad a sus raíces, estableciendo como pilares el socorro mutuo, la asistencia y la difusión de la cultura italiana.</p>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="gap-x-[60px] gap-y-[60px] grid grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(1,fit-content(100%))] relative size-full">
      <Frame />
      <Content />
    </div>
  );
}