"use client"

import ReuseBtn from "../ReuseBtn";

export default function Hero() {
    return (
        <div className="px-10 py-14 text-white font-style-primary">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-bold tracking-wider uppercase font-style-primary">👋 Hey, I am Erica</h1>
                    <p className="md:text-8xl text-6xl max-w-5xl font-style-primary -tracking-wider bg-[linear-gradient(151.4deg,_#FEFAEE_5.26%,_#FCD68B_29.9%,_#F9784C_53.25%,_#9C356D_72.94%)] bg-clip-text text-transparent">A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO</p>
                </div>
                <div className="flex gap-10">
                    <ReuseBtn 
                        text="My WORKS"
                        textColor = "text-[#FEFAEE]"
                        hoverBgColor = "hover:bg-[#FEFAEE]"
                        hoverTextColor = "hover:text-black"
                        onclick={() => {}}
                        bgColor = "bg-black"
                    />

                    <ReuseBtn
                        text="LET’S TALK"
                        textColor = "text-[#171717]"
                        hoverBgColor = "hover:bg-[#FEFAEE99]"
                        hoverTextColor = "hover:text-[#FEFAEE]"
                        onclick={() => {}}
                        bgColor = "bg-[#FEFAEE]"
                    />
                </div>

            </div>
        </div>
    )
}