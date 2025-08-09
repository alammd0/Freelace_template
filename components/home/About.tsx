"use client"

import Image from "next/image";
import AboutImage from "../../public/about/About.png";
import Rectangle from "../../public/about/Rectangle.png";
import ReuseBtn from "../ReuseBtn";


export default function About(){
    return (
        <div id="about" className="pt-[120px] bg-[#FFFAEF]">
            <div className="mt-[550px] w-11/12 mx-auto flex xl:flex-row flex-col-reverse items-center gap-24 xl:gap-10">
                <div className="relative max-w-[50%] w-full flex items-center justify-center">
                    <Image src={Rectangle} alt="Rectangle" width={432} height={650} />
                    <Image src={AboutImage} alt="About" width={432} height={650} className="rounded-full absolute md:-top-12 md:left-16 bottom-8 left-8" />
                </div>
                <div className="max-w-50% w-full flex flex-col md:gap-2 gap-4 mt-12">
                    <div className="flex flex-col font-style-primary space-y-2">
                        <h2 className="text-xl font-bold tracking-wider uppercase font-style-primary">ABOUT</h2>
                        <p className="md:text-6xl text-4xl italic md:not-italic font-normal uppercase md:font-medium font-style-primary -tracking-wider">Crafting UNIQUE BRAND EXPERIENCES SINCE 2014</p>
                    </div>
                    <p className="font-normal text-[18px] tracking-wider">With a Visual Arts degree, my journey began in graphic design, crafting logos and marketing materials. Video editing followed, where meticulous attention to detail set my work apart, and I ventured into 3D modeling for immersive experiences.</p>

                    <ReuseBtn 
                        text="SCHEDULE A CALL"
                        textColor = "text-[#FEFAEE]"
                        hoverBgColor = "hover:bg-[#FEFAEE]"
                        hoverTextColor = "hover:text-black"
                        onclick={() => {}}
                        bgColor = "bg-black"
                    />
                </div>
            </div>
        </div>
    )
}