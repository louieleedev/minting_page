import React from "react";
import "./Modal.css";
import bg from "../assets/_IMG_23811.jpeg";
import IncrementDecrement from "./IncrementDecrement";

function Modal({
  open,
  onClose,
  img_url,
  series,
  title,
  item_count,
  price,
  currency,
}) {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalContainer">
          <div className="md:flex sm:inline">
            <img
              src={img_url}
              alt="preview"
              className="aspect-square md:w-[240px] md:h-[240px] rounded-[20px]"
            />

            <div className="modalRight">
              <div className="content float-left text-left  text-[#ffffff] w-[100%]">
                <h1 className="text-[18px] font-bold leading-[1] xl:text-[18px] lg:text-[18px] text-left">
                  {series} <span className="font-normal">EDITION</span>
                </h1>
                <div className="mt-2 text-[36px] xl:text-[36px] lg:text-[30px] font-semibold leading-[1] float-left text-left">
                  {title}
                </div>
                {/** Profil */}
                <div className="flex container justify-start mt-3">
                  <img
                    src={bg}
                    alt=""
                    className=" w-[24px] aspect-square rounded-[100%] inline-block"
                  />
                  <div className="inline-block">
                    <h4 className="text-[20px] ml-3 font-semibold">
                      Junghan Kim
                    </h4>
                  </div>
                </div>
                <hr className="md:hidden mt-6" />
                <p className="text-[#797A7C] text-[20px] float-left text-left mt-5 mobile__hidden">
                  Mint Quantity
                </p>
                <div className="max-w-max gap-x-6 mt-2 mb-12 float-left text-left">
                  <IncrementDecrement min={1} max={30} step={1} />
                </div>
              </div>
            </div>
          </div>
          <hr className="w-[100%] mobile__hidden"></hr>
          <div className="float-left text-left conrainer flex justify-between mt-10 w-[100%]">
            <div className="text-[18px]">
              <p>TOTAL ORDER</p>
              <p className="text-[40px] font-bold">
                {price} {currency}
              </p>
            </div>
            <div>
              <button
                className="btn-normal btn-lg text-[26px] mr-5"
                onClick={onClose}
              >
                Cancle
              </button>
              <button className="btn btn-lg font-semibold text-[26px]">
                MINT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
