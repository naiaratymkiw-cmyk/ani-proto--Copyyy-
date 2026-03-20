function Text() {
  return (
    <div className="content-stretch flex flex-col h-[104px] items-start mb-[-30px] relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-black tracking-[-0.96px] w-[688px]">
        <h4 className="block leading-[1.2]">El hogar definitivo</h4>
      </div>
    </div>
  );
}

export default function Content() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center pb-[31px] pt-[25px] px-[44px] relative rounded-[16px] size-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#fffefe] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Text />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[318px] justify-center leading-[0] mb-[-30px] not-italic relative shrink-0 text-[24px] text-[rgba(0,0,0,0.88)] tracking-[-0.12px] w-[652px]">
        <p className="leading-[1.45]">Siete años después de la crisis sanitaria, la asociación entra en una nueva y más pujante etapa de su existencia. Este crecimiento se materializa con la construcción y mudanza a su nueva sede social ubicada en la calle Alsina 1465. Este edificio se convirtió en el corazón de sus actividades y continúa siendo el domicilio de la institución hasta el día de hoy.</p>
      </div>
    </div>
  );
}