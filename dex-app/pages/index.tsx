import Head from "next/head";
import grid from "../assets/grid.svg";
import logo from "../assets/logo.png";
import light from "../assets/light.png";
import cube from "../assets/cube.svg";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import hero1 from "../assets/hero1.png";
import Image from "next/image";
import Link from "next/link";

import { Inter } from "next/font/google";

export default function Home() {
  return (
    <div className=" min-h-screen ">
      <Head>
        <title>Decentralised Exchange</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* hero */}
      <div className="hero    -mt-24  ">
        <div className=" bg-black bg-opacity-60 flex items-center flex-wrap justify-center laptop:justify-around min-h-screen">
          <div className=" md:px-8 px-4">
            <h1 className="font-bold sm:text-6xl md:max-w-2xl text-gray-300 text-4xl leading-none text-start tracking-tight mb-6 ">
              Token Exchange made easy with &nbsp;
              <span
                className="!bg-clip-text text-transparent"
                style={{
                  background:
                    "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
                }}
              >
                thirdweb &nbsp;
              </span>
              <br />
              swap.
            </h1>
            <p className=" text-[#A0A0A0] max-w-xl text-[20px]">
              Swap, earn, and build on the leading decentralized crypto trading
              protocol.
            </p>
            <div className=" flex items-center justify-normal gap-x-5 mt-10">
              <Link href={"https://google.com"}>
                <Image src={twitter} alt="twitter" />
              </Link>
              <Link href={""}>
                <Image src={linkedin} alt="linkedin" />
              </Link>
              <Link href={""}>
                <Image src={discord} alt="discord" />
              </Link>
              <Link href={""}>
                <Image src={github} alt="github" />
              </Link>
            </div>
          </div>
          <Image src={hero1} alt="hero1" />
        </div>
      </div>

      <div className=" py-20 flex flex-col text-white items-center justify-center w-full">
        <h1 className="font-bold sm:text-4xl text-gray-300 text-3xl leading-none text-center tracking-tight mb-12 ">
          Built with &nbsp;
          <span
            className="!bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
            }}
          >
            thirdweb
          </span>
        </h1>
        <div className=" flex items-stretch justify-normal flex-wrap gap-8">
          <div
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(132, 17, 136, 0.30) 19.27%, rgba(0, 0, 0, 0.00) 87.5%)",
            }}
            className=" border laptop:max-w-[280px] p-8 rounded-lg"
          >
            <div className=" text-xl font-semibold">Lorem Ipsum</div>
            <p className=" mt-5 text-[14px] text-[#A0A0A0]">
              Lorem ipsum dolor sit amet consectetur. Maecenas maecenas cras
              suscipit gravida pharetra vitae placerat placerat. Sit pharetra
              condimentum rhoncus aliquam quisque tellus hendrerit. etra vitae
              placerat placerat. Sit pharetra condimentum rhoncus aliquam
              quisque tellus hendrerit.
            </p>
            <div className=" mt-5">
              <span className="hover:underline">Learn More</span>
              <span className="  ml-3">→</span>
            </div>
          </div>
          <div
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(132, 17, 136, 0.30) 19.27%, rgba(0, 0, 0, 0.00) 87.5%)",
            }}
            className=" border laptop:max-w-[280px] p-8 rounded-lg"
          >
            <div className=" text-xl font-semibold">Lorem Ipsum</div>
            <p className=" mt-5 text-[14px] text-[#A0A0A0]">
              Lorem ipsum dolor sit amet consectetur. Maecenas maecenas cras
              suscipit gravida pharetra vitae placerat placerat. Sit pharetra
              condimentum rhoncus aliquam quisque tellus hendrerit. etra vitae
              placerat placerat. Sit pharetra condimentum rhoncus aliquam
              quisque tellus hendrerit.
            </p>
            <div className=" mt-5">
              <span className="hover:underline">Learn More</span>
              <span className="  ml-3">→</span>
            </div>
          </div>
          <div
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(132, 17, 136, 0.30) 19.27%, rgba(0, 0, 0, 0.00) 87.5%)",
            }}
            className=" border laptop:max-w-[280px] p-8 rounded-lg"
          >
            <div className=" text-xl font-semibold">Lorem Ipsum</div>
            <p className=" mt-5 text-[14px] text-[#A0A0A0]">
              Lorem ipsum dolor sit amet consectetur. Maecenas maecenas cras
              suscipit gravida pharetra vitae placerat placerat. Sit pharetra
              condimentum rhoncus aliquam quisque tellus hendrerit. etra vitae
              placerat placerat. Sit pharetra condimentum rhoncus aliquam
              quisque tellus hendrerit.
            </p>
            <div className=" mt-5">
              <span className="hover:underline">Learn More</span>
              <span className="  ml-3">→</span>
            </div>
          </div>
          <div
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(132, 17, 136, 0.30) 19.27%, rgba(0, 0, 0, 0.00) 87.5%)",
            }}
            className=" border laptop:max-w-[280px] p-8 rounded-lg"
          >
            <div className=" text-xl font-semibold">Lorem Ipsum</div>
            <p className=" mt-5 text-[14px] text-[#A0A0A0]">
              Lorem ipsum dolor sit amet consectetur. Maecenas maecenas cras
              suscipit gravida pharetra vitae placerat placerat. Sit pharetra
              condimentum rhoncus aliquam quisque tellus hendrerit. etra vitae
              placerat placerat. Sit pharetra condimentum rhoncus aliquam
              quisque tellus hendrerit.
            </p>
            <div className=" mt-5">
              <span className="hover:underline">Learn More</span>
              <span className="  ml-3">→</span>
            </div>
          </div>
        </div>
      </div>

      <div className=" py-20 flex flex-col text-white items-center justify-center w-full">
        <h1 className="font-bold sm:text-4xl text-gray-300 text-3xl leading-none text-center tracking-tight mb-12 ">
          How we built &nbsp;
          <span
            className="!bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
            }}
          >
            thirdweb&nbsp;
          </span>
          swap
        </h1>
        <p className=" text-center laptop:max-w-5xl text-lg tracking-wide">
          Lorem ipsum dolor sit amet consectetur. Maecenas maecenas cras
          suscipit gravida pharetra vitae placerat placerat. Sit pharetra
          condimentum rhoncus aliquam quisque tellus hendrerit. etra vitae
          placerat placerat. Sit pharetra condimentum rhoncus aliquam quisque
          tellus hendrerit. <br /> Lorem ipsum dolor sit amet consectetur.
          Maecenas maecenas cras suscipit gravida pharetra vitae placerat
          placerat. Sit pharetra condimentum rhoncus aliquam quisque tellus
          hendrerit. etra vitae placerat placerat. Sit pharetra condimentum
          rhoncus aliquam quisque tellus hendrerit.
        </p>
        <button className=" mt-10 border border-gray-700 px-5 rounded-md py-3  active:scale-95 transition-all ease-in-out bg-gray-200 bg-opacity-10 text-white mx-auto ">
          Read the technical blog
        </button>
        <Image src={cube} alt="cube" />
      </div>

      <div className=" py-20 flex flex-col text-white items-center justify-center w-full">
        <h1 className="font-bold sm:text-4xl text-gray-300 text-3xl leading-none text-center tracking-tight mb-12 ">
          Why build web3 defi apps with &nbsp;
          <span
            className="!bg-clip-text text-transparent"
            style={{
              background:
                "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
            }}
          >
            thirdweb
          </span>
        </h1>

        <div className=" flex items-stretch justify-normal flex-wrap gap-10">
          <div
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(132, 17, 136, 0.30) 19.27%, rgba(0, 0, 0, 0.00) 87.5%)",
            }}
            className=" border laptop:max-w-[360px] p-8 rounded-lg"
          >
            <div className=" text-xl font-semibold">Lorem Ipsum</div>
            <p className=" mt-5 text-[14px] text-[#A0A0A0]">
              Lorem ipsum dolor sit amet consectetur. Maecenas maecenas cras
              suscipit gravida pharetra vitae placerat placerat. Sit pharetra
              condimentum rhoncus aliquam quisque tellus hendrerit. etra vitae
              placerat placerat. Sit pharetra condimentum rhoncus aliquam
              quisque tellus hendrerit.
            </p>
          </div>
          <div
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(132, 17, 136, 0.30) 19.27%, rgba(0, 0, 0, 0.00) 87.5%)",
            }}
            className=" border laptop:max-w-[360px] p-8 rounded-lg"
          >
            <div className=" text-xl font-semibold">Lorem Ipsum</div>
            <p className=" mt-5 text-[14px] text-[#A0A0A0]">
              Lorem ipsum dolor sit amet consectetur. Maecenas maecenas cras
              suscipit gravida pharetra vitae placerat placerat. Sit pharetra
              condimentum rhoncus aliquam quisque tellus hendrerit. etra vitae
              placerat placerat. Sit pharetra condimentum rhoncus aliquam
              quisque tellus hendrerit.
            </p>
          </div>
          <div
            style={{
              background:
                "radial-gradient(70.71% 70.71% at 50% 50%, rgba(132, 17, 136, 0.30) 19.27%, rgba(0, 0, 0, 0.00) 87.5%)",
            }}
            className=" border laptop:max-w-[360px] p-8 rounded-lg"
          >
            <div className=" text-xl font-semibold">Lorem Ipsum</div>
            <p className=" mt-5 text-[14px] text-[#A0A0A0]">
              Lorem ipsum dolor sit amet consectetur. Maecenas maecenas cras
              suscipit gravida pharetra vitae placerat placerat. Sit pharetra
              condimentum rhoncus aliquam quisque tellus hendrerit. etra vitae
              placerat placerat. Sit pharetra condimentum rhoncus aliquam
              quisque tellus hendrerit.
            </p>
          </div>
        </div>
      </div>

      <div className=" pb-20 flex flex-col text-white items-center justify-center w-full">
        <Image src={logo} alt="logo" />
        <div className=" text-4xl mb-2 font-bold">
          Get started with thirdweb
        </div>
        <p className=" text-[#ECECEC]">
          Build web3 apps with ease. Get instant access.
        </p>

        <div className="  transition-all ease-in-out active:scale-95 cursor-pointer mt-8 rounded-lg mx-auto   bg-gradient-to-r p-[3px] from-[#1D64EF] via-[#3B82F6] to-[#9333EA]">
          <div className="flex flex-col justify-between h-full px-6 py-0.5 bg-white text-white rounded-md">
            <div className=" hover:bg-opacity-90 bg-white flex items-center justify-center gap-x-2 px-3.5 py-2.5  ">
              <Image src={light} alt="light" />
              <div className="font-semibold  text-gray-300 text-base leading-none text-center tracking-tight ">
                <span
                  className="!bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
                  }}
                >
                  Start Building for free
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className=" transition-all ease-in-out active:scale-95 cursor-pointer hover:bg-opacity-90 bg-white flex items-center justify-center gap-x-2 px-3.5 py-2.5  rounded-md mt-8">
          <Image src={light} alt="light" />
          <div className="font-semibold  text-gray-300 text-lg leading-none text-center tracking-tight ">
            <span
              className="!bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(73.59deg, #C339AC 42.64%, #CD4CB5 54%, #E173C7 77.46%)",
              }}
            >
              Start Building for free
            </span>
          </div>
        </div> */}
        <Image src={grid} alt="grid" />
      </div>
    </div>
  );
}
