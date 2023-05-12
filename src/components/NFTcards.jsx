import React from 'react'
import { useState } from "react";
import Modal from "./Modal";
import IncrementDecrement from './IncrementDecrement';

function NFTcards({img_url, series, title, item_count, price, currency}) {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    <div className="items-center lg:max-w-[380px] md:max-w-[300px] sm:max-w-[170px]">
      <div>
        <img src={img_url} alt = "preview" className="aspect-square w-[100%] rounded-[20px]"/>
        <div className="lg:text-left sm:text-center md:mb-6 md:mt-6 sm:mb-3 sm:mt-1">
          <h4 className="p-0 md:text-[18px] sm:text-[12px] md:h-[100%] sm:h-[24px] font-bold sm:text-[#849FF4]">
            {series} <span>EDITION</span>
          </h4>
          <h3 className="md:text-[36px] sm:text-[20px] font-semibold md:h-[100%] sm:h-[24px]">{title}</h3>
          <div className="text-[#797A7C] md:text-[20px] sm:text-[11px] flex md:gap-x-8 sm:gap-x-2 md:mt-3 lg:justify-start sm:justify-center">
            <p>
              Items <span className="font-bold">{item_count}</span>
            </p>
            <p>
              Price <span className="font-bold">{price} {currency}</span>
            </p>
          </div>
        </div>

        <div className="flex container flex-column max-w-max gap-x-6 mb-12 mx-auto lg:mx-0">  
          <div className="lg__hidden">
          <IncrementDecrement min={1} max={30} step={1} />
          </div>
          <button
            className="btn md:text-[26px] md:py-[12px] md:px-[46px] sm:text-[20px] sm:py-[6px] sm:px-[27px]"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            MINT
          </button>

          {<Modal open={openModal} onClose={() => setOpenModal(false)} img_url={img_url}
                series={series}
                title={title}
                item_count={item_count}
                price={price}
                currency={currency}/>}
        </div>
      </div>
    </div>
  )
}

export default NFTcards
