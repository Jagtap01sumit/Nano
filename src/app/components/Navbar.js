import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white mb-10">
      <div className="absolute w-[1450px] h-[84px] top-0 left-0">
        <img
          className="absolute w-[138px] h-[77px] top-0 left-[70px] object-cover"
          alt="Whatsapp image"
          src="https://c.animaapp.com/AGttmXXx/img/whatsapp-image-2022-08-22-at-3-01-4@2x.png"
        />
        {/* <div className="d-flex align-center justify-center">
          <img
            className="absolute w-[1440px] h-[5px] top-[79px] left-0"
            alt="Line"
            src="https://c.animaapp.com/AGttmXXx/img/line-20.svg"
          />
        </div> */}
        <img
          className="absolute w-[17px] h-[20px] top-[28px] left-[1135px]"
          alt="Group"
          src="https://c.animaapp.com/AGttmXXx/img/group@2x.png"
        />
        <div className="absolute w-[29px] h-[20px] top-[28px] left-[1182px] bg-[#daf2ff] rounded-[3px]">
          <img
            className="absolute w-[27px] h-[14px] top-px left-px"
            alt="Vector"
            src="https://c.animaapp.com/AGttmXXx/img/vector.svg"
          />
        </div>{" "}
        <a
          href="#"
          className="left-[534px] font-bold text-[#e4177c] absolute top-[29px] [font-family:'Poppins',Helvetica] text-[18px] tracking-[0] leading-[normal]"
        >
          Home
        </a>
        <a
          href="#"
          className="left-[624px] font-medium text-[#959595] absolute top-[29px] [font-family:'Poppins',Helvetica] text-[18px] tracking-[0] leading-[normal]"
        >
          Search
        </a>
        <div className="left-[854px] font-medium text-[#959595] absolute top-[29px] [font-family:'Poppins',Helvetica] text-[18px] tracking-[0] leading-[normal]">
          Plans
        </div>
        <div className="left-[623px] font-bold text-[#a6a6a6] absolute top-[29px] [font-family:'Poppins',Helvetica] text-[18px] tracking-[0] leading-[normal]"></div>
        <div className="absolute w-[96px] h-[31px] top-[27px] left-[723px] bg-[#ffedf5] rounded-[38px]">
          <div className="absolute top-[4px] left-[17px] [font-family:'Poppins',Helvetica] font-medium text-[#e4177c] text-[15px] tracking-[0] leading-[normal]">
            Match
          </div>
          <div className="absolute w-[8px] h-[8px] top-[12px] left-[76px] bg-[#ff3f3f] rounded-[4px]" />
        </div>
        <div className="absolute w-[131px] h-[42px] top-[17px] left-[1241px]">
          <div className="relative w-[129px] h-[42px] bg-[#e2f4ff] rounded-[47px]">
            <img
              className="absolute w-[33px] h-[33px] top-[5px] left-[6px]"
              alt="Group"
              src="https://c.animaapp.com/AGttmXXx/img/group-67@2x.png"
            />
            <div className="absolute top-[12px] left-[47px] [font-family:'Poppins',Helvetica] font-medium text-black text-[12px] tracking-[0] leading-[normal]">
              Hii Rahul 👋
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
