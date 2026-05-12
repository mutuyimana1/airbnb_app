import svgPaths from "./svg-2j5m65qew3";
import imgStartHeaderBanner from "./10655a55ec79232904a9e80359c3adde980f24fb.png";
import imgPhotoshopPng from "./15ffb1feae1172498473f37c31ccd3a1bede3c8b.png";
import imgGlassPng from "./5a014464916ba591823392aedf9531d6ae4234fc.png";
import imgGraphV1Png from "./ddc091bf89a102f095f7c43b3fe0bfb6e754adba.png";
import imgDegreesPng from "./38e87226e7a8d636141d17a2acd496e5297b1e54.png";
import imgSalesPerformanceV2Png from "./c2e43e547d1233b8a6352e299b160670ca57741f.png";
import imgImageDescription from "./65fe72607cfdb7be921a3d8dfffa36af52f4dfc1.png";
import imgImageDescription1 from "./c774b2117f5bdb790f047e64ff9b67e99c51d19f.png";
import imgImageDescription2 from "./f70914d5243a1812c4c9f716c79f214672ff65cc.png";
import imgImageDescription3 from "./e384f06b4c12221316956bec4da2834bd662b40f.png";
import imgMiniLogoPng from "./95175b287e1a32dee4d19a5eb67db8abc7dbaaec.png";
import imgLogo from "./845b21f65344d6146fb695bae9c54a5c6ced992a.png";

function PhotoshopPng() {
  return (
    <div className="h-[34.11px] relative shrink-0 w-[35px]" data-name="photoshop.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-full" src={imgPhotoshopPng} />
      </div>
    </div>
  );
}

function H3AlignItemsCenter() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="h3.align-items-center">
      <PhotoshopPng />
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Adobe Photoshop</p>
      </div>
    </div>
  );
}

function DivContentText() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-75 relative shrink-0 w-full" data-name="div.content-text">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[21px] mb-0">It is a long established fact that a reader will be</p>
        <p className="leading-[21px] mb-0">distracted by the readable content of a page when</p>
        <p className="leading-[21px]">looking at its layout their default.</p>
      </div>
    </div>
  );
}

function DivHeaderBannerContext() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[350px] min-w-[350px] relative shrink-0" data-name="div.header-banner-context">
      <H3AlignItemsCenter />
      <DivContentText />
      <div className="bg-[#f8f9fa] content-stretch flex items-center justify-center px-[16.833px] py-[10.337px] relative rounded-[12.8px] shrink-0" data-name="Component 1">
        <div aria-hidden="true" className="absolute border border-[#f8f9fa] border-solid inset-0 pointer-events-none rounded-[12.8px]" />
        <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-black text-center whitespace-nowrap">
          <p className="leading-[21px]">Start free trial</p>
        </div>
      </div>
    </div>
  );
}

function GlassPng() {
  return (
    <div className="absolute h-[207.76px] left-0 top-0 w-[200px]" data-name="glass.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGlassPng} />
      </div>
    </div>
  );
}

function ImgContentWrapperImgMargin() {
  return (
    <div className="h-[183.76px] relative shrink-0 w-[200px]" data-name="img.content-wrapper-img:margin">
      <GlassPng />
    </div>
  );
}

function StartHeaderBanner() {
  return (
    <div className="bg-size-[67px_100px,auto_auto] bg-top-left relative rounded-[16px] shrink-0 w-full" style={{ backgroundImage: `url('${imgStartHeaderBanner}'), linear-gradient(90deg, rgb(248, 69, 37) 0%, rgb(247, 183, 51) 100%)` }} data-name="Start header banner">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[23.99px] pr-[24px] py-[24px] relative size-full">
          <DivHeaderBannerContext />
          <ImgContentWrapperImgMargin />
        </div>
      </div>
    </div>
  );
}

function DivFs() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.fs-14">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9a9a9a] text-[14px] w-full">
        <p className="leading-[21px]">Times Bookmarked</p>
      </div>
    </div>
  );
}

function H3FwSemiBold() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.fw-semi-bold">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[28px] w-full">
        <p className="leading-[33.6px]">2:45</p>
      </div>
    </div>
  );
}

function DivFlexGrow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="div.flex-grow-1">
      <DivFs />
      <H3FwSemiBold />
    </div>
  );
}

function DivFlexGrow1Margin() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="div.flex-grow-1:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative size-full">
          <DivFlexGrow />
        </div>
      </div>
    </div>
  );
}

function GraphV1Png() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="graph-v1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGraphV1Png} />
      </div>
    </div>
  );
}

function DivFlexShrink() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.flex-shrink-0">
      <GraphV1Png />
    </div>
  );
}

function DivDFlex() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="div.d-flex">
      <DivFlexGrow1Margin />
      <DivFlexShrink />
    </div>
  );
}

function DivCard() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.7)] flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="div.card">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="div.card:shadow" />
        <DivDFlex />
      </div>
    </div>
  );
}

function DivColSm6Margin() {
  return (
    <div className="flex-[1_0_0] max-w-[1335.989990234375px] min-w-px relative self-stretch" data-name="div.col-sm-6:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pl-[8px] pr-[7.99px] pt-[16px] relative size-full">
          <DivCard />
        </div>
      </div>
    </div>
  );
}

function DivFs1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.fs-14">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9a9a9a] text-[14px] w-full">
        <p className="leading-[21px]">Progress</p>
      </div>
    </div>
  );
}

function H3FwSemiBold1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.fw-semi-bold">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[28px] w-full">
        <p className="leading-[33.6px]">70%</p>
      </div>
    </div>
  );
}

function DivFlexGrow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="div.flex-grow-1">
      <DivFs1 />
      <H3FwSemiBold1 />
    </div>
  );
}

function DivFlexGrow1Margin1() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="div.flex-grow-1:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative size-full">
          <DivFlexGrow1 />
        </div>
      </div>
    </div>
  );
}

function DegreesPng() {
  return (
    <div className="relative shrink-0 size-[50px]" data-name="degrees.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDegreesPng} />
      </div>
    </div>
  );
}

function DivFlexShrink1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.flex-shrink-0">
      <DegreesPng />
    </div>
  );
}

function DivDFlex1() {
  return (
    <div className="content-stretch flex h-[50px] items-start relative shrink-0 w-full" data-name="div.d-flex">
      <DivFlexGrow1Margin1 />
      <DivFlexShrink1 />
    </div>
  );
}

function DivCard1() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.7)] flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="div.card">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="div.card:shadow" />
        <DivDFlex1 />
      </div>
    </div>
  );
}

function DivColSm6Margin1() {
  return (
    <div className="flex-[1_0_0] max-w-[1335.989990234375px] min-w-px relative self-stretch" data-name="div.col-sm-6:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pl-[7.99px] pr-[8px] pt-[16px] relative size-full">
          <DivCard1 />
        </div>
      </div>
    </div>
  );
}

function DivFs2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.fs-14">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9a9a9a] text-[14px] w-full">
        <p className="leading-[21px]">Revenue</p>
      </div>
    </div>
  );
}

function H3FwSemiBold2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.fw-semi-bold">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[28px] w-full">
        <p className="leading-[33.6px]">$100</p>
      </div>
    </div>
  );
}

function DivFlexGrow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="div.flex-grow-1">
      <DivFs2 />
      <H3FwSemiBold2 />
    </div>
  );
}

function DivFlexGrow1Margin2() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-0.01px] relative self-stretch" data-name="div.flex-grow-1:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative size-full">
          <DivFlexGrow2 />
        </div>
      </div>
    </div>
  );
}

function SalesPerformanceV2Png() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="sales-performance-v2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgSalesPerformanceV2Png} />
      </div>
    </div>
  );
}

function DivFlexShrink2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.flex-shrink-0">
      <SalesPerformanceV2Png />
    </div>
  );
}

function DivDFlex2() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="div.d-flex">
      <DivFlexGrow1Margin2 />
      <DivFlexShrink2 />
    </div>
  );
}

function DivCard2() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.7)] flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="div.card">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="div.card:shadow" />
        <DivDFlex2 />
      </div>
    </div>
  );
}

function DivColSm6Margin2() {
  return (
    <div className="flex-[1_0_0] max-w-[1335.989990234375px] min-w-px relative self-stretch" data-name="div.col-sm-6:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pl-[7.99px] pr-[8px] pt-[16px] relative size-full">
          <DivCard2 />
        </div>
      </div>
    </div>
  );
}

function DivFs3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.fs-14">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#9a9a9a] text-[14px] w-full">
        <p className="leading-[21px]">Time-Spent</p>
      </div>
    </div>
  );
}

function H3FwSemiBold3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h3.fw-semi-bold">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[28px] w-full">
        <p className="leading-[33.6px]">2:45</p>
      </div>
    </div>
  );
}

function DivFlexGrow3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="div.flex-grow-1">
      <DivFs3 />
      <H3FwSemiBold3 />
    </div>
  );
}

function DivFlexGrow1Margin3() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-0.01px] relative self-stretch" data-name="div.flex-grow-1:margin">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative size-full">
          <DivFlexGrow3 />
        </div>
      </div>
    </div>
  );
}

function GraphV1Png1() {
  return (
    <div className="relative shrink-0 size-[64px]" data-name="graph-v1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgGraphV1Png} />
      </div>
    </div>
  );
}

function DivFlexShrink3() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="div.flex-shrink-0">
      <GraphV1Png1 />
    </div>
  );
}

function DivDFlex3() {
  return (
    <div className="content-stretch flex h-[64px] items-start relative shrink-0 w-full" data-name="div.d-flex">
      <DivFlexGrow1Margin3 />
      <DivFlexShrink3 />
    </div>
  );
}

function DivCard3() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.7)] flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="div.card">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" data-name="div.card:shadow" />
        <DivDFlex3 />
      </div>
    </div>
  );
}

function DivColSm6Margin3() {
  return (
    <div className="flex-[1_0_0] max-w-[1335.989990234375px] min-w-px relative self-stretch" data-name="div.col-sm-6:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pl-[8px] pr-[7.99px] pt-[16px] relative size-full">
          <DivCard3 />
        </div>
      </div>
    </div>
  );
}

function EndHeaderBanner() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 h-[127.99px] items-start justify-center relative shrink-0 w-[1335.99px]" data-name="End /. header banner">
      <DivColSm6Margin />
      <DivColSm6Margin1 />
      <DivColSm6Margin2 />
      <DivColSm6Margin3 />
    </div>
  );
}

function H6Mb() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[96.32px]" data-name="h6.mb-0">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#433c3a] text-[16px] top-[9.16px] w-[97.145px]">
        <p className="leading-[19.2px]">Total Income</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.align-items-center">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <H6Mb />
        <div className="content-stretch flex items-center justify-center p-px relative rounded-[6px] shrink-0 size-[35.99px]" data-name="Component 3">
          <div aria-hidden="true" className="absolute border border-[#eff2f7] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="relative shrink-0 size-[17.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4932 13.4932">
                  <path clipRule="evenodd" d={svgPaths.p3e790c80} fill="var(--fill-0, #7FB519)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function H1Price() {
  return (
    <div className="h-[63.98px] relative shrink-0 w-full" data-name="h1.price">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid font-['Wix_Madefor_Display:Medium',sans-serif] font-medium leading-[0] relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col justify-center left-0 text-[#433c3a] text-[40px] top-[39.33px] w-[136.102px]">
          <p className="leading-[48px]">$5,899</p>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col justify-center left-[139.13px] text-[#9a9a9a] text-[13px] top-[49.33px] w-[37.106px]">
          <p className="leading-[15.6px]">(USD)</p>
        </div>
      </div>
    </div>
  );
}

function PMb() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.mb-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7fb519] text-[0px] w-full">
          <p className="text-[14px] whitespace-pre-wrap">
            <span className="leading-[21px] text-[#7fb519]">20.9%</span>
            <span className="leading-[21px] text-[#433c3a]">{`   +18.4k this week`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function DivColSm() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-h-px relative w-full" data-name="div.col-sm-4">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-r-[0.833px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] pl-[24px] pr-[24.833px] relative size-full">
        <DivAlignItemsCenter />
        <H1Price />
        <PMb />
      </div>
    </div>
  );
}

function DivColSm4Margin() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-w-px relative self-stretch" data-name="div.col-sm-4:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pt-[24px] relative size-full">
          <DivColSm />
        </div>
      </div>
    </div>
  );
}

function H6Mb1() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[57.67px]" data-name="h6.mb-0">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#433c3a] text-[16px] top-[9.16px] w-[58.175px]">
        <p className="leading-[19.2px]">Visitors</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.align-items-center">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
          <H6Mb1 />
          <div className="content-stretch flex items-center justify-center p-px relative rounded-[6px] shrink-0 size-[35.99px]" data-name="Component 3">
            <div aria-hidden="true" className="absolute border border-[#eff2f7] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <div className="relative shrink-0 size-[17.99px]" data-name="Component 2">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute inset-[12.5%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4932 13.4932">
                    <path clipRule="evenodd" d={svgPaths.p3e790c80} fill="var(--fill-0, #7FB519)" fillRule="evenodd" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function H1Price1() {
  return (
    <div className="relative shrink-0 w-full" data-name="h1.price">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.65px] pt-[15.33px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[40px] w-full">
          <p className="leading-[48px]">780,192</p>
        </div>
      </div>
    </div>
  );
}

function PMb1() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.mb-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#7fb519] text-[0px] w-full">
          <p className="text-[14px] whitespace-pre-wrap">
            <span className="leading-[21px] text-[#7fb519]">20%</span>
            <span className="leading-[21px] text-[#433c3a]">{`   +3.5k this week`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function DivColSm1() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-h-px relative w-full" data-name="div.col-sm-4">
      <div aria-hidden="true" className="absolute border-[#f0f0f0] border-r-[0.833px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] pl-[24px] pr-[24.833px] relative size-full">
        <DivAlignItemsCenter1 />
        <H1Price1 />
        <PMb1 />
      </div>
    </div>
  );
}

function DivColSm4Margin1() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-w-px relative self-stretch" data-name="div.col-sm-4:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pt-[24px] relative size-full">
          <DivColSm1 />
        </div>
      </div>
    </div>
  );
}

function H6Mb2() {
  return (
    <div className="h-[19.19px] relative shrink-0 w-[93.52px]" data-name="h6.mb-0">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] left-0 text-[#433c3a] text-[16px] top-[9.16px] w-[94.142px]">
        <p className="leading-[19.2px]">Total Orders</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.align-items-center">
      <H6Mb2 />
      <div className="content-stretch flex items-center justify-center p-px relative rounded-[6px] shrink-0 size-[35.99px]" data-name="Component 3">
        <div aria-hidden="true" className="absolute border border-[#eff2f7] border-solid inset-0 pointer-events-none rounded-[6px]" />
        <div className="relative shrink-0 size-[17.99px]" data-name="Component 2">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[12.5%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.4932 13.4932">
                <path clipRule="evenodd" d={svgPaths.p35673a00} fill="var(--fill-0, #F84525)" fillRule="evenodd" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function H1Price2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.65px] pt-[15.33px] relative shrink-0 w-full" data-name="h1.price">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[40px] w-full">
        <p className="leading-[48px]">796,542</p>
      </div>
    </div>
  );
}

function PMb2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="p.mb-0">
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f84525] text-[0px] w-full">
        <p className="text-[14px] whitespace-pre-wrap">
          <span className="leading-[21px] text-[#f84525]">9.01%</span>
          <span className="leading-[21px] text-[#433c3a]">{`   decrease compared to last week`}</span>
        </p>
      </div>
    </div>
  );
}

function DivColSm2() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-h-px relative w-full" data-name="div.col-sm-4">
      <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[inherit] px-[24px] relative size-full">
        <DivAlignItemsCenter2 />
        <H1Price2 />
        <PMb2 />
      </div>
    </div>
  );
}

function DivColSm4Margin2() {
  return (
    <div className="flex-[1_0_0] max-w-[1320px] min-w-px relative self-stretch" data-name="div.col-sm-4:margin">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pt-[24px] relative size-full">
          <DivColSm2 />
        </div>
      </div>
    </div>
  );
}

function DivG() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 h-[160.97px] items-start justify-center relative shrink-0 w-full" data-name="div.g-4">
      <DivColSm4Margin />
      <DivColSm4Margin1 />
      <DivColSm4Margin2 />
    </div>
  );
}

function DivCard4() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col items-start pb-[23.99px] pt-[15.99px] relative rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="div.card">
      <DivG />
    </div>
  );
}

function H6Fs() {
  return (
    <div className="relative shrink-0 w-full" data-name="h6.fs-17">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[17px] w-full">
          <p className="leading-[20.4px]">Statistics</p>
        </div>
      </div>
    </div>
  );
}

function DivCardHeader() {
  return (
    <div className="bg-white relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full" data-name="div.card-header">
      <div aria-hidden="true" className="absolute border-[#eff2f7] border-b-[0.833px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <div className="content-stretch flex flex-col items-start pb-[24.83px] pt-[24px] px-[24px] relative size-full">
        <H6Fs />
        <div className="-translate-y-1/2 absolute bg-[#f84525] h-[31.99px] left-0 rounded-br-[3px] rounded-tr-[3px] top-[calc(50%-0.42px)] w-[5.99px]" data-name="::after" />
      </div>
    </div>
  );
}

function SvgjsG4() {
  return (
    <div className="absolute inset-[8.86%_0.79%_10.45%_1.73%]" data-name="SvgjsG1184">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1240 282.427">
        <g id="SvgjsG1184">
          <g id="SvgjsG1185">
            <path d="M0 55.6853H1240" id="SvgjsLine1189" stroke="var(--stroke-0, #EFF2F7)" strokeWidth="0.999375" />
            <path d="M0 112.371H1240" id="SvgjsLine1190" stroke="var(--stroke-0, #EFF2F7)" strokeWidth="0.999375" />
            <path d="M0 169.056H1240" id="SvgjsLine1191" stroke="var(--stroke-0, #EFF2F7)" strokeWidth="0.999375" />
            <path d="M0 225.741H1240" id="SvgjsLine1192" stroke="var(--stroke-0, #EFF2F7)" strokeWidth="0.999375" />
          </g>
          <g id="SvgjsLine1195" />
          <g id="SvgjsLine1194" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute inset-[8.14%_0.51%_10.02%_1.45%]" data-name="Clip path group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1247 286.427">
        <g id="Clip path group">
          <mask height="287" id="mask0_6_1832" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="1247" x="0" y="0">
            <g id="gridRectMaskgggwzpuz">
              <path d="M1247 0H0V286.427H1247V0Z" fill="var(--fill-0, white)" id="SvgjsRect1172" />
            </g>
          </mask>
          <g mask="url(#mask0_6_1832)">
            <path d={svgPaths.p24051c00} fill="url(#paint0_linear_6_1832)" id="SvgjsPath1182" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_1832" x1="3.5" x2="3.5" y1="7.16853" y2="284.927">
            <stop stopColor="#F84525" />
            <stop offset="0.7" stopColor="#F7B733" stopOpacity="0.2" />
            <stop offset="0.97" stopColor="#F7B733" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute inset-[8.14%_0.51%_10.02%_1.45%]" data-name="Clip path group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1247 286.427">
        <g id="Clip path group">
          <mask height="287" id="mask0_6_1860" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="1247" x="0" y="0">
            <g id="gridRectMaskgggwzpuz">
              <path d="M1247 0H0V286.427H1247V0Z" fill="var(--fill-0, white)" id="SvgjsRect1172" />
            </g>
          </mask>
          <g mask="url(#mask0_6_1860)">
            <path d={svgPaths.pd22b4a0} id="SvgjsPath1183" stroke="var(--stroke-0, #F84525)" strokeWidth="3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.57%_90.41%_62.86%_1.73%]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 100 100">
        <g id="Group">
          <g id="SvgjsCircle1244" />
        </g>
      </svg>
    </div>
  );
}

function SvgjsG3() {
  return (
    <div className="absolute contents inset-[8.57%_90.41%_62.86%_1.73%]" data-name="SvgjsG1176">
      <Group />
    </div>
  );
}

function SvgjsG2() {
  return (
    <div className="absolute contents inset-[8.14%_0.51%_10.02%_1.45%]" data-name="SvgjsG1175">
      <ClipPathGroup />
      <ClipPathGroup1 />
      <SvgjsG3 />
    </div>
  );
}

function SvgjsG1() {
  return (
    <div className="absolute contents inset-[8.14%_0.51%_10.02%_1.45%]" data-name="SvgjsG1174">
      <SvgjsG2 />
    </div>
  );
}

function SvgjsG5() {
  return (
    <div className="absolute inset-[8.57%_0.79%_10.45%_1.73%]" data-name="SvgjsG1187">
      <div className="absolute inset-[-0.18%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1240 284.426">
          <g id="SvgjsG1187">
            <path d="M0 0.499688H1240" id="SvgjsLine1188" stroke="var(--stroke-0, #EFF2F7)" strokeWidth="0.999375" />
            <path d="M0 283.926H1240" id="SvgjsLine1193" stroke="var(--stroke-0, #EFF2F7)" strokeWidth="0.999375" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SvgjsG7() {
  return (
    <div className="absolute contents font-['Inter:Regular',sans-serif] font-normal inset-[93.26%_0.24%_2.45%_1.49%] leading-[normal] not-italic text-[#aaa] text-[12px] text-center whitespace-nowrap" data-name="SvgjsG1199">
      <p className="absolute inset-[93.26%_98.03%_2.45%_1.49%]">1</p>
      <p className="absolute inset-[93.26%_89.83%_2.45%_9.54%]">2</p>
      <p className="absolute inset-[93.26%_81.71%_2.45%_17.66%]">3</p>
      <p className="absolute inset-[93.26%_73.58%_2.45%_25.79%]">4</p>
      <p className="absolute inset-[93.26%_65.46%_2.45%_33.91%]">5</p>
      <p className="absolute inset-[93.26%_57.34%_2.45%_42.03%]">6</p>
      <p className="absolute inset-[93.26%_49.25%_2.45%_50.2%]">7</p>
      <p className="absolute inset-[93.26%_41.09%_2.45%_58.28%]">8</p>
      <p className="absolute inset-[93.26%_32.97%_2.45%_66.41%]">9</p>
      <p className="absolute inset-[93.26%_24.61%_2.45%_74.29%]">10</p>
      <p className="absolute inset-[93.26%_16.56%_2.45%_82.5%]">11</p>
      <p className="absolute inset-[93.26%_8.4%_2.45%_90.58%]">12</p>
      <p className="absolute inset-[93.26%_0.24%_2.45%_98.66%]">13</p>
    </div>
  );
}

function SvgjsG6() {
  return (
    <div className="absolute contents inset-[93.26%_0.24%_2.45%_1.49%]" data-name="SvgjsG1198">
      <SvgjsG7 />
    </div>
  );
}

function SvgjsG() {
  return (
    <div className="absolute contents inset-[8.14%_0.24%_2.45%_1.45%]" data-name="SvgjsG1168">
      <div className="absolute inset-[8.57%_17.07%_10.45%_82.93%]" data-name="SvgjsLine1171">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d="M0 0V283.427" id="SvgjsLine1171" opacity="0" stroke="var(--stroke-0, #B6B6B6)" strokeDasharray="3 3" strokeWidth="0.999375" />
        </svg>
      </div>
      <SvgjsG4 />
      <SvgjsG1 />
      <SvgjsG5 />
      <div className="absolute inset-[8.57%_0.79%_91.43%_1.73%]" data-name="SvgjsLine1196">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d="M0 0H1240" id="SvgjsLine1196" opacity="0" stroke="var(--stroke-0, #B6B6B6)" strokeWidth="0.999375" />
        </svg>
      </div>
      <div className="absolute inset-[8.57%_0.79%_91.43%_1.73%]" data-name="SvgjsLine1197">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="SvgjsLine1197" opacity="0" />
        </svg>
      </div>
      <SvgjsG6 />
    </div>
  );
}

function DivApexchartsXaxistooltipText() {
  return (
    <div className="min-w-[11.419300079345703px] relative shrink-0" data-name="div.apexcharts-xaxistooltip-text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center min-w-[inherit] pb-[0.685px] relative size-full">
        <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#373d3f] text-[12px] text-center whitespace-nowrap">
          <p className="leading-[18px]">11</p>
        </div>
      </div>
    </div>
  );
}

function DivApexchartsXaxistooltip() {
  return (
    <div className="absolute bg-[#f8e8e5] content-stretch flex flex-col items-start left-[1037.76px] opacity-0 pb-[9.829px] pt-[9.154px] px-[10.832px] rounded-[2px] top-[315.42px]" data-name="div.apexcharts-xaxistooltip">
      <div aria-hidden="true" className="absolute border-[#90a4ae] border-[0.999px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <DivApexchartsXaxistooltipText />
      <div className="-translate-x-1/2 absolute left-[calc(50%-0.33px)] size-[13.33px] top-[-12.5px]" data-name="::before">
        <div aria-hidden="true" className="absolute border-6 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="-translate-x-1/2 absolute left-[calc(50%-0.16px)] size-[11.67px] top-[-10.84px]" data-name="::after">
        <div aria-hidden="true" className="absolute border-5 border-[#f8e8e5] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function DivApexchartsYaxistooltip() {
  return (
    <div className="absolute bg-[#f8e8e5] h-[9.66px] left-0 opacity-0 rounded-[2px] top-[350px] w-[21.67px]" data-name="div.apexcharts-yaxistooltip">
      <div aria-hidden="true" className="absolute border-[#90a4ae] border-[0.999px] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="-translate-y-1/2 absolute border-6 border-[rgba(0,0,0,0)] border-solid left-[20.84px] size-[13.33px] top-[calc(50%-0.33px)]" data-name="::before" />
      <div className="-translate-y-1/2 absolute border-5 border-[#f8e8e5] border-solid left-[20.84px] size-[11.67px] top-[calc(50%-0.15px)]" data-name="::after" />
    </div>
  );
}

function DivApexchartsMenu() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[97.62px] items-start min-w-[110px] opacity-0 p-[3.832px] right-[9.07px] rounded-[3px] top-[21.99px]" data-name="div.apexcharts-menu">
      <div aria-hidden="true" className="absolute border-[#ddd] border-[0.999px] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="relative shrink-0" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[11.05px] pr-[6.99px] py-[6px] relative size-full">
          <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[12px] text-right whitespace-nowrap">
            <p className="leading-[18px]">Download SVG</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[10.43px] pr-[6.99px] py-[6px] relative size-full">
          <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[12px] text-right whitespace-nowrap">
            <p className="leading-[18px]">Download PNG</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Component 4">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end pl-[11.28px] pr-[6.98px] py-[6px] relative size-full">
          <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[12px] text-right whitespace-nowrap">
            <p className="leading-[18px]">Download CSV</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivApexchartsToolbar() {
  return (
    <div className="absolute content-stretch flex items-center max-w-[176px] pb-[3.49px] pt-[1.5px] px-[7.49px] right-[2.99px] rounded-[3px] top-0" data-name="div.apexcharts-toolbar">
      <div className="relative shrink-0 size-[17px]" data-name="Component 3">
        <div className="absolute left-0 overflow-clip size-[17px] top-[2.53px]" data-name="Component 2">
          <div className="absolute inset-[6.25%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.875 14.875">
              <path d={svgPaths.p255bb500} fill="var(--fill-0, #6E8192)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <DivApexchartsMenu />
    </div>
  );
}

function DivApexchartsTooltipTitle() {
  return (
    <div className="bg-[#f8e8e5] relative shrink-0 w-full" data-name="div.apexcharts-tooltip-title">
      <div aria-hidden="true" className="absolute border-[#ddd] border-b-[0.833px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[6.833px] pt-[6px] px-[6px] relative size-full">
        <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#433c3a] text-[12px] whitespace-nowrap">
          <p className="leading-[18px]">11</p>
        </div>
      </div>
    </div>
  );
}

function DivApexchartsTooltipTitleMargin() {
  return (
    <div className="mb-[-0.01px] relative shrink-0 w-full" data-name="div.apexcharts-tooltip-title:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <DivApexchartsTooltipTitle />
      </div>
    </div>
  );
}

function SpanApexchartsTooltipMarkerMargin() {
  return (
    <div className="content-stretch flex flex-col h-[11.99px] items-start pr-[10px] relative shrink-0 w-[21.99px] z-[2]" data-name="span.apexcharts-tooltip-marker:margin">
      <div className="bg-[#f84525] relative rounded-[6px] shrink-0 size-[11.99px]" data-name="span.apexcharts-tooltip-marker" />
    </div>
  );
}

function DivApexchartsTooltipYGroup() {
  return (
    <div className="content-stretch flex gap-[5px] items-start leading-[0] not-italic pb-[5px] pt-[6px] relative shrink-0 text-[#433c3a] text-[12px] w-full whitespace-nowrap" data-name="div.apexcharts-tooltip-y-group">
      <div className="flex flex-col font-['Arial:Regular',sans-serif] justify-center relative shrink-0">
        <p className="leading-[18px]">{`series-1: `}</p>
      </div>
      <div className="flex flex-col font-['Arial:Bold',sans-serif] justify-center relative shrink-0">
        <p className="leading-[18px]">25</p>
      </div>
    </div>
  );
}

function DivApexchartsTooltipText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[69px] z-[1]" data-name="div.apexcharts-tooltip-text">
      <DivApexchartsTooltipYGroup />
    </div>
  );
}

function DivApexchartsTooltipSeriesGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.apexcharts-tooltip-series-group">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex isolate items-center pb-[4px] px-[10px] relative size-full">
          <SpanApexchartsTooltipMarkerMargin />
          <DivApexchartsTooltipText />
        </div>
      </div>
    </div>
  );
}

function DivApexchartsTooltip() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.96)] left-[938.8px] opacity-0 rounded-[5px] top-[201.23px] w-[112.989px]" data-name="div.apexcharts-tooltip">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.999px] relative rounded-[inherit] size-full">
        <DivApexchartsTooltipTitleMargin />
        <DivApexchartsTooltipSeriesGroup />
      </div>
      <div aria-hidden="true" className="absolute border-[#e3e3e3] border-[0.999px] border-solid inset-0 pointer-events-none rounded-[5px] shadow-[2px_2px_6px_-4px_#999]" />
    </div>
  );
}

function DivApexchartsgggwzpuz() {
  return (
    <div className="content-stretch flex flex-col h-[350px] items-start relative shrink-0 w-[1271.99px]" data-name="div#apexchartsgggwzpuz">
      <div className="h-[350px] overflow-clip relative shrink-0 w-[1271.99px]" data-name="Component 2">
        <div className="absolute inset-[0_92.14%_71.43%_0]" data-name="SvgjsRect1170">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="SvgjsRect1170" />
          </svg>
        </div>
        <SvgjsG />
      </div>
      <DivApexchartsXaxistooltip />
      <DivApexchartsYaxistooltip />
      <DivApexchartsToolbar />
      <DivApexchartsTooltip />
    </div>
  );
}

function DivChart() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[365px] pb-[15px] relative shrink-0 w-full" data-name="div#chart">
      <DivApexchartsgggwzpuz />
    </div>
  );
}

function DivCardBody() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-body">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <DivChart />
      </div>
    </div>
  );
}

function StartStatistics() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col items-start pt-[15.99px] relative rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Start statistics">
      <DivCardHeader />
      <DivCardBody />
    </div>
  );
}

function H6Fs1() {
  return (
    <div className="relative shrink-0 w-full" data-name="h6.fs-17">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[17px] w-full">
          <p className="leading-[20.4px]">Recent Booking</p>
        </div>
      </div>
    </div>
  );
}

function DivCardHeader1() {
  return (
    <div className="bg-white relative rounded-tl-[15px] rounded-tr-[15px] shrink-0 w-full" data-name="div.card-header">
      <div aria-hidden="true" className="absolute border-[#eff2f7] border-b-[0.833px] border-solid inset-0 pointer-events-none rounded-tl-[15px] rounded-tr-[15px]" />
      <div className="content-stretch flex flex-col items-start pb-[24.84px] pt-[23.99px] px-[24px] relative size-full">
        <H6Fs1 />
        <div className="-translate-y-1/2 absolute bg-[#f84525] h-[31.99px] left-0 rounded-br-[3px] rounded-tr-[3px] top-[calc(50%-0.43px)] w-[5.99px]" data-name="::after" />
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0" data-name="div">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[9.57px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[14px] whitespace-nowrap">
          <p className="leading-[21px]">10</p>
        </div>
      </div>
    </div>
  );
}

function SelectFormSelect() {
  return (
    <div className="bg-[#f8f4f3] content-stretch flex h-[41.99px] items-center pl-[8.832px] pr-[36.832px] py-[4.832px] relative rounded-[12.8px] shrink-0" data-name="select.form-select">
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-[0.999px] border-solid inset-0 pointer-events-none rounded-[12.8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip pl-[45.817px] pr-[12.833px] py-[14.995px] relative rounded-[inherit] size-full">
        <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Component 2">
          <div className="absolute inset-[31.25%_12.5%]" data-name="Vector">
            <div className="absolute inset-[-16.67%_-8.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6">
                <path d={svgPaths.p38d60d00} id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Div />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] whitespace-nowrap">
        <p className="leading-[22.5px]">{`Show `}</p>
      </div>
      <SelectFormSelect />
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] whitespace-nowrap">
        <p className="leading-[22.5px]">{` entries`}</p>
      </div>
    </div>
  );
}

function DivDataTablesTable0Length() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div#DataTables_Table_0_length">
      <Label />
    </div>
  );
}

function DivColSm3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[1272.010009765625px] min-w-px relative self-stretch" data-name="div.col-sm-12">
      <DivDataTablesTable0Length />
    </div>
  );
}

function DivEditingViewPort() {
  return <div className="h-[17.5px] mr-[-0.01px] relative shrink-0 w-[148.52px]" data-name="div#editing-view-port" />;
}

function DivSearchClearMargin() {
  return <div className="h-[10px] relative shrink-0 w-[14px]" data-name="div#search-clear:margin" />;
}

function DivTextFieldContainer() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="div#text-field-container">
      <DivEditingViewPort />
      <DivSearchClearMargin />
    </div>
  );
}

function InputFormControl() {
  return (
    <div className="bg-[#f8f4f3] h-[40.323px] min-h-[29.33333396911621px] relative rounded-[12.8px] shrink-0" data-name="input.form-control">
      <div className="content-stretch flex items-start min-h-[inherit] overflow-clip pb-[11.427px] pt-[11.397px] px-[8px] relative rounded-[inherit] size-full">
        <DivTextFieldContainer />
      </div>
      <div aria-hidden="true" className="absolute border-[#dee2e6] border-[0.999px] border-solid inset-[-0.999px] pointer-events-none rounded-[13.799000000000001px]" />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex gap-[7.823px] items-center pr-[0.833px] py-[0.833px] relative shrink-0" data-name="label">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] whitespace-nowrap">
        <p className="leading-[22.5px]">Search:</p>
      </div>
      <InputFormControl />
    </div>
  );
}

function DivDataTablesTable0Filter() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="div#DataTables_Table_0_filter">
      <Label1 />
    </div>
  );
}

function DivColSm4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start max-w-[1272.010009765625px] min-w-px relative self-stretch" data-name="div.col-sm-12">
      <DivDataTablesTable0Filter />
    </div>
  );
}

function DivRow() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_0.01px] h-[41.99px] items-start relative shrink-0 w-full" data-name="div.row">
      <DivColSm3 />
      <DivColSm4 />
    </div>
  );
}

function SlActivateToSortColumnDescending() {
  return (
    <div className="bg-[#f8e8e5] content-stretch flex flex-col items-start pl-[16px] pr-[26px] py-[13.633px] relative shrink-0 w-[88.14px]" data-name="SL: activate to sort column descending">
      <div aria-hidden="true" className="absolute border-[#f8e8e5] border-b-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[68.61px] not-italic text-[#f84525] text-[9.9px] top-[17.39px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▴</p>
      </div>
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">SL</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[68.61px] not-italic opacity-50 text-[9.9px] text-black top-[26.37px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▾</p>
      </div>
    </div>
  );
}

function LogoActivateToSortColumnAscending() {
  return (
    <div className="bg-[#f8e8e5] content-stretch flex flex-col items-start pl-[16px] pr-[26px] py-[13.633px] relative shrink-0 w-[121.22px]" data-name="Logo: activate to sort column ascending">
      <div aria-hidden="true" className="absolute border-[#f8e8e5] border-b-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[101.69px] not-italic opacity-50 text-[9.9px] text-black top-[17.39px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▴</p>
      </div>
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">Logo</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[101.69px] not-italic opacity-50 text-[9.9px] text-black top-[26.37px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▾</p>
      </div>
    </div>
  );
}

function NameActivateToSortColumnAscending() {
  return (
    <div className="bg-[#f8e8e5] content-stretch flex flex-col items-start pl-[16px] pr-[26px] py-[13.633px] relative shrink-0 w-[258.09px]" data-name="Name: activate to sort column ascending">
      <div aria-hidden="true" className="absolute border-[#f8e8e5] border-b-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[238.55px] not-italic opacity-50 text-[9.9px] text-black top-[17.39px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▴</p>
      </div>
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">Name</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[238.55px] not-italic opacity-50 text-[9.9px] text-black top-[26.37px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▾</p>
      </div>
    </div>
  );
}

function BookingDateActivateToSortColumnAscending() {
  return (
    <div className="bg-[#f8e8e5] content-stretch flex flex-col items-start pl-[16px] pr-[26px] py-[13.633px] relative shrink-0 w-[211.41px]" data-name="Booking Date: activate to sort column ascending">
      <div aria-hidden="true" className="absolute border-[#f8e8e5] border-b-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[191.88px] not-italic opacity-50 text-[9.9px] text-black top-[17.39px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▴</p>
      </div>
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">Booking Date</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[191.88px] not-italic opacity-50 text-[9.9px] text-black top-[26.37px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▾</p>
      </div>
    </div>
  );
}

function PaymentTypeActivateToSortColumnAscending() {
  return (
    <div className="bg-[#f8e8e5] content-stretch flex flex-col items-start pl-[16px] pr-[26px] py-[13.633px] relative shrink-0 w-[208.92px]" data-name="Payment Type: activate to sort column ascending">
      <div aria-hidden="true" className="absolute border-[#f8e8e5] border-b-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[189.37px] not-italic opacity-50 text-[9.9px] text-black top-[17.39px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▴</p>
      </div>
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">Payment Type</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[189.37px] not-italic opacity-50 text-[9.9px] text-black top-[26.37px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▾</p>
      </div>
    </div>
  );
}

function StatusActivateToSortColumnAscending() {
  return (
    <div className="bg-[#f8e8e5] content-stretch flex flex-col items-start pl-[16px] pr-[26px] py-[13.633px] relative shrink-0 w-[171.15px]" data-name="Status: activate to sort column ascending">
      <div aria-hidden="true" className="absolute border-[#f8e8e5] border-b-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[151.61px] not-italic opacity-50 text-[9.9px] text-black top-[17.39px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▴</p>
      </div>
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">Status</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] left-[151.61px] not-italic opacity-50 text-[9.9px] text-black top-[26.37px] tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▾</p>
      </div>
    </div>
  );
}

function SpanH2DRemoveBefore() {
  return (
    <div className="absolute content-stretch flex flex-col h-[9.75px] items-end left-[193.56px] opacity-50 top-[12.14px] w-[9.53px]" data-name="span.__h2d-remove-before">
      <div className="flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.9px] text-black text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▴</p>
      </div>
    </div>
  );
}

function SpanH2DRemoveBefore1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[9.75px] items-end left-[193.56px] opacity-50 top-[21.12px] w-[9.53px]" data-name="span.__h2d-remove-before">
      <div className="flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[9.9px] text-black text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[9px]">▾</p>
      </div>
    </div>
  );
}

function ViewBookingActivateToSortColumnAscending() {
  return (
    <div className="bg-[#f8e8e5] content-stretch flex flex-col items-end pl-[16px] pr-[26px] py-[13.633px] relative shrink-0 w-[213.09px]" data-name="View Booking: activate to sort column ascending">
      <div aria-hidden="true" className="absolute border-[#f8e8e5] border-b-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
      <SpanH2DRemoveBefore />
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[11px] text-black text-right tracking-[1px] uppercase whitespace-nowrap">
        <p className="leading-[16.5px]">View Booking</p>
      </div>
      <SpanH2DRemoveBefore1 />
    </div>
  );
}

function Tr() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0 w-full" data-name="tr">
      <SlActivateToSortColumnDescending />
      <LogoActivateToSortColumnAscending />
      <NameActivateToSortColumnAscending />
      <BookingDateActivateToSortColumnAscending />
      <PaymentTypeActivateToSortColumnAscending />
      <StatusActivateToSortColumnAscending />
      <ViewBookingActivateToSortColumnAscending />
    </div>
  );
}

function ThSorting() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[23.095px] pt-[12.555px] px-[16px] right-[1183.86px] top-0" data-name="th.sorting_1">
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">01</p>
      </div>
    </div>
  );
}

function ImageDescription() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Image Description">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[117.19%] left-0 max-w-none top-[-8.59%] w-full" src={imgImageDescription} />
      </div>
    </div>
  );
}

function SpanAvatar() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[31.99px]" data-name="span.avatar">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ImageDescription />
      </div>
    </div>
  );
}

function Td() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[88.14px] pb-[13.86px] pt-[12.8px] px-[16px] right-[1062.64px] top-0" data-name="td">
      <SpanAvatar />
    </div>
  );
}

function Td1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[209.37px] pb-[23.095px] pt-[12.555px] px-[16px] right-[804.54px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Ethan Blackwood</p>
      </div>
    </div>
  );
}

function Td2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[467.45px] pb-[23.095px] pt-[12.555px] px-[16px] right-[593.14px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">18 Dec 2023</p>
      </div>
    </div>
  );
}

function Td3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[678.86px] pb-[23.095px] pt-[12.555px] px-[16px] right-[384.22px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Paypal</p>
      </div>
    </div>
  );
}

function IFaCircle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="i.fa-circle">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#198754] text-[10px] whitespace-nowrap">
        <p className="leading-[10px]">{`\uF111`}</p>
      </div>
    </div>
  );
}

function Span() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#198754] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Approved</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter3() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] items-center left-[903.77px] right-[229.06px] top-[12.8px]" data-name="div.align-items-center">
      <IFaCircle />
      <Span />
    </div>
  );
}

function TdTextEnd() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1058.92px] px-[16px] py-[12.8px] right-[-0.01px] top-0" data-name="td.text-end">
      <a className="bg-[#f84525] block cursor-pointer h-[33.05px] relative rounded-[9.6px] shrink-0 w-[73.1px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/bookings.html" target="_blank" data-name="Component 5">
        <div aria-hidden="true" className="absolute border border-[#f84525] border-solid inset-0 pointer-events-none rounded-[9.6px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.53px)] overflow-clip size-[15.99px] top-1/2" data-name="Component 2">
          <div className="absolute inset-[15.62%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 10.9929">
              <path d={svgPaths.p1602b500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[28.13%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99545 6.99545">
              <path d={svgPaths.p3379d400} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+10.55px)] text-[12.4px] text-center text-white top-[calc(50%-0.55px)] w-[30.152px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18.6px]">View</p>
        </div>
      </a>
    </div>
  );
}

function TrOdd() {
  return (
    <div className="h-[58.65px] relative shrink-0 w-full" data-name="tr.odd">
      <ThSorting />
      <Td />
      <Td1 />
      <Td2 />
      <Td3 />
      <DivAlignItemsCenter3 />
      <TdTextEnd />
    </div>
  );
}

function ThSorting1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[23.105px] pt-[12.545px] px-[16px] right-[1183.86px] top-0" data-name="th.sorting_1">
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">02</p>
      </div>
    </div>
  );
}

function ImageDescription1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Image Description">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[117.19%] left-0 max-w-none top-[-8.59%] w-full" src={imgImageDescription1} />
      </div>
    </div>
  );
}

function SpanAvatar1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[31.99px]" data-name="span.avatar">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ImageDescription1 />
      </div>
    </div>
  );
}

function Td4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[88.14px] pb-[13.86px] pt-[12.8px] px-[16px] right-[1062.64px] top-0" data-name="td">
      <SpanAvatar1 />
    </div>
  );
}

function Td5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[209.37px] pb-[23.105px] pt-[12.545px] px-[16px] right-[804.54px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Alexander Kaminski</p>
      </div>
    </div>
  );
}

function Td6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[467.45px] pb-[23.105px] pt-[12.545px] px-[16px] right-[593.14px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">15 Dec 2023</p>
      </div>
    </div>
  );
}

function Td7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[678.86px] pb-[23.105px] pt-[12.545px] px-[16px] right-[384.22px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Payoneer</p>
      </div>
    </div>
  );
}

function IFaCircle1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="i.fa-circle">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#f84525] text-[10px] whitespace-nowrap">
        <p className="leading-[10px]">{`\uF111`}</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f84525] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Pending</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter4() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] items-center left-[903.77px] right-[229.06px] top-[12.8px]" data-name="div.align-items-center">
      <IFaCircle1 />
      <Span1 />
    </div>
  );
}

function TdTextEnd1() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1058.92px] px-[16px] py-[12.8px] right-[-0.01px] top-0" data-name="td.text-end">
      <a className="bg-[#f84525] block cursor-pointer h-[33.05px] relative rounded-[9.6px] shrink-0 w-[73.1px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/bookings.html" target="_blank" data-name="Component 5">
        <div aria-hidden="true" className="absolute border border-[#f84525] border-solid inset-0 pointer-events-none rounded-[9.6px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.53px)] overflow-clip size-[15.99px] top-[calc(50%-0.01px)]" data-name="Component 2">
          <div className="absolute inset-[15.62%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 10.9929">
              <path d={svgPaths.p1602b500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[28.13%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99545 6.99545">
              <path d={svgPaths.p3379d400} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+10.55px)] text-[12.4px] text-center text-white top-[calc(50%-0.55px)] w-[30.152px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18.6px]">View</p>
        </div>
      </a>
    </div>
  );
}

function TrEven() {
  return (
    <div className="h-[58.65px] relative shrink-0 w-full" data-name="tr.even">
      <ThSorting1 />
      <Td4 />
      <Td5 />
      <Td6 />
      <Td7 />
      <DivAlignItemsCenter4 />
      <TdTextEnd1 />
    </div>
  );
}

function ThSorting2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[23.095px] pt-[12.555px] px-[16px] right-[1183.86px] top-0" data-name="th.sorting_1">
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">03</p>
      </div>
    </div>
  );
}

function ImageDescription2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Image Description">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[117.19%] left-0 max-w-none top-[-8.59%] w-full" src={imgImageDescription2} />
      </div>
    </div>
  );
}

function SpanAvatar2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[31.99px]" data-name="span.avatar">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ImageDescription2 />
      </div>
    </div>
  );
}

function Td8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[88.14px] pb-[13.86px] pt-[12.8px] px-[16px] right-[1062.64px] top-0" data-name="td">
      <SpanAvatar2 />
    </div>
  );
}

function Td9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[209.37px] pb-[23.095px] pt-[12.555px] px-[16px] right-[804.54px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Pranoti Deshpande</p>
      </div>
    </div>
  );
}

function Td10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[467.45px] pb-[23.095px] pt-[12.555px] px-[16px] right-[593.14px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">15 Nov 2023</p>
      </div>
    </div>
  );
}

function Td11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[678.86px] pb-[23.095px] pt-[12.555px] px-[16px] right-[384.22px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Payoneer</p>
      </div>
    </div>
  );
}

function IFaCircle2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="i.fa-circle">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#198754] text-[10px] whitespace-nowrap">
        <p className="leading-[10px]">{`\uF111`}</p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#198754] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Approved</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter5() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] items-center left-[903.77px] right-[229.06px] top-[12.8px]" data-name="div.align-items-center">
      <IFaCircle2 />
      <Span2 />
    </div>
  );
}

function TdTextEnd2() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1058.92px] px-[16px] py-[12.8px] right-[-0.01px] top-0" data-name="td.text-end">
      <a className="bg-[#f84525] block cursor-pointer h-[33.05px] relative rounded-[9.6px] shrink-0 w-[73.1px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/bookings.html" target="_blank" data-name="Component 5">
        <div aria-hidden="true" className="absolute border border-[#f84525] border-solid inset-0 pointer-events-none rounded-[9.6px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.53px)] overflow-clip size-[15.99px] top-1/2" data-name="Component 2">
          <div className="absolute inset-[15.62%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 10.9929">
              <path d={svgPaths.p1602b500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[28.13%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99545 6.99545">
              <path d={svgPaths.p3379d400} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+10.55px)] text-[12.4px] text-center text-white top-[calc(50%-0.55px)] w-[30.152px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18.6px]">View</p>
        </div>
      </a>
    </div>
  );
}

function TrOdd1() {
  return (
    <div className="h-[58.65px] relative shrink-0 w-full" data-name="tr.odd">
      <ThSorting2 />
      <Td8 />
      <Td9 />
      <Td10 />
      <Td11 />
      <DivAlignItemsCenter5 />
      <TdTextEnd2 />
    </div>
  );
}

function ThSorting3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[23.105px] pt-[12.545px] px-[16px] right-[1183.86px] top-0" data-name="th.sorting_1">
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">03</p>
      </div>
    </div>
  );
}

function ImageDescription3() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Image Description">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[117.19%] left-0 max-w-none top-[-8.59%] w-full" src={imgImageDescription2} />
      </div>
    </div>
  );
}

function SpanAvatar3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[31.99px]" data-name="span.avatar">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ImageDescription3 />
      </div>
    </div>
  );
}

function Td12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[88.14px] pb-[13.86px] pt-[12.8px] px-[16px] right-[1062.64px] top-0" data-name="td">
      <SpanAvatar3 />
    </div>
  );
}

function Td13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[209.37px] pb-[23.105px] pt-[12.545px] px-[16px] right-[804.54px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Pranoti Deshpande</p>
      </div>
    </div>
  );
}

function Td14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[467.45px] pb-[23.105px] pt-[12.545px] px-[16px] right-[593.14px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">15 Nov 2023</p>
      </div>
    </div>
  );
}

function Td15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[678.86px] pb-[23.105px] pt-[12.545px] px-[16px] right-[384.22px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Payoneer</p>
      </div>
    </div>
  );
}

function IFaCircle3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="i.fa-circle">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#198754] text-[10px] whitespace-nowrap">
        <p className="leading-[10px]">{`\uF111`}</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#198754] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Approved</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter6() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] items-center left-[903.77px] right-[229.06px] top-[12.8px]" data-name="div.align-items-center">
      <IFaCircle3 />
      <Span3 />
    </div>
  );
}

function TdTextEnd3() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1058.92px] px-[16px] py-[12.8px] right-[-0.01px] top-0" data-name="td.text-end">
      <a className="bg-[#f84525] block cursor-pointer h-[33.05px] relative rounded-[9.6px] shrink-0 w-[73.1px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/bookings.html" target="_blank" data-name="Component 5">
        <div aria-hidden="true" className="absolute border border-[#f84525] border-solid inset-0 pointer-events-none rounded-[9.6px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.53px)] overflow-clip size-[15.99px] top-1/2" data-name="Component 2">
          <div className="absolute inset-[15.62%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 10.9929">
              <path d={svgPaths.p1602b500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[28.13%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99545 6.99545">
              <path d={svgPaths.p3379d400} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+10.55px)] text-[12.4px] text-center text-white top-[calc(50%-0.55px)] w-[30.152px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18.6px]">View</p>
        </div>
      </a>
    </div>
  );
}

function TrEven1() {
  return (
    <div className="h-[58.65px] relative shrink-0 w-full" data-name="tr.even">
      <ThSorting3 />
      <Td12 />
      <Td13 />
      <Td14 />
      <Td15 />
      <DivAlignItemsCenter6 />
      <TdTextEnd3 />
    </div>
  );
}

function ThSorting4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[23.095px] pt-[12.555px] px-[16px] right-[1183.86px] top-0" data-name="th.sorting_1">
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">04</p>
      </div>
    </div>
  );
}

function ImageDescription4() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="Image Description">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="" className="absolute h-[117.19%] left-0 max-w-none top-[-8.59%] w-full" src={imgImageDescription3} />
      </div>
    </div>
  );
}

function SpanAvatar4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[31.99px]" data-name="span.avatar">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <ImageDescription4 />
      </div>
    </div>
  );
}

function Td16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[88.14px] pb-[13.86px] pt-[12.8px] px-[16px] right-[1062.64px] top-0" data-name="td">
      <SpanAvatar4 />
    </div>
  );
}

function Td17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[209.37px] pb-[23.095px] pt-[12.555px] px-[16px] right-[804.54px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Gabriel Nort</p>
      </div>
    </div>
  );
}

function Td18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[467.45px] pb-[23.095px] pt-[12.555px] px-[16px] right-[593.14px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">10 Jul 2023</p>
      </div>
    </div>
  );
}

function Td19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[678.86px] pb-[23.095px] pt-[12.555px] px-[16px] right-[384.22px] top-0" data-name="td">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[15px] text-black whitespace-nowrap">
        <p className="leading-[22.5px]">Swift</p>
      </div>
    </div>
  );
}

function IFaCircle4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="i.fa-circle">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#dc3545] text-[10px] whitespace-nowrap">
        <p className="leading-[10px]">{`\uF111`}</p>
      </div>
    </div>
  );
}

function Span4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="span">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#dc3545] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">Canceled</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter7() {
  return (
    <div className="absolute content-stretch flex gap-[3.99px] items-center left-[903.77px] right-[229.06px] top-[12.8px]" data-name="div.align-items-center">
      <IFaCircle4 />
      <Span4 />
    </div>
  );
}

function TdTextEnd4() {
  return (
    <div className="absolute content-stretch flex flex-col items-end left-[1058.92px] px-[16px] py-[12.8px] right-[-0.01px] top-0" data-name="td.text-end">
      <a className="bg-[#f84525] block cursor-pointer h-[33.05px] relative rounded-[9.6px] shrink-0 w-[73.1px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/bookings.html" target="_blank" data-name="Component 5">
        <div aria-hidden="true" className="absolute border border-[#f84525] border-solid inset-0 pointer-events-none rounded-[9.6px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-16.53px)] overflow-clip size-[15.99px] top-1/2" data-name="Component 2">
          <div className="absolute inset-[15.62%_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 10.9929">
              <path d={svgPaths.p1602b500} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[28.13%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99545 6.99545">
              <path d={svgPaths.p3379d400} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] left-[calc(50%+10.55px)] text-[12.4px] text-center text-white top-[calc(50%-0.55px)] w-[30.152px]" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[18.6px]">View</p>
        </div>
      </a>
    </div>
  );
}

function TrOdd2() {
  return (
    <div className="h-[58.65px] relative shrink-0 w-full" data-name="tr.odd">
      <ThSorting4 />
      <Td16 />
      <Td17 />
      <Td18 />
      <Td19 />
      <DivAlignItemsCenter7 />
      <TdTextEnd4 />
    </div>
  );
}

function Tbody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="tbody">
      <TrOdd />
      <TrEven />
      <TrOdd1 />
      <TrEven1 />
      <TrOdd2 />
    </div>
  );
}

function TableDataTablesTable() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="table#DataTables_Table_0">
      <Tr />
      <Tbody />
    </div>
  );
}

function DivColSm5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="div.col-sm-12">
      <div className="content-stretch flex flex-col items-start pb-[15.99px] pt-[5.99px] relative size-full">
        <TableDataTablesTable />
      </div>
    </div>
  );
}

function DivRow1() {
  return (
    <div className="content-stretch flex flex-wrap h-[359.497px] items-start justify-center relative shrink-0 w-full" data-name="div.row">
      <DivColSm5 />
    </div>
  );
}

function DivDataTablesTable0Info() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[12.75px] relative shrink-0 w-full" data-name="div#DataTables_Table_0_info">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] w-full">
        <p className="leading-[22.5px]">Showing 1 to 5 of 5 entries</p>
      </div>
    </div>
  );
}

function DivColSm6() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1272.010009765625px] relative self-stretch shrink-0 w-[530px]" data-name="div.col-sm-12">
      <DivDataTablesTable0Info />
    </div>
  );
}

function LiDataTablesTable0Previous() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px px-[5px] relative rounded-[5px]" data-name="li#DataTables_Table_0_previous">
      <a className="bg-[#f4f4f5] content-stretch cursor-pointer flex items-center justify-center min-w-[32px] pb-[6.99px] pt-[7.01px] px-[8px] relative rounded-[9.6px] shrink-0" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 9">
        <div className="overflow-clip relative shrink-0 size-[17.99px]" data-name="Component 2">
          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-0.56px_-5.36%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6185 1.12437">
                <path d="M11.0564 0.562187H0.562187" id="Vector" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12437" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
            <div className="absolute inset-[-5.36%_-10.71%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.37146 11.6185">
                <path d={svgPaths.p2f474000} id="Vector" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12437" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function LiDataTablesTable0PreviousMargin() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-[604.83px] pl-[6.4px] top-0" data-name="li#DataTables_Table_0_previous:margin">
      <LiDataTablesTable0Previous />
    </div>
  );
}

function LiDataTablesTable0Next() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px pr-[5px] relative rounded-[5px] w-[37.99px]" data-name="li#DataTables_Table_0_next">
      <a className="bg-[#f4f4f5] content-stretch cursor-pointer flex items-center justify-center min-w-[32px] pb-[6.99px] pt-[7.01px] px-[8px] relative rounded-[9.6px] shrink-0" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 9">
        <div className="overflow-clip relative shrink-0 size-[17.99px]" data-name="Component 2">
          <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
            <div className="absolute inset-[-0.56px_-5.36%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6185 1.12437">
                <path d="M0.562187 0.562187H11.0564" id="Vector" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12437" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-[20.83%] left-1/2 right-[20.83%] top-[20.83%]" data-name="Vector">
            <div className="absolute inset-[-5.36%_-10.71%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.37146 11.6185">
                <path d={svgPaths.p482100} id="Vector" stroke="var(--stroke-0, #212529)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12437" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function LiDataTablesTable0NextMargin() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-[697.6px] pl-[6.4px] top-0" data-name="li#DataTables_Table_0_next:margin">
      <LiDataTablesTable0Next />
    </div>
  );
}

function APageLink() {
  return (
    <div className="bg-[#f84525] content-stretch flex items-center justify-center min-w-[31.989999771118164px] pl-[12.18px] pr-[12.19px] py-[8px] relative rounded-[9.6px] shrink-0" data-name="a.page-link">
      <a className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white whitespace-nowrap" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank">
        <p className="cursor-pointer leading-[16px]">1</p>
      </a>
    </div>
  );
}

function LiPaginateButton() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end min-h-px pr-[5px] relative rounded-[5px] w-[36px]" data-name="li.paginate_button">
      <APageLink />
    </div>
  );
}

function LiPaginateButtonMargin() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-[655.21px] pl-[6.4px] top-0" data-name="li.paginate_button:margin">
      <LiPaginateButton />
    </div>
  );
}

function UlPagination() {
  return (
    <div className="h-[31.99px] relative shrink-0 w-full" data-name="ul.pagination">
      <LiDataTablesTable0PreviousMargin />
      <LiDataTablesTable0NextMargin />
      <LiPaginateButtonMargin />
    </div>
  );
}

function DivColSm7() {
  return (
    <div className="max-w-[1272.010009765625px] relative self-stretch shrink-0 w-[741.99px]" data-name="div.col-sm-12">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[2px] pt-[1.99px] relative size-full">
        <UlPagination />
      </div>
    </div>
  );
}

function DivRow2() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 h-[35.98px] items-start relative shrink-0 w-full" data-name="div.row">
      <DivColSm6 />
      <DivColSm7 />
    </div>
  );
}

function DivDataTablesTable0Wrapper() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-auto relative shrink-0 w-full" data-name="div#DataTables_Table_0_wrapper">
      <DivRow />
      <DivRow1 />
      <DivRow2 />
    </div>
  );
}

function DivCardBody1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.card-body">
      <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
        <DivDataTablesTable0Wrapper />
      </div>
    </div>
  );
}

function EndStatistics() {
  return (
    <div className="backdrop-blur-[2.5px] bg-[rgba(255,255,255,0.7)] content-stretch flex flex-col items-start pt-[15.99px] relative rounded-[16px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="End /. statistics">
      <DivCardHeader1 />
      <DivCardBody1 />
    </div>
  );
}

function DivContainerXxl() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[1320px] relative shrink-0 w-full" data-name="div.container-xxl">
      <StartHeaderBanner />
      <EndHeaderBanner />
      <DivCard4 />
      <StartStatistics />
      <EndStatistics />
    </div>
  );
}

function EndNavbar() {
  return (
    <div className="relative shrink-0 w-full" data-name="End /. navbar">
      <div className="content-stretch flex flex-col items-start pl-[130.42px] pr-[130.41px] relative size-full">
        <div className="absolute bg-[rgba(248,69,37,0.2)] blur-[100px] bottom-[125.01px] left-[-224.96px] size-[400px]" data-name="div.decoration" />
        <div className="absolute bg-[rgba(248,69,37,0.2)] blur-[100px] right-0 size-[400px] top-[148.8px]" data-name="div.decoration" />
        <DivContainerXxl />
      </div>
    </div>
  );
}

function DivMainContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="div.main-content">
      <EndNavbar />
    </div>
  );
}

function DivCopy() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="div.copy">
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">© 2022 ListOn - All Rights Reserved</p>
      </div>
    </div>
  );
}

function DivCredit() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="div.credit">
      <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">{`Developed by: `}</p>
      </div>
      <div className="h-[17.5px] relative shrink-0 w-[44.78px]" data-name="Component 9">
        <a className="-translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] left-0 text-[#f84525] text-[14px] top-[8.75px] w-[45.137px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank">
          <p className="cursor-pointer leading-[21px]">ListOn</p>
        </a>
      </div>
      <div className="flex flex-col font-['Segoe_UI_Emoji:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] whitespace-nowrap">
        <p className="leading-[21px]">{` 🌺💚`}</p>
      </div>
    </div>
  );
}

function DivAlignItemsCenter8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="div.align-items-center">
      <DivCopy />
      <DivCredit />
    </div>
  );
}

function MainContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="main content">
      <div className="content-stretch flex flex-col items-start px-[20px] py-[15px] relative size-full">
        <DivAlignItemsCenter8 />
      </div>
    </div>
  );
}

function PageContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-[1120px] min-w-px relative self-stretch" data-name="Page Content">
      <DivMainContent />
      <MainContent />
    </div>
  );
}

function EndPreloader() {
  return (
    <div className="h-[1760.05px] relative shrink-0 w-full" data-name="End /. preloader">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center pl-[320px] pt-[80px] relative size-full">
          <PageContent />
        </div>
      </div>
    </div>
  );
}

function MiniLogoPng() {
  return (
    <div className="relative shrink-0 size-[35.99px]" data-name="mini-logo.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMiniLogoPng} />
      </div>
    </div>
  );
}

function SpanSidebarBrandText() {
  return (
    <div className="h-[41.67px] leading-[0] relative shrink-0 text-[40px] text-left w-[116.04px]" data-name="span.sidebar-brand_text">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center left-[8px] text-[#212529] top-[20px] w-[70.107px]" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[40px]">List</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Caveat:Bold',sans-serif] font-bold justify-center left-[77.72px] text-[#f84525] top-[21.66px] whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[40px]">On</p>
      </div>
    </div>
  );
}

function ASidebarBrand() {
  return (
    <a className="content-stretch cursor-pointer flex items-center relative shrink-0" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="a.sidebar-brand">
      <MiniLogoPng />
      <SpanSidebarBrandText />
    </a>
  );
}

function DivSidebarHeader() {
  return (
    <div className="absolute content-stretch flex h-[80px] items-center left-0 pl-[16.99px] pr-[145.98px] top-0" data-name="div.sidebar-header">
      <ASidebarBrand />
    </div>
  );
}

function LiNavLabel() {
  return (
    <div className="relative shrink-0 w-full" data-name="li.nav-label">
      <div className="content-stretch flex flex-col items-start px-[32px] py-[10px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#757575] text-[11px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[16.5px]">Main Menu</p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f84525] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Dashboard
          </p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin1() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[14px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[21px]">Add listing</p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin2() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Wallet
          </p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin3() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[14px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[21px]">Message</p>
        </div>
      </div>
    </div>
  );
}

function SpanBadge() {
  return (
    <div className="bg-[#198754] content-stretch flex flex-col items-center px-[6.825px] py-[3.675px] relative rounded-[800px] shrink-0" data-name="span.badge">
      <div className="flex flex-col font-['Wix_Madefor_Display:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10.5px] text-center text-white whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[10.5px]">2</p>
      </div>
    </div>
  );
}

function SpanBadgeMargin() {
  return (
    <div className="flex-[1_0_0] min-w-[19.93000030517578px] relative" data-name="span.badge:margin">
      <div className="flex flex-col items-end min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end min-w-[inherit] pl-[140.716px] relative size-full">
          <SpanBadge />
        </div>
      </div>
    </div>
  );
}

function LiNavLabel1() {
  return (
    <div className="relative shrink-0 w-full" data-name="li.nav-label">
      <div className="content-stretch flex flex-col items-start pb-[10px] pt-[11.99px] px-[32px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#757575] text-[11px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[16.5px]">Listing</p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin4() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[14px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[21px]">My Listing</p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin5() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Reviews
          </p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin6() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Bookings
          </p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin7() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Bookmark
          </p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin8() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Multi Level Menu
          </p>
        </div>
      </div>
    </div>
  );
}

function LiNavLabel2() {
  return (
    <div className="relative shrink-0 w-full" data-name="li.nav-label">
      <div className="content-stretch flex flex-col items-start pb-[10px] pt-[11.99px] px-[32px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#757575] text-[11px] tracking-[0.5px] uppercase w-full">
          <p className="leading-[16.5px]">Account</p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin9() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Edit Profile
          </p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin10() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Setting
          </p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin11() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Support
          </p>
        </div>
      </div>
    </div>
  );
}

function SpanMs2Margin12() {
  return (
    <div className="relative shrink-0" data-name="span.ms-2:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] relative size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[0px] text-left whitespace-nowrap">
          <p className="cursor-pointer leading-[21px] text-[14px]" role="link" tabIndex="0">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

function UlMetismenu() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ul.metismenu">
      <LiNavLabel />
      <a className="bg-[rgba(248,69,37,0.1)] cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pl-[32px] py-[10px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[12.5%_12.5%_44.3%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7422 9.06655">
                  <path d={svgPaths.p2f6d6200} fill="var(--fill-0, #F84525)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[-0.01%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9951 20.9958">
                  <path clipRule="evenodd" d={svgPaths.p2763a400} fill="var(--fill-0, #F84525)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin />
        </div>
        <div aria-hidden="true" className="absolute border-[#f84525] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/add-listing.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[7.55%_3.12%_6.25%_3.12%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6794 18.0941">
                  <path d={svgPaths.p348fff00} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[56.25%_0_0_56.25%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.18295 9.18295">
                  <path d={svgPaths.p3444f800} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin1 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/wallet.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[1.76%_0_6.25%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9896 19.3089">
                  <path d={svgPaths.p38b56000} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin2 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/messages.html" target="_blank" data-name="Component 7">
        <div className="content-stretch flex items-center justify-between overflow-clip pb-[10px] pl-[31.99px] pr-[0.01px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0_0_4.42%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9896 20.062">
                  <path d={svgPaths.p337a7830} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[18.75%_18.75%_43.75%_18.75%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1185 7.8711">
                  <path d={svgPaths.p5b5bf80} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin3 />
          <SpanBadgeMargin />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <LiNavLabel1 />
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 8">
        <div className="content-stretch flex items-center overflow-clip pl-[32px] py-[10px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[40.63%_34.37%_28.12%_34.38%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.55925 6.55925">
                  <path d={svgPaths.pb4fcd80} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7422 20.9896">
                  <path d={svgPaths.p4434800} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin4 />
          <div className="-translate-y-1/2 absolute flex items-center justify-center right-[12.55px] size-[9.885px] top-[calc(50%+0.01px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-45 flex-none">
              <div className="relative size-[6.99px]" data-name="::after">
                <div aria-hidden="true" className="absolute border-[#433c3a] border-l-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/reviews.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0.01%_18.75%_-0.01%_6.25%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7439 20.9895">
                  <path d={svgPaths.p1d937a00} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin5 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/bookings.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[12px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bottom-[46.87%] left-[37.5%] right-1/4 top-[6.25%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.8711 9.84033">
                  <path clipRule="evenodd" d={svgPaths.p34d22900} fill="var(--fill-0, #433C3A)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[0_6.25%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3659 20.9896">
                  <path d={svgPaths.pfa1c000} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
              <div className="absolute bottom-1/4 left-0 right-[81.25%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.93555 10.4948">
                  <path d={svgPaths.p375fa540} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin6 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/bookmark.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0_0_6.25%_0]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.989 19.6778">
                  <path d={svgPaths.p1c8a2400} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin7 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 8">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute bottom-1/4 left-[3.13%] right-[3.12%] top-[18.75%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.6777 11.8066">
                  <path clipRule="evenodd" d={svgPaths.p21722880} fill="var(--fill-0, #433C3A)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin8 />
          <div className="-translate-y-1/2 absolute flex items-center justify-center right-[12.55px] size-[9.885px] top-[calc(50%+0.99px)]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-45 flex-none">
              <div className="relative size-[6.99px]" data-name="::after">
                <div aria-hidden="true" className="absolute border-[#433c3a] border-l-[0.833px] border-solid border-t-[0.833px] inset-0 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <LiNavLabel2 />
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/profile.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pl-[32px] py-[10px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0_31.25%_84.37%_31.25%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.8711 3.27962">
                  <path d={svgPaths.p33336d80} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[6.25%_12.5%_0_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7422 19.6777">
                  <path d={svgPaths.p8903770} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[37.5%_34.37%_31.25%_34.38%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.55925 6.55925">
                  <path d={svgPaths.p28133b80} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin9 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/setting-app.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[29.71%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.51653 8.51653">
                  <path d={svgPaths.p3aac0e00} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9883 20.9883">
                <path d={svgPaths.p35a8000} fill="var(--fill-0, #433C3A)" id="Vector" />
              </svg>
            </div>
          </div>
          <SpanMs2Margin10 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/sign-up.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[0_12.5%_6.25%_12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7422 19.6777">
                  <path d={svgPaths.p2c14a300} fill="var(--fill-0, #433C3A)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin11 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
      <a className="cursor-pointer relative rounded-br-[30px] rounded-tr-[30px] shrink-0 w-[283.01px]" href="https://themes.easital.com/html/liston/v2.3/sign-in.html" target="_blank" data-name="Component 6">
        <div className="content-stretch flex items-center overflow-clip pb-[10px] pl-[32px] pt-[11.99px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[20.99px]" data-name="Component 2">
            <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
              <div className="absolute inset-[12.5%_0_12.5%_31.25%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4303 15.7422">
                  <path clipRule="evenodd" d={svgPaths.p10941600} fill="var(--fill-0, #433C3A)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
              <div className="absolute inset-[28.12%_31.25%_28.12%_-0.01%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4315 9.18461">
                  <path clipRule="evenodd" d={svgPaths.p3a4c0640} fill="var(--fill-0, #433C3A)" fillRule="evenodd" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <SpanMs2Margin12 />
        </div>
        <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0)] border-l-5 border-solid inset-0 pointer-events-none rounded-br-[30px] rounded-tr-[30px]" />
      </a>
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1135px] items-start left-0 min-w-[315px] overflow-clip top-[80px] w-[315px]" data-name="sidebar header">
      <UlMetismenu />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bottom-[560.05px] left-0 max-w-[320px] min-h-[1200px] min-w-[320px] top-0 w-[320px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-r-5 border-solid border-white inset-0 pointer-events-none" />
      <DivSidebarHeader />
      <SidebarHeader />
    </div>
  );
}

function Span5() {
  return (
    <div className="bg-white h-[1.99px] min-h-px relative rounded-[3px] shrink-0 w-full" data-name="span">
      <div className="absolute bg-white h-[1.99px] right-0 rounded-[3px] top-[-5.99px] w-[10px]" data-name="::before" />
      <div className="absolute bg-white bottom-[-5.99px] h-[1.99px] right-0 rounded-[3px] w-[15px]" data-name="::after" />
    </div>
  );
}

function DivSidebarCollapse() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[9.02px] pt-[8.99px] relative shrink-0 size-[20px]" data-name="div#sidebarCollapse">
      <Span5 />
    </div>
  );
}

function DivSidebarToggle() {
  return (
    <div className="bg-[#f84525] content-stretch flex items-center justify-center relative rounded-[41.99px] shrink-0 size-[41.99px]" data-name="div.sidebar-toggle">
      <DivSidebarCollapse />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="div#placeholder">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[15px] w-full">
          <p className="leading-[normal]">Search (Ctrl+/)</p>
        </div>
      </div>
    </div>
  );
}

function InputSearchText() {
  return (
    <div className="bg-white h-[47.99px] relative rounded-[12.8px] shrink-0 w-full" data-name="input.search__text">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[14.399px] pl-[48.832px] pr-[2.832px] pt-[14.419px] relative size-full">
          <DivPlaceholder />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0.999px] border-solid border-white inset-0 pointer-events-none rounded-[12.8px]" />
    </div>
  );
}

function SpanSearchShortcode() {
  return (
    <div className="absolute bg-[#f8f4f3] content-stretch flex flex-col h-[27.67px] items-start px-[9.832px] py-[4.832px] right-[7.84px] rounded-[7px] top-[10.17px]" data-name="span.search-shortcode">
      <div aria-hidden="true" className="absolute border-[#f8f4f3] border-[0.999px] border-solid inset-0 pointer-events-none rounded-[7px]" />
      <div className="flex flex-col font-['Wix_Madefor_Display:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">(Ctrl+/)</p>
      </div>
    </div>
  );
}

function StartSearch() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[360px]" data-name="Start search">
      <InputSearchText />
      <SpanSearchShortcode />
      <div className="absolute h-[47.995px] left-[11.99px] overflow-clip top-0 w-[20.99px]" data-name="Component 2">
        <div className="absolute inset-[28.14%_0_28.13%_-0.01%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9904 20.9874">
            <path d={svgPaths.p2f329c80} fill="var(--fill-0, #69534F)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function StartSearchMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[20px] relative shrink-0 w-[380px]" data-name="Start search:margin">
      <StartSearch />
    </div>
  );
}

function LiNavItem() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[276.33px] top-0" data-name="li.nav-item">
      <a className="content-stretch cursor-pointer flex items-center pl-[14.99px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" href="https://themes.easital.com/html/liston/v2.3/listings-map-grid-1.html" target="_blank" data-name="Component 9">
        <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[22.5px]">Explore</p>
        </div>
      </a>
    </div>
  );
}

function SpanH2DRemoveBeforeMargin() {
  return (
    <div className="content-stretch flex flex-col h-[17.99px] items-start pl-[3.06px] relative shrink-0 w-[15.05px]" data-name="span.__h2d-remove-before:margin">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#433c3a] text-[12px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[18px]">{`\uF078`}</p>
      </div>
    </div>
  );
}

function LiNavItem1() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-0 top-0" data-name="li.nav-item">
      <a className="content-stretch cursor-pointer flex items-center overflow-clip pl-[14.99px] pr-[8.01px] py-[8px] relative rounded-[4px] shrink-0" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 10">
        <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[22.5px]">Home</p>
        </div>
        <SpanH2DRemoveBeforeMargin />
      </a>
    </div>
  );
}

function SpanH2DRemoveBeforeMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[17.99px] items-start pl-[3.06px] relative shrink-0 w-[15.05px]" data-name="span.__h2d-remove-before:margin">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#433c3a] text-[12px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[18px]">{`\uF078`}</p>
      </div>
    </div>
  );
}

function LiNavItem2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[81.42px] top-0" data-name="li.nav-item">
      <a className="content-stretch cursor-pointer flex items-center overflow-clip pl-[14.99px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 10">
        <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[22.5px]">Dashboard</p>
        </div>
        <SpanH2DRemoveBeforeMargin1 />
      </a>
    </div>
  );
}

function SpanH2DRemoveBefore2() {
  return (
    <div className="content-stretch flex flex-col h-[17.99px] items-start relative shrink-0 w-[11.99px]" data-name="span.__h2d-remove-before">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#433c3a] text-[12px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[18px]">{`\uF078`}</p>
      </div>
    </div>
  );
}

function LiNavItem3() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[197.78px] top-0" data-name="li.nav-item">
      <a className="content-stretch cursor-pointer flex gap-[3.06px] items-center p-[8px] relative rounded-[4px] shrink-0" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 10">
        <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[22.5px]">Listing</p>
        </div>
        <SpanH2DRemoveBefore2 />
      </a>
    </div>
  );
}

function SpanH2DRemoveBefore3() {
  return (
    <div className="content-stretch flex flex-col h-[17.99px] items-start relative shrink-0 w-[11.99px]" data-name="span.__h2d-remove-before">
      <div className="flex flex-col font-['Font_Awesome_5_Free:Solid',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#433c3a] text-[12px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[18px]">{`\uF078`}</p>
      </div>
    </div>
  );
}

function LiNavItem4() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-start left-[353.04px] top-0" data-name="li.nav-item">
      <a className="content-stretch cursor-pointer flex gap-[3.06px] items-center p-[8px] relative rounded-[4px] shrink-0" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 10">
        <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[15px] text-left whitespace-nowrap" role="link" tabIndex="0">
          <p className="cursor-pointer leading-[22.5px]">Template</p>
        </div>
        <SpanH2DRemoveBefore3 />
      </a>
    </div>
  );
}

function EndSearch() {
  return (
    <div className="h-[38.49px] relative shrink-0 w-[450.86px]" data-name="End /. search">
      <LiNavItem />
      <LiNavItem1 />
      <LiNavItem2 />
      <LiNavItem3 />
      <LiNavItem4 />
    </div>
  );
}

function Collapse() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Collapse">
      <StartSearchMargin />
      <EndSearch />
    </div>
  );
}

function LiNavItem5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[2.99px] pr-[3px] relative shrink-0" data-name="li.nav-item">
      <a className="bg-white content-stretch cursor-pointer flex items-center justify-center p-[7px] relative rounded-[12.8px] shrink-0 size-[40px]" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 9">
        <div className="overflow-clip relative shrink-0 size-[15.99px]" data-name="Component 2">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9896 15.9896">
            <path d={svgPaths.p328c4b80} fill="var(--fill-0, #494C57)" id="Vector" />
          </svg>
        </div>
      </a>
    </div>
  );
}

function LiNavItem6() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[2.99px] pr-[3px] relative shrink-0" data-name="li.nav-item">
      <div className="bg-white content-stretch flex items-center justify-center p-[7px] relative rounded-[12.8px] shrink-0 size-[40px]" data-name="Component 11">
        <div className="overflow-clip relative shrink-0 size-[15.99px]" data-name="Component 2">
          <div className="absolute inset-[0_6.25%_0_0]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.99 15.9889">
              <path d={svgPaths.pe266780} fill="var(--fill-0, #494C57)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component01Jpg() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[20px]" data-name="01.jpg">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute h-[117.19%] left-0 max-w-none top-[-8.59%] w-full" src={imgImageDescription} />
      </div>
    </div>
  );
}

function After() {
  return (
    <div className="absolute bg-[#3bb001] bottom-0 content-stretch flex flex-col items-end justify-end right-[3px] rounded-[5.99px] size-[5.99px]" data-name="::after">
      <div className="bg-[rgba(255,255,255,0)] relative rounded-[5.99px] shadow-[0px_0px_0px_2px_rgba(255,255,255,0.95)] shrink-0 size-[5.99px]" data-name="::after:shadow" />
    </div>
  );
}

function DivAvatar() {
  return (
    <div className="content-stretch flex items-center justify-center mr-[-0.01px] relative shrink-0 size-[40px] z-[2]" data-name="div.avatar">
      <Component01Jpg />
      <After />
    </div>
  );
}

function H6M() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="h6.m-0">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#494c57] text-[14px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[16.8px]">Naeem Khan</p>
      </div>
    </div>
  );
}

function Span6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="span">
      <div className="flex flex-col font-['Wix_Madefor_Display:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#757575] text-[13px] text-left whitespace-nowrap" role="link" tabIndex="0">
        <p className="cursor-pointer leading-[15px]">example@gmail.com</p>
      </div>
    </div>
  );
}

function DivProfileText() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[12px] top-[-0.58px] w-[130px]" data-name="div.profile-text">
      <H6M />
      <Span6 />
    </div>
  );
}

function DivProfileTextMargin() {
  return (
    <div className="h-[31.8px] relative shrink-0 w-[141.34px] z-[1]" data-name="div.profile-text:margin">
      <DivProfileText />
    </div>
  );
}

function DivProfileElement() {
  return (
    <div className="content-stretch flex isolate items-center relative shrink-0" data-name="div.profile-element">
      <DivAvatar />
      <DivProfileTextMargin />
    </div>
  );
}

function LiNavItem7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[2.99px] pr-[3px] relative shrink-0" data-name="li.nav-item">
      <a className="content-stretch cursor-pointer flex h-[41.99px] items-center justify-center p-[8px] relative rounded-[12.8px] shrink-0" href="https://themes.easital.com/html/liston/v2.3/dashboard/dashboard.html" target="_blank" data-name="Component 10">
        <DivProfileElement />
      </a>
    </div>
  );
}

function UlNavbarNav() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="ul.navbar-nav">
      <LiNavItem5 />
      <LiNavItem6 />
      <LiNavItem7 />
    </div>
  );
}

function DivNavbarIcon() {
  return (
    <div className="content-stretch flex h-[41.99px] items-start relative shrink-0" data-name="div.navbar-icon">
      <UlNavbarNav />
    </div>
  );
}

function StarNavbar() {
  return (
    <div className="absolute backdrop-blur-[7.5px] bg-[rgba(255,255,255,0.68)] content-stretch flex h-[80px] items-center left-[320px] px-[16px] right-0 top-0" data-name="Star navbar">
      <DivSidebarToggle />
      <Collapse />
      <DivNavbarIcon />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[35.7px] relative shrink-0 w-[128px]" data-name="Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100.01%] left-0 max-w-none top-[-0.01%] w-full" src={imgLogo} />
      </div>
    </div>
  );
}

function DivPageLoaderLogo() {
  return (
    <div className="content-stretch flex flex-col items-center mb-[-4px] relative shrink-0" data-name="div.page-loader-logo">
      <Logo />
    </div>
  );
}

function DivPageLoaderPercent() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div.page-loader-percent">
      <div className="flex flex-col font-['Wix_Madefor_Display:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#433c3a] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[18px]">100%</p>
      </div>
    </div>
  );
}

function DivPageLoaderProgress() {
  return (
    <div className="content-stretch flex flex-col gap-[22.4px] items-start relative shrink-0 w-[200px]" data-name="div.page-loader-progress">
      <div className="bg-[#f84525] h-[3.2px] relative rounded-[2px] shrink-0 w-[201.08px]" data-name="div.page-loader-bar" />
      <DivPageLoaderPercent />
    </div>
  );
}

function DivPageLoaderProgressMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[20px] relative shrink-0 w-[200px]" data-name="div.page-loader-progress:margin">
      <DivPageLoaderProgress />
    </div>
  );
}

function DivPageLoaderContent() {
  return (
    <div className="blur-[7.5px] content-stretch flex flex-col items-center justify-center opacity-0 relative shrink-0" data-name="div.page-loader-content">
      <DivPageLoaderLogo />
      <DivPageLoaderProgressMargin />
    </div>
  );
}

function StartPreloader() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[0.01px] left-0 rounded-bl-[950.42px] rounded-br-[950.42px] shadow-[0px_4px_20px_0px_rgba(32,79,94,0.07)] top-0 w-[1900.83px]" data-name="Start preloader">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pt-[79.99px] relative size-full">
          <DivPageLoaderContent />
        </div>
      </div>
    </div>
  );
}

export default function Component1920WDefault() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(248, 244, 243) 0%, rgb(248, 244, 243) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="1920w default">
      <EndPreloader />
      <Sidebar />
      <StarNavbar />
      <StartPreloader />
    </div>
  );
}