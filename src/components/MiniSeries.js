import React from "react";
import { nftData } from "./NftData";
import Nfts from "./NFTcards.jsx";

function MiniSeries() {
  return (
    <div className="bg-[#0c0c0c] text-center md:pt-[125px] sm:pt-[70px] pb-[70px] font-bold md:text-[40px] sm:text-[24px]">
      <h2 className="md:mb-[125px] sm:mb-[50px]">
        MINI SERIES <span className="font-normal">of [Anagram 2022]</span>
      </h2>

      {/** Mapping NFT-Cards */}
      <div className="gap-x-8 flex flex-wrap flex-row items-start justify-center lg:mr-[60px] lg:ml-[60px] sm:mr-[60px] sm:m-[30px]">
        {nftData.result.map((item) => {
          return (
            <div>
              <Nfts
                img_url={item.img_url}
                series={item.series}
                title={item.title}
                item_count={item.item_count}
                price={item.price}
                currency={item.currency}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MiniSeries;
