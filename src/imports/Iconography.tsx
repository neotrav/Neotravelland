import clsx from "clsx";
import svgPaths from "./svg-p3vs46i6sc";

function IconOutlineSwapHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-12.5%_-25%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.5 7.5">
        {children}
      </svg>
    </div>
  );
}

function IconOutlineCopyHelper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[-4.41%_-5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 18.5">
        {children}
      </svg>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
        {children}
      </svg>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({ children, additionalClassNames = "" }: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.3965 19.4142">
        {children}
      </svg>
    </div>
  );
}

function Vector1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[10.53%_21.17%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.8398 18.9474">
        {children}
      </svg>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[8.33%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        {children}
      </svg>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={additionalClassNames}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        {children}
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text, children }: React.PropsWithChildren<TextProps>) {
  return (
    <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
      <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">{children}</div>
      </div>
      <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">{text}</p>
    </div>
  );
}
type IconOutlineSwapVectorProps = {
  additionalClassNames?: string;
};

function IconOutlineSwapVector({ children, additionalClassNames = "" }: React.PropsWithChildren<IconOutlineSwapVectorProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <div className="absolute inset-[-0.75px_-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 1.5">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Vector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[23.96%_19.79%_19.79%_19.79%]">
      <div className="absolute inset-[-5.56%_-5.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 15">
          {children}
        </svg>
      </div>
    </div>
  );
}

function IconOutlineNotSerachVector({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute inset-[35.42%_43.75%_43.75%_35.42%]">
      <div className="absolute inset-[-10%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          {children}
        </svg>
      </div>
    </div>
  );
}

function Layer({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute contents inset-0">
      <Wrapper additionalClassNames="absolute contents inset-0">{children}</Wrapper>
    </div>
  );
}
type Helper1Props = {
  additionalClassNames?: string;
};

function Helper1({ additionalClassNames = "" }: Helper1Props) {
  return (
    <div className={clsx("flex-none h-[11.899px] w-[6.95px]", additionalClassNames)}>
      <div className="relative size-full" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.94975 11.8995">
          <path d={svgPaths.p102ad600} fill="var(--fill-0, #151827)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}
type IconProps = {
  additionalClassNames?: string;
};

function Icon({ additionalClassNames = "" }: IconProps) {
  return (
    <div className={additionalClassNames}>
      <div className="absolute inset-[-10.1%_-5.56%_-10.1%_-7.86%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.4142 16.8284">
          <path d={svgPaths.p393a6d00} id="Icon" stroke="var(--stroke-0, #151827)" strokeLinecap="square" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={clsx("flex-none h-[14px] w-[18px]", additionalClassNames)}>
      <Icon additionalClassNames="relative size-full" />
    </div>
  );
}

function IconOutlineChildHelper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 3 3" className="absolute block size-full">
      <path d={svgPaths.p3cbff000} fill="var(--fill-0, black)" id="Vector" />
    </svg>
  );
}

function IconOutlinePastHelper() {
  return (
    <svg fill="none" preserveAspectRatio="none" viewBox="0 0 9 1" className="absolute block size-full">
      <g id="Group">
        <path d={svgPaths.p63af500} fill="var(--fill-0, #151827)" id="Vector" />
      </g>
    </svg>
  );
}
type IconsBoldCalendarVectorProps = {
  additionalClassNames?: string;
};

function IconsBoldCalendarVector({ additionalClassNames = "" }: IconsBoldCalendarVectorProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
        <path d={svgPaths.p2d8203c0} fill="var(--fill-0, #434B68)" id="Vector" />
      </svg>
    </div>
  );
}
type IconsBoldScanQrGroupProps = {
  additionalClassNames?: string;
};

function IconsBoldScanQrGroup({ additionalClassNames = "" }: IconsBoldScanQrGroupProps) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.54547 6.54547">
        <g id="Group">
          <path d={svgPaths.p330003f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Iconography() {
  return (
    <div className="bg-white relative size-full" data-name="Iconography">
      <div className="-translate-x-1/2 absolute h-[220px] left-1/2 top-[208px] w-[1400px]" data-name="Header" />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[8px] items-start left-1/2 p-[24px] top-0" data-name="Header">
        <div className="absolute left-[1215px] size-[225px] top-[-1px]" data-name="Logo" />
        <div className="bg-[#88d756] relative rounded-[12px] shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-end size-full">
            <div className="content-stretch flex gap-[12px] items-end px-[48px] py-[32px] relative w-full">
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start justify-center min-h-px min-w-px relative" data-name="Container">
                <div className="bg-[#f8faff] content-stretch flex items-start justify-center px-[12px] py-[6px] relative rounded-[12px] shrink-0" data-name="Section Title">
                  <p className="font-['Inter_Tight:Medium',sans-serif] leading-[26px] not-italic relative shrink-0 text-[#151827] text-[20px] whitespace-nowrap">Foundations</p>
                </div>
                <p className="font-['Inter_Tight:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#151827] text-[48px] whitespace-nowrap">Iconography</p>
              </div>
              <p className="font-['Inter_Tight:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#151827] text-[64px] whitespace-nowrap">04</p>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[64px] items-start left-[calc(50%+0.5px)] pb-[72px] pt-[48px] px-[72px] top-[224px]" data-name="Container">
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
          <p className="font-['Inter_Tight:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] whitespace-nowrap">Outline</p>
          <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-[1257px]">
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Logo">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18.604px] left-[calc(50%+0.13px)] top-[calc(50%-0.2px)] w-[23.255px]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2552 18.6042">
                    <path d={svgPaths.p304c2800} id="Vector" stroke="var(--stroke-0, #212121)" strokeWidth="1.05089" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Logo</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Wallet">
                <div className="absolute inset-[3.75%_0]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22.2003">
                    <path d={svgPaths.p298e5800} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[56.91%_24.21%_33.99%_66.68%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18505 2.18505">
                    <path d={svgPaths.p3be0fa00} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Wallet</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Case">
                <div className="absolute contents inset-[54.55%_2.27%_6.82%_2.27%]" data-name="Group">
                  <div className="absolute inset-[54.55%_2.27%_6.82%_2.27%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.9091 9.27272">
                      <g id="Group">
                        <path d={svgPaths.p21c7db00} fill="var(--fill-0, #151827)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="absolute contents inset-[22.73%_0_31.82%_0]" data-name="Group">
                  <div className="absolute inset-[22.73%_0_31.82%_0]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 10.909">
                      <g id="Group">
                        <path d={svgPaths.p1807a680} fill="var(--fill-0, #151827)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="absolute contents inset-[6.82%_31.82%_81.82%_31.82%]" data-name="Group">
                  <div className="absolute inset-[6.82%_31.82%_81.82%_31.82%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.72719 2.72723">
                      <g id="Group">
                        <path d={svgPaths.p97b4730} fill="var(--fill-0, #151827)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Case</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Settings">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d={svgPaths.p32fbe000} fill="var(--fill-0, #151827)" id="Vector" />
                </svg>
                <div className="absolute inset-[28.24%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4438 10.4438">
                    <path d={svgPaths.p3e2609f0} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Settings</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Deposit">
                <Vector>
                  <path d={svgPaths.p138d3480} id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </Vector>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Deposit</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Swap">
                <IconOutlineSwapVector additionalClassNames="inset-[29.17%_12.5%_70.83%_12.5%]">
                  <path d="M18.75 0.75H0.75" id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </IconOutlineSwapVector>
                <div className="absolute bottom-[58.33%] left-3/4 right-[12.5%] top-[16.67%]" data-name="Vector">
                  <IconOutlineSwapHelper>
                    <path d={svgPaths.p34bb8b00} id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </IconOutlineSwapHelper>
                </div>
                <div className="absolute bottom-[16.67%] left-[12.5%] right-3/4 top-[58.33%]" data-name="Vector">
                  <IconOutlineSwapHelper>
                    <path d={svgPaths.p28b54900} id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                  </IconOutlineSwapHelper>
                </div>
                <IconOutlineSwapVector additionalClassNames="inset-[70.83%_12.5%_29.17%_12.5%]">
                  <path d="M0.75 0.75H18.75" id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </IconOutlineSwapVector>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Swap</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Withdraw">
                <Vector>
                  <path d={svgPaths.p835a80} id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </Vector>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Withdraw</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/History">
                <div className="absolute inset-[5%_3.67%_8.12%_3.66%]">
                  <div className="absolute inset-[-0.89%_-0.83%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6118 21.2221">
                      <g id="Group 2131332489">
                        <path d={svgPaths.pf842180} fill="var(--fill-0, #151827)" id="Vector" stroke="var(--stroke-0, #151827)" strokeWidth="0.185334" />
                        <path d={svgPaths.p2b501600} fill="var(--fill-0, #151827)" id="Vector_2" stroke="var(--stroke-0, #151827)" strokeWidth="0.185334" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">History</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Copy">
                <div className="absolute bottom-[8.33%] left-1/4 right-[12.5%] top-[20.83%]" data-name="Vector">
                  <IconOutlineCopyHelper>
                    <path d={svgPaths.p2a7c2300} id="Vector" stroke="var(--stroke-0, #151827)" strokeWidth="1.5" />
                  </IconOutlineCopyHelper>
                </div>
                <div className="absolute bottom-[20.83%] left-[12.5%] right-1/4 top-[8.33%]" data-name="Vector">
                  <IconOutlineCopyHelper>
                    <path d={svgPaths.p1eaa3980} id="Vector" stroke="var(--stroke-0, #151827)" strokeWidth="1.5" />
                  </IconOutlineCopyHelper>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Copy</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Chevron-Down">
                <div className="absolute flex inset-[35.52%_24.75%_35.52%_25.67%] items-center justify-center">
                  <Helper1 additionalClassNames="rotate-90" />
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Chevron Down</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Chevron-Up">
                <div className="absolute flex inset-[35.52%_24.75%_35.52%_25.67%] items-center justify-center">
                  <Helper1 additionalClassNames="-rotate-90" />
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Chevron Up</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Chevron-Left">
                <div className="absolute flex inset-[25.21%_35.06%_25.21%_35.98%] items-center justify-center">
                  <Helper1 additionalClassNames="rotate-180" />
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Chevron Left</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Chevron-Right">
                <div className="absolute flex inset-[25.21%_35.06%_25.21%_35.98%] items-center justify-center">
                  <Helper1 additionalClassNames="-scale-y-100" />
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Chevron Right</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Arrow-Left">
                <Icon additionalClassNames="absolute inset-[20.83%_12.5%]" />
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Arrow Left</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Arrow-Right">
                <div className="absolute flex inset-[20.83%_12.5%] items-center justify-center">
                  <Helper additionalClassNames="-scale-y-100 rotate-180" />
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Arrow Right</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Arrow-Down">
                <div className="absolute flex inset-[12.5%_20.83%] items-center justify-center">
                  <Helper additionalClassNames="-rotate-90" />
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Arrow Down</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Arrow-Up">
                <div className="absolute flex inset-[12.5%_20.83%] items-center justify-center">
                  <Helper additionalClassNames="-scale-y-100 rotate-90" />
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Arrow Up</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Refresh">
                <Wrapper additionalClassNames="absolute contents inset-0">
                  <g id="refresh-circle">
                    <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #292D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    <g id="Group">
                      <path d={svgPaths.p29d7200} id="Vector_2" stroke="var(--stroke-0, #292D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d={svgPaths.p1963d880} id="Vector_3" stroke="var(--stroke-0, #292D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M7.82001 17.18V14.51H10.49" id="Vector_4" stroke="var(--stroke-0, #292D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      <path d="M16.18 6.82001V9.48999H13.51" id="Vector_5" stroke="var(--stroke-0, #292D32)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </g>
                    <g id="Vector_6" opacity="0" />
                  </g>
                </Wrapper>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Arrow Left</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Close">
                <div className="absolute inset-[20.83%]">
                  <div className="absolute inset-[-10.1%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8284 16.8284">
                      <path d={svgPaths.p13876c00} id="Vector 1" stroke="var(--stroke-0, #151827)" strokeLinecap="square" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Close</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Speed-up">
                <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-[20%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9998 13.1999">
                    <path d={svgPaths.p39c9a500} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Speed Up</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Calendar">
                <Wrapper1>
                  <path clipRule="evenodd" d={svgPaths.p2934d300} fill="var(--fill-0, #0A0A0A)" fillRule="evenodd" id="Exclude" />
                </Wrapper1>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Calendar</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Rate">
                <div className="absolute inset-[25.83%_5.83%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.2002 11.6001">
                    <path d={svgPaths.p13880000} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Rate</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Percent">
                <Wrapper1>
                  <g id="Vector">
                    <path d={svgPaths.p1bfa2480} fill="var(--fill-0, #151827)" />
                    <path d={svgPaths.p38070600} fill="var(--fill-0, #151827)" />
                    <path d={svgPaths.p12739f80} fill="var(--fill-0, #151827)" />
                  </g>
                </Wrapper1>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Percent</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Planet">
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p1f0e9d00} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Planet</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Link">
                <div className="absolute inset-[13.21%_13.22%_13.21%_13.21%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6568 17.6569">
                    <path d={svgPaths.p2b248300} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Link</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Share">
                <div className="absolute inset-[8.15%_12.22%_8.15%_9.45%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7998 20.0869">
                    <g id="Vector">
                      <path clipRule="evenodd" d={svgPaths.p2def040} fill="var(--fill-0, #151827)" fillRule="evenodd" />
                      <path d={svgPaths.p8ee7970} fill="var(--fill-0, #151827)" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Share</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Location">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <g id="Location">
                    <path d={svgPaths.p386fa380} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeWidth="1.5" />
                    <path d={svgPaths.p21efb480} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeWidth="1.5" />
                    <g id="Vector_3" opacity="0" />
                  </g>
                </svg>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Geo</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Pen">
                <div className="absolute inset-[12.49%_12.49%_12.5%_12.5%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0025 18.0025">
                    <path d={svgPaths.p39ac7f80} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Pen</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/i">
                <div className="-translate-y-1/2 absolute aspect-[18/18] left-[12.5%] right-[12.5%] top-1/2" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p2c62df80} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">i</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Question">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector" />
                </svg>
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <div className="absolute inset-[-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                      <path d={svgPaths.p1d7c1c80} id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[66.41%_46.09%_25.78%_46.09%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.875 1.875">
                    <path d={svgPaths.p29bfc400} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[31.25%_39.06%_43.75%_39.06%]" data-name="Vector">
                  <div className="absolute inset-[-12.5%_-14.29%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75 7.5">
                      <path d={svgPaths.p270e2180} id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Question</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Private Policy">
                <Wrapper3 additionalClassNames="inset-[9.38%_9.37%_9.38%_9.38%]">
                  <g id="Icon">
                    <path d={svgPaths.p37038180} fill="var(--fill-0, #151827)" id="Vector" />
                  </g>
                </Wrapper3>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Private Policy</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Terms of Service">
                <div className="absolute inset-[9.38%_17.71%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 19.5">
                    <path d={svgPaths.p95ca480} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Terms of Service</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Refund Policy">
                <Wrapper3 additionalClassNames="inset-[9.38%]">
                  <path d={svgPaths.p4abea00} fill="var(--fill-0, #151827)" id="Vector" />
                </Wrapper3>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Refund Policy</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/plus">
                <Wrapper1>
                  <path d="M0 10H10M20 10H10M10 10V0V20" id="plus" stroke="var(--stroke-0, #151827)" strokeWidth="1.5" />
                </Wrapper1>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Plus</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/minus">
                <div className="absolute bottom-1/2 left-[8.33%] right-[8.33%] top-1/2" data-name="minus">
                  <div className="absolute inset-[-0.75px_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1.5">
                      <path d="M0 0.75H20" id="minus" stroke="var(--stroke-0, #151827)" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Minus</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Child">
                <div className="absolute bottom-[35.42%] left-1/4 right-[62.5%] top-[52.08%]" data-name="Vector">
                  <IconOutlineChildHelper />
                </div>
                <div className="absolute inset-[4.17%_2.08%_2.08%_-2.08%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 22.5">
                    <path d={svgPaths.p132d77f0} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[52.08%_29.17%_35.42%_58.33%]" data-name="Vector">
                  <IconOutlineChildHelper />
                </div>
                <div className="absolute inset-[72.92%_38.54%_16.68%_34.37%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.50037 2.49511">
                    <path d={svgPaths.p2eae1cc0} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Child</p>
            </div>
            <Text text="Past">
              <div className="overflow-clip relative size-[24px]" data-name="Icon/Outline/Past">
                <div className="absolute bottom-[16.67%] left-1/4 right-[4.17%] top-0" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 20">
                    <g id="Group">
                      <path d={svgPaths.p20973880} fill="var(--fill-0, #151827)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-[4.17%] right-1/4 top-[12.5%]" data-name="Group">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 21">
                    <g id="Group">
                      <path d={svgPaths.p18b26000} fill="var(--fill-0, #151827)" id="Vector" />
                    </g>
                  </svg>
                </div>
                <div className="absolute inset-[29.17%_20.83%_66.67%_41.67%]" data-name="Group">
                  <IconOutlinePastHelper />
                </div>
                <div className="absolute bottom-1/2 left-[41.67%] right-[20.83%] top-[45.83%]" data-name="Group">
                  <IconOutlinePastHelper />
                </div>
                <div className="absolute inset-[62.5%_20.83%_33.33%_41.67%]" data-name="Group">
                  <IconOutlinePastHelper />
                </div>
              </div>
            </Text>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Not_Serach">
                <IconOutlineNotSerachVector>
                  <path d="M5.5 0.5L0.5 5.5" id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" />
                </IconOutlineNotSerachVector>
                <IconOutlineNotSerachVector>
                  <path d="M0.5 0.5L5.5 5.5" id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" />
                </IconOutlineNotSerachVector>
                <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-3.13%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
                      <path d={svgPaths.p178f7d00} id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-[69.58%_12.5%_12.5%_69.58%]" data-name="Vector">
                  <div className="absolute inset-[-11.63%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3 5.3">
                      <path d="M4.8 4.8L0.5 0.5" id="Vector" stroke="var(--stroke-0, #151827)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Not Search</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Lock">
                <div className="absolute inset-[10%_20%]" data-name="Icon">
                  <div className="absolute inset-[-3.91%_-5.21%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9 20.7">
                      <path d={svgPaths.p12662300} id="Icon" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Lock</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Search">
                <div className="absolute inset-[12.5%_8.33%_8.33%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-5.26%_-3.72%_-3.72%_-5.26%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.7071 20.7071">
                      <path d={svgPaths.p15898e00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Search</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/User">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p37113980} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">User</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Outline/Block">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Vector">
                  <div className="absolute inset-[-5%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                      <path d={svgPaths.p1fd9d400} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Block</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Heart">
                <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
                  <div className="absolute inset-[-6.25%_-5.56%_-7.63%_-5.56%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18.2209">
                      <path d={svgPaths.p89c9d80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Heart</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Menu">
                <div className="absolute flex inset-[20.83%_45.83%] items-center justify-center">
                  <div className="flex-none h-[2px] rotate-90 w-[14px]">
                    <div className="relative size-full" data-name="Icon">
                      <div className="absolute inset-[-50%_-7.14%]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
                          <path d={svgPaths.p12957400} id="Icon" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Menu</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Chevron-Left">
                <div className="absolute inset-[12.5%_37.5%_12.5%_26.29%]" data-name="Vector">
                  <Wrapper2 additionalClassNames="inset-[-3.93%_-8.14%_-3.93%_-11.51%]">
                    <path d={svgPaths.p1779d040} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeWidth="2" />
                  </Wrapper2>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Chevron Left</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Chevron-Right">
                <div className="absolute inset-[12.5%_26.29%_12.5%_37.5%]" data-name="Vector">
                  <Wrapper2 additionalClassNames="inset-[-3.93%_-11.51%_-3.93%_-8.14%]">
                    <path d={svgPaths.p23493500} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeWidth="2" />
                  </Wrapper2>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Chevron Right</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Bell">
                <div className="absolute inset-[10.42%_12.5%_10.43%_12.5%]" data-name="Bell">
                  <div className="absolute inset-[-3.95%_-4.17%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5001 20.4965">
                      <g id="Bell">
                        <path d={svgPaths.p11187080} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                        <path d={svgPaths.p124d1800} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Bell</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Outline/Filter">
                <div className="absolute inset-[20.83%_8.33%]" data-name="Vector">
                  <div className="absolute inset-[-7.14%_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                      <path d={svgPaths.p22ff6100} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Filter</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
          <p className="font-['Inter_Tight:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] whitespace-nowrap">Filled</p>
          <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-[1251px]">
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0" data-name="Icons/Bold/Eye Open">
                <div className="content-stretch flex flex-col items-start relative">
                  <Wrapper additionalClassNames="relative shrink-0 size-[24px]">
                    <g id="Img">
                      <path d={svgPaths.p79f1700} fill="var(--fill-0, #11181C)" id="Vector" />
                      <path clipRule="evenodd" d={svgPaths.p26ba13c0} fill="var(--fill-0, #11181C)" fillRule="evenodd" id="Vector_2" />
                    </g>
                  </Wrapper>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Eye Open</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Eye Close">
                <div className="absolute inset-[26.04%_5.26%_28.13%_5.2%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4906 11.0004">
                    <path d={svgPaths.p150fa900} fill="var(--fill-0, #11181C)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Eye Close</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icons/Bold/Timer">
                <div className="absolute inset-[8.33%_6.25%_8.33%_10.42%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d={svgPaths.p102e5c40} fill="var(--fill-0, #151827)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Timer</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/check-rounded">
                <Wrapper1>
                  <path d={svgPaths.p50e28b2} fill="var(--fill-0, #151827)" id="Subtract" />
                </Wrapper1>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Check</p>
            </div>
            <Text text="Cross">
              <div className="relative size-[24px]" data-name="Icons/Bold/cross">
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center p-[2px] relative size-full">
                    <div className="bg-[#151827] content-stretch flex flex-col items-center relative rounded-[20px] shrink-0 size-[20px]" data-name="Background">
                      <div className="flex flex-col font-['Roboto:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[13.75px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[18.75px]">x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Text>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Airplane">
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9998 18.0004">
                    <path d={svgPaths.p2ae6e100} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Airplane</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Car">
                <div className="absolute inset-[6.25%_0]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
                    <path d={svgPaths.p1e217300} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Car</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Case 1">
                <Vector1>
                  <path d={svgPaths.p2c4ae100} fill="var(--fill-0, #11181C)" id="Vector" />
                </Vector1>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Case 1</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Case 2">
                <Vector1>
                  <path d={svgPaths.pfb0bc20} fill="var(--fill-0, #11181C)" id="Vector" />
                </Vector1>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Case 2</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Chair">
                <div className="-translate-y-1/2 absolute h-[16px] left-[22.92%] right-[27.08%] top-[calc(50%+0.5px)]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 16">
                    <path d={svgPaths.p32a6be00} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Chair</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/User">
                <div className="absolute contents inset-[14.58%_17.96%_12.5%_17.96%]">
                  <div className="absolute contents inset-[14.58%_30.77%_46.96%_30.77%]" data-name="Group">
                    <div className="absolute inset-[14.58%_30.77%_46.96%_30.77%]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.22852 9.22852">
                        <g id="Group">
                          <path d={svgPaths.p259f8d00} fill="var(--fill-0, black)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute contents inset-[57.31%_17.96%_12.5%_17.96%]" data-name="Group">
                    <div className="absolute inset-[57.31%_17.96%_12.5%_17.96%]" data-name="Group">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.3809 7.24609">
                        <g id="Group">
                          <path d={svgPaths.p125e4f00} fill="var(--fill-0, black)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">User</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/AddUser">
                <div className="absolute inset-[16.67%_4.17%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 16">
                    <path d={svgPaths.p13903d70} fill="var(--fill-0, #151827)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Add User</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Calendar">
                <IconsBoldCalendarVector additionalClassNames="inset-[6.25%_68.75%_81.25%_22.92%]" />
                <IconsBoldCalendarVector additionalClassNames="inset-[6.25%_22.92%_81.25%_68.75%]" />
                <div className="absolute inset-[37.5%_8.33%_6.25%_8.33%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13.5">
                    <path d={svgPaths.p1801b100} fill="var(--fill-0, #434B68)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[12.5%_8.33%_66.67%_8.33%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 5">
                    <path d={svgPaths.p58b7600} fill="var(--fill-0, #434B68)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Calendar</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icons/Bold/Email">
                <Wrapper additionalClassNames="absolute contents inset-0">
                  <g id="sms">
                    <g id="Vector" opacity="0" />
                    <path d={svgPaths.p5000c80} fill="var(--fill-0, #151827)" id="Vector_2" />
                  </g>
                </Wrapper>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Email</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Arrows_Left_Right">
                <div className="absolute inset-[20.84%_12.5%_20.83%_12.5%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.9998 13.9997">
                    <path d={svgPaths.pdc5f080} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Arrows Left Right</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/Baby">
                <div className="absolute inset-[40.27%_40.31%_0_0.01%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3242 14.3346">
                    <path d={svgPaths.p2b8c6030} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[15.49%_15.53%_18.35%_18.34%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.8729 15.8775">
                    <path d={svgPaths.p6e1f00} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
                <div className="absolute inset-[0_0.01%_45.92%_45.63%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0473 12.9802">
                    <path d={svgPaths.p10ce1db0} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Baby</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Bold/ScanQR">
                <div className="absolute contents inset-0" data-name="Group">
                  <div className="absolute inset-[0_63.64%_63.64%_0]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.72727 8.72727">
                      <g id="Group">
                        <path d={svgPaths.p1f2c5f00} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-[0_0_63.64%_63.64%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.72726 8.72727">
                      <g id="Group">
                        <path d={svgPaths.p363d0a00} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-[63.64%_63.64%_0_0]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.72731 8.72727">
                      <g id="Group">
                        <path d={svgPaths.p1683f200} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-[63.64%_0_0_63.64%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.72731 8.72731">
                      <g id="Group">
                        <path d={svgPaths.pbc8d700} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <IconsBoldScanQrGroup additionalClassNames="inset-[18.18%_54.55%_54.55%_18.18%]" />
                  <IconsBoldScanQrGroup additionalClassNames="inset-[54.55%_54.55%_18.18%_18.18%]" />
                  <IconsBoldScanQrGroup additionalClassNames="inset-[18.18%_18.18%_54.55%_54.55%]" />
                  <div className="absolute inset-[54.55%_36.36%_31.82%_54.55%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.18184 3.27276">
                      <g id="Group">
                        <path d={svgPaths.p1dc72b80} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-[54.55%_18.18%_36.36%_68.18%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.27276 2.18184">
                      <g id="Group">
                        <path d={svgPaths.p3607b900} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute inset-[72.73%_18.18%_18.18%_59.09%]" data-name="Group">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.45455 2.18184">
                      <g id="Group">
                        <path d={svgPaths.p20665300} fill="var(--fill-0, black)" id="Vector" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Scan QR</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icons/Bold/City">
                <div className="flex flex-col items-center size-full">
                  <div className="content-stretch flex flex-col items-center justify-between p-[2px] relative size-full">
                    <div className="aspect-[20/20] flex-[1_0_0] min-h-px min-w-px relative" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path d={svgPaths.pa50bf00} fill="var(--fill-0, #434B68)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">City</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Bold/Checkbox_Element">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute border-2 border-[#8f95a2] border-solid left-1/2 rounded-[7.2px] size-[20px] top-1/2" data-name="Checkbox_Element" />
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Checkbox_Element</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Bold/Checkbox_Element_Tick">
                <div className="absolute contents left-[2px] top-[2px]" data-name="Checkbox_Element_Tick">
                  <div className="absolute bg-[#88d756] left-[2px] rounded-[7.2px] size-[20px] top-[2px]" data-name="Checkbox_Element" />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.44px] left-[calc(50%+0.11px)] top-[calc(50%+0.22px)] w-[6.22px]" data-name="Tick">
                    <div className="absolute inset-[-11.26%_-8.04%_-16%_-8.04%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.22003 5.65046">
                        <g id="Tick">
                          <path d={svgPaths.p252f6c00} id="Tick_2" stroke="var(--stroke-0, #151827)" strokeLinecap="round" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#11181c] text-[16px] text-center w-[min-content]">Checkbox_Element_Tick</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Bold/Filters">
                <div className="absolute inset-[14.58%_8.33%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
                    <path d={svgPaths.p2d21b880} fill="var(--fill-0, #434B68)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#11181c] text-[16px] text-center w-[min-content]">Filters</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Bold/Star">
                <Wrapper1>
                  <path clipRule="evenodd" d={svgPaths.p3cfa30f0} fill="var(--fill-0, #151827)" fillRule="evenodd" id="Vector" />
                </Wrapper1>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#11181c] text-[16px] text-center w-[min-content]">Star</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon/Filled/Verification">
                <div className="absolute inset-[2.5%_9.38%_3.12%_9.38%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 22.65">
                    <path d={svgPaths.p2b286c80} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Verification</p>
            </div>
            <div className="bg-white content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Filled/Add">
                <Wrapper1>
                  <path d={svgPaths.p3a8b8c00} fill="var(--fill-0, #0A0A0A)" id="Vector" />
                </Wrapper1>
              </div>
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Add</p>
            </div>
            <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <p className="font-['Airbnb_Cereal_App:Book',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">Star</p>
            </div>
            <div className="bg-white content-stretch flex flex-col items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#d8dce0] border-solid inset-0 pointer-events-none" />
              <div className="relative shrink-0 size-[24px]" data-name="Icon/Filled/Lock">
                <div className="absolute inset-[6.88%_16.88%_6.87%_16.87%]" data-name="Lock">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9 20.7">
                    <path clipRule="evenodd" d={svgPaths.p1b44aa80} fill="var(--fill-0, #0A0A0A)" fillRule="evenodd" id="Lock" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="Container">
          <p className="font-['Inter_Tight:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] whitespace-nowrap">Crypto coin icons</p>
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Crypto/BTC">
                <Wrapper additionalClassNames="absolute contents inset-0">
                  <g id="_1421344023328">
                    <path d={svgPaths.p262f4012} fill="var(--fill-0, #F7931A)" id="Vector" />
                    <path d={svgPaths.p1e633280} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                </Wrapper>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">BTC</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Crypto/ETH">
                <Layer>
                  <g id="Ethereum (ETH)">
                    <path d={svgPaths.p1c665200} fill="var(--fill-0, #5F7EDD)" id="Vector" />
                    <path d={svgPaths.p22c85a00} fill="var(--fill-0, white)" id="Vector_2" />
                    <path d={svgPaths.p1663100} fill="var(--fill-0, white)" id="Vector_3" />
                    <g id="Group">
                      <path d={svgPaths.p1b706e00} fill="var(--fill-0, #C1CCF7)" id="Vector_4" />
                      <path d={svgPaths.p322072c0} fill="var(--fill-0, #C1CCF7)" id="Vector_5" />
                      <path d={svgPaths.p3fcb5c40} fill="var(--fill-0, #C1CCF7)" id="Vector_6" />
                    </g>
                    <path d={svgPaths.p2dff0200} fill="var(--fill-0, #8198EE)" id="Vector_7" />
                  </g>
                </Layer>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">ETH</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Crypto/TRX">
                <Layer>
                  <g id="Tron (TRX)">
                    <path d={svgPaths.p1c665200} fill="var(--fill-0, #FF0E12)" id="Vector" />
                    <path d={svgPaths.p9dca800} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                </Layer>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">TRX</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Crypto/BNB">
                <Layer>
                  <g id="Binance (BNB)">
                    <path d={svgPaths.p1c665200} fill="var(--fill-0, #F3BC36)" id="Vector" />
                    <path clipRule="evenodd" d={svgPaths.pe6a9680} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
                  </g>
                </Layer>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">BNB</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Crypto/USDT">
                <Layer>
                  <g id="Tether (USDT)">
                    <path d={svgPaths.p1c665200} fill="var(--fill-0, #59AF99)" id="Vector" />
                    <path d={svgPaths.p5fe9400} fill="var(--fill-0, white)" id="Vector_2" />
                  </g>
                </Layer>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">USDT</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Crypto/USD">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9995 23.9995">
                  <path d={svgPaths.pa41fb00} fill="var(--fill-0, #F0F0F0)" id="Vector" />
                </svg>
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.9995 23.9996">
                  <g id="Group">
                    <path clipRule="evenodd" d={svgPaths.p8cd5ef0} fill="var(--fill-0, #D80027)" fillRule="evenodd" id="Vector" />
                    <path clipRule="evenodd" d={svgPaths.p267e2d00} fill="var(--fill-0, #0052B4)" fillRule="evenodd" id="Vector_2" />
                  </g>
                </svg>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">USD</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icons/Crypto/XRP">
                <div className="absolute inset-[4.17%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <path d={svgPaths.p2cd97b00} fill="var(--fill-0, #23292F)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">XRP</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[32px] h-[254px] items-start relative shrink-0" data-name="Container">
          <p className="font-['Inter_Tight:Bold',sans-serif] leading-[48px] not-italic relative shrink-0 text-[#0a0a0a] text-[40px] whitespace-nowrap">Color icon</p>
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Icons/Color/Airplane">
                <div className="absolute left-0 size-[40px] top-0" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.0003 40">
                    <g id="Vector">
                      <path d={svgPaths.p2764e200} fill="#3399FF" />
                      <path d={svgPaths.p1078eb80} fill="var(--fill-0, #FEFEFE)" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Aiplane</p>
            </div>
            <div className="bg-[#f8faff] content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 size-[165px]">
              <div aria-hidden="true" className="absolute border border-[#bdc5d8] border-solid inset-0 pointer-events-none" />
              <div className="bg-[#88d756] overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="Icons/Color/Car">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[15.75px] left-1/2 top-1/2 w-[18px]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15.75">
                    <path d={svgPaths.p16e36800} fill="var(--fill-0, #FEFEFE)" id="Vector" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter_Tight:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#11181c] text-[16px] whitespace-nowrap">Car</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}