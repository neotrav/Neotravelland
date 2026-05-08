import clsx from "clsx";
type HelperProps = {
  text: string;
  text1: string;
  text2: string;
  text3: string;
  additionalClassNames?: string;
};

function Helper({ text, text1, text2, text3, additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("col-1 content-stretch flex flex-col items-start ml-0 mt-0 relative row-1", additionalClassNames)}>
      <p className="font-['Inter_Tight:Bold',sans-serif] relative shrink-0">{text}</p>
      <p className="font-['Inter_Tight:Medium',sans-serif] relative shrink-0">{text1}</p>
      <p className="font-['Inter_Tight:Regular',sans-serif] relative shrink-0">{text2}</p>
      <p className="font-['Inter_Tight:Light',sans-serif] relative shrink-0">{text3}</p>
    </div>
  );
}

export default function Typography() {
  return (
    <div className="bg-[#f8faff] relative size-full" data-name="Typography">
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-1/2 p-[24px] top-0 w-[1136px]" data-name="Header">
        <div className="bg-[#88d756] relative rounded-[12px] shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-end size-full">
            <div className="content-stretch flex gap-[12px] items-end px-[48px] py-[32px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
                <div className="bg-[#f2f5f7] content-stretch flex items-start justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Section Title">
                  <p className="font-['Inter_Tight:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#11181c] text-[20px] whitespace-nowrap">{`Foundations `}</p>
                </div>
                <p className="font-['Inter_Tight:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#151827] text-[48px] whitespace-nowrap">Typography</p>
              </div>
              <p className="font-['Inter_Tight:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#151827] text-[64px] whitespace-nowrap">01</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start left-0 top-[224px]" data-name="Container">
        <div className="relative shrink-0 w-full" data-name="Text Preview">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pb-[72px] pt-[48px] px-[72px] relative w-full">
              <div className="content-stretch flex gap-[32px] items-center relative shrink-0">
                <p className="font-['Inter_Tight:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#151827] text-[128px] whitespace-nowrap">Aa</p>
                <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
                  <p className="font-['Inter_Tight:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#151827] text-[48px] whitespace-nowrap">Inter Tight</p>
                </div>
              </div>
              <p className="font-['Inter_Tight:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#151827] text-[24px] whitespace-nowrap">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br aria-hidden="true" />
                abcdefghijklmnopqrstuvwxyz
                <br aria-hidden="true" />
                {`0123456789 !@#$%^&*()`}
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[72px] relative shrink-0" data-name="Heading">
          <p className="font-['Inter_Tight:SemiBold',sans-serif] leading-[62px] not-italic relative shrink-0 text-[#151827] text-[48px] whitespace-nowrap">Heading</p>
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="Container">
            <div className="font-['Inter_Tight:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[#434b68] text-[24px] whitespace-nowrap">
              <div className="col-1 flex flex-col justify-center ml-0 mt-0 relative row-1">
                <p className="leading-[32px]">Name</p>
              </div>
              <div className="col-1 flex flex-col justify-center ml-[327px] mt-0 relative row-1">
                <p className="leading-[32px]">Font size</p>
              </div>
              <div className="col-1 flex flex-col justify-center ml-[867px] mt-0 relative row-1">
                <p className="leading-[32px]">Line Height</p>
              </div>
              <div className="col-1 flex flex-col justify-center ml-[571px] mt-0 relative row-1">
                <p className="leading-[32px]">Letter Spacing</p>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 987 1">
                  <line id="Line 1" stroke="var(--stroke-0, #F2F5F7)" x2="987" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[48px] items-start leading-[0] not-italic relative shrink-0 text-[#151827] whitespace-nowrap">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <p className="col-1 font-['Inter_Tight:Bold',sans-serif] leading-[48px] ml-0 mt-0 relative row-1 text-[40px]">Heading 1</p>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[912px] mt-[10px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">48px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[643px] mt-[10px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[325px] mt-[10px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">Bold/40px</p>
                </div>
              </div>
              <div className="font-['Inter_Tight:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <p className="col-1 leading-[42px] ml-0 mt-0 relative row-1 text-[32px]">Heading 1</p>
                <div className="col-1 flex flex-col justify-center ml-[912px] mt-[10px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">42px</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[643px] mt-[10px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[325px] mt-[10px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">Medium/32px</p>
                </div>
              </div>
              <div className="font-['Inter_Tight:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <p className="col-1 leading-[34px] ml-0 mt-0 relative row-1 text-[26px]">Heading 3</p>
                <div className="col-1 flex flex-col justify-center ml-[912px] mt-[6px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">34px</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[643px] mt-[6px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[325px] mt-[6px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">Medium/26px</p>
                </div>
              </div>
              <div className="font-['Inter_Tight:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <p className="col-1 leading-[32px] ml-0 mt-0 relative row-1 text-[24px]">Heading 4</p>
                <div className="col-1 flex flex-col justify-center ml-[913px] mt-[5px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">32px</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[643px] mt-[6px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[325px] mt-[5px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">Medium/24px</p>
                </div>
              </div>
              <div className="font-['Inter_Tight:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <p className="col-1 leading-[28px] ml-0 mt-0 relative row-1 text-[22px]">Heading 5</p>
                <div className="col-1 flex flex-col justify-center ml-[325px] mt-0 relative row-1 text-[16px]">
                  <p className="leading-[22px]">Medium/22px</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[912px] mt-0 relative row-1 text-[16px]">
                  <p className="leading-[22px]">28px</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[643px] mt-[3px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
              </div>
              <div className="font-['Inter_Tight:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <p className="col-1 leading-[26px] ml-0 mt-0 relative row-1 text-[20px]">Heading 6</p>
                <div className="col-1 flex flex-col justify-center ml-[325px] mt-0 relative row-1 text-[16px]">
                  <p className="leading-[22px]">Medium/20px</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[912px] mt-0 relative row-1 text-[16px]">
                  <p className="leading-[22px]">26px</p>
                </div>
                <div className="col-1 flex flex-col justify-center ml-[643px] mt-[2px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start p-[72px] relative shrink-0" data-name="Body">
          <p className="font-['Inter_Tight:SemiBold',sans-serif] leading-[62px] not-italic relative shrink-0 text-[#151827] text-[48px] whitespace-nowrap">Body</p>
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
            <div className="font-['Inter_Tight:Medium',sans-serif] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[#434b68] text-[24px] whitespace-nowrap">
              <div className="col-1 flex flex-col justify-center ml-0 mt-0 relative row-1">
                <p className="leading-[32px]">Name</p>
              </div>
              <div className="col-1 flex flex-col justify-center ml-[865px] mt-0 relative row-1">
                <p className="leading-[32px]">Line Height</p>
              </div>
              <div className="col-1 flex flex-col justify-center ml-[569px] mt-0 relative row-1">
                <p className="leading-[32px]">Letter Spacing</p>
              </div>
              <div className="col-1 flex flex-col justify-center ml-[325px] mt-0 relative row-1">
                <p className="leading-[32px]">Font size</p>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 985 1">
                  <line id="Line 1" stroke="var(--stroke-0, #F2F5F7)" x2="985" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[64px] items-start leading-[0] not-italic relative shrink-0 text-[#151827] whitespace-nowrap">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <Helper text="Large Text Bold" text1="Large Text Medium" text2="Large Text Regular" text3="Large Text Light" additionalClassNames="gap-[24px] leading-[24px] text-[18px]" />
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[358px] mt-[73px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">18px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[911px] mt-[68px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">24px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[643px] mt-[68px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 text-[16px]">
                <Helper text="Large Text Bold" text1="Large Text Medium" text2="Large Text Regular" text3="Large Text Light" additionalClassNames="gap-[26px] leading-[22px]" />
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[360px] mt-[72px] relative row-1">
                  <p className="leading-[22px]">16px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[910px] mt-[72px] relative row-1">
                  <p className="leading-[22px]">22px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[642px] mt-[72px] relative row-1">
                  <p className="leading-[22px]">0%</p>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <Helper text="Medium Text Bold" text1="Medium Text Medium" text2="Medium Text Regular" text3="Medium Text Light" additionalClassNames="gap-[26px] leading-[18px] text-[14px]" />
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[360px] mt-[64px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">14px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[909px] mt-[64px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">18px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[641px] mt-[64px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <Helper text="Small Text Bold" text1="Small Text Medium" text2="Small Text Regular" text3="Small Text Light" additionalClassNames="gap-[24px] leading-[16px] text-[12px]" />
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[360px] mt-[57px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">12px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[909px] mt-[57px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">16px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[641px] mt-[57px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
              </div>
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
                <Helper text="Small Text Bold" text1="Small Text Medium" text2="Small Text Regular" text3="Small Text Light" additionalClassNames="gap-[24px] leading-[14px] text-[10px]" />
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[360px] mt-[57px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">10px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[909px] mt-[57px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">14px</p>
                </div>
                <div className="col-1 flex flex-col font-['Inter_Tight:Medium',sans-serif] justify-center ml-[641px] mt-[57px] relative row-1 text-[16px]">
                  <p className="leading-[22px]">0%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}