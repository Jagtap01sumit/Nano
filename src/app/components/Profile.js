import React from "react";

export default function Profile() {
  return (
    <>
      <div className="border p-5 flex mt-10">
        <div className="d-flex w-2/3">
          <div className="flex ">
            <img
              src="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&quality=85&auto=format&fit=max&s=59ecca4b78e0bcb76a1f47dd3ab9ead7"
              className="w-1/3 h-1/3"
            ></img>
            <div className="pl-5">
              <h1 className="text-black font-bold text-xl">Komal Sharma</h1>
              <p className="text-black">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
        <img
          className=""
          alt="Line"
          src="https://c.animaapp.com/AGttmXXx/img/line-30.svg"
        />
        <div className="w-1/3 flex align-items-center justify-center flex-col">
          <div className="flex items-center justify-center flex-col">
            <span className="text-[#e4177c]">
              85% <br />
            </span>
            <span className="text-black text-[20px]">Match</span>
          </div>
        </div>
      </div>
    </>
  );
}
