import React from "react";
import Header from "./Header";
import { useState } from "react";
import { FaGithub, FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Header.css";
import Modal from "./Modal";
import IncrementDecrement from "./IncrementDecrement";
import { nftData } from "./NftData";

function OriginalEdition() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="background">
      <div className="backdrop bg-[#0c0c0c]">
        <Header />

        {nftData.main.map((item) => {
          return (
            <div>
              {/** section className="section " id="home" */}
              <section>
                <div className="container mx-auto max-w-full">
                  <div className="flex justify-between flex-col lg:flex-row lg:p-[4.7vw] sm:p-[30px]">
                    {/** image */}
                    <div className="lg:w-[37.5vw] lg:min-w-[400px]">
                      <img
                        src={item.img_url}
                        alt=""
                        className="aspect-square rounded-[30px] w-[100%]"
                      />
                    </div>

                    {/** text */}
                    <div className="flex-1 text-left lg:ml-[3vw] mt-5 sm:ml-0 ">
                      <h1 className="font-bold leading-[1] lg:text-[1.25vw] sm:text-[16px]">
                        {item.series}{" "}
                        <span className="font-normal">EDITION</span>
                      </h1>

                      <div className=" lg:text-[4.2vw] sm:text-[36px] font-semibold leading-[1] xl:max-w-[100%] sm:mt-2">
                        {item.title}
                        {/** Profil */}
                        <div className="flex items-center justify-start lg:mt-[0.5vw] sm:mt-2">
                          <img
                            src={item.profil}
                            alt=""
                            className="aspect-square lg:w-[2.1vw] rounded-[100%] inline-block sm:w-[25px]"
                          />
                          <div className="inline-block">
                            <h4 className="lg:text-[1.75vw] lg:ml-[1.2vw] sm:text-[16px] sm:ml-[10px] font-semibold	">
                              {item.autor}
                            </h4>
                          </div>
                        </div>
                        {/** Social */}
                        <div className=" flex items-center justify-between mt-[1.5vw] mobile__hidden tablet__hidden">
                          <div className="align-middle flex container mr-10">
                            <hr />
                          </div>
                          <div className="flex text-[1.56vw] gap-x-[2.5vw] max-w-max mx-auto lg:mx-0">
                            <a href="#">
                              <FaGithub />
                            </a>
                            <a href="#">
                              <FaDiscord />
                            </a>
                            <a href="#">
                              <FaTwitter />
                            </a>
                            <a href="#">
                              <FaInstagram />
                            </a>
                          </div>
                        </div>
                        <div className=" flex lg:text-[1.25vw] justify-between mt-[1.5vw] md:text-[20px] sm:text-[15px] sm:leading-[140%] sm:mt-6">
                          <div href="#" className="mr-3">
                            Items{" "}
                            <span className="font-bold">{item.item_count}</span>
                          </div>
                          <div href="#" className="mr-3">
                            Created{" "}
                            <span className="font-bold">{item.date}</span>
                          </div>
                          <div href="#" className="mr-3">
                            Creators Earning{" "}
                            <span className="font-bold">{item.earning}%</span>
                          </div>
                          <div href="#" className="mr-3 mobile__hidden">
                            Chain{" "}
                            <span className="font-bold">{item.currency}</span>
                          </div>
                        </div>
                        <hr className="md:hidden mt-6" />
                        <p className="lg:text-[1vw] sm:text-[15px] font-light tracking-[0.01em] leading-[180%] lg:leading-[1.7vw] lg:mt-[1.5vw] lg:mb-[3vw] mx-auto lg:mx-0 sm:mt-8 sm:mb-[50px]">
                          Starting with observation, the most basic tool for
                          scientific experiments, the artist disassembles each
                          plant and categorizes flowers, leaves, seeds, and
                          twigs of various plants. Starting with observation,
                          the most basic tool for scientific experiments, the
                          artist disassembles each plant and categorizes
                          flowers, leaves, seeds, and twigs of various
                          plants.Starting with observation, the most basic tool
                          for scientific experiments, the artist disassembles
                          each plant and categorizes flowers, leaves, seeds, and
                          twigs of various plants. <br />
                          Starting with observation, the most basic tool for
                          scientific experiments, the artist disassembles . . .
                        </p>

                        <div className="flex container flex-column max-w-max gap-x-6 mb-12 mx-auto lg:mx-0">
                          <div className="lg__hidden">
                            <IncrementDecrement min={1} max={30} step={1} />
                          </div>
                          <button
                            className="btn md:text-[26px] md:py-[12px] md:px-[46px] sm:text-[20px] sm:py-[12px] sm:px-[27px] font-semibold"
                            onClick={() => {
                              setOpenModal(true);
                            }}
                          >
                            MINT
                          </button>

                          {
                            <Modal
                              open={openModal}
                              onClose={() => setOpenModal(false)}
                              img_url={item.img_url}
                              series={item.series}
                              title={item.title}
                              item_count={item.item_count}
                              price={item.price}
                              currency={item.currency}
                            />
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OriginalEdition;
