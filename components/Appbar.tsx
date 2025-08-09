"use client"

import Link from "next/link"
import ReuseBtn from "./ReuseBtn"


export default function Appbar({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: (value: boolean) => void }) {

    const NavData = [
        { "label": "ABOUT ME", "link": "#about" },
        { "label": "PORTFOLIO", "link": "#portfolio" },
        { "label": "SKILLS", "link": "#skills" },
        { "label": "SERVICES", "link": "#services" },
        { "label": "TESTIMONIALS", "link": "#testimonials" }
    ]


    return (
        <div className="px-10 py-4  text-white font-style-primary relative">

            <div className="flex justify-between items-center">

                {/* title */}
                <div className="text-[14px] font-semibold font-style-primary uppercase cursor-pointer">
                    Erica JONES
                </div>


                {/* Main Nav */}
                <div className="md:flex justify-between items-center gap-10 hidden">
                    {
                        NavData.map((item, index) => (
                            <div key={index} className="text-[14px] font-medium uppercase text-[#FEFAEE99] hover:text-white transition-all duration-200">
                                <Link href={item.link}>
                                    {item.label}
                                </Link>
                            </div>
                        ))
                    }
                </div>

                {/* Right Nav */}
                <div className="md:flex hidden">
                    <ReuseBtn
                        text="get in touch"
                        textColor="text-[#171717]"
                        hoverBgColor="hover:bg-[#FEFAEE99]"
                        hoverTextColor="hover:text-[#FEFAEE]"
                        onclick={() => { }}
                        bgColor="bg-[#FEFAEE]"
                    />
                </div>

                <div className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg>
                </div>
            </div>

            {
                menuOpen && (
                    <div className="md:hidden flex flex-col items-center gap-4 mt-4 absolute w-full left-0 bg-[#171717] py-4 z-50">
                        {
                            NavData.map((item, index) => (
                                <div key={index} onClick={() => setMenuOpen(false)} className="text-[14px] font-medium uppercase text-[#FEFAEE99] hover:text-white transition-all duration-200">
                                    <Link href={item.link}>
                                        {item.label}
                                    </Link>
                                </div>
                            ))
                        }
                        <ReuseBtn
                            text="get in touch"
                            textColor="text-[#171717]"
                            hoverBgColor="hover:bg-[#FEFAEE99]"
                            hoverTextColor="hover:text-[#FEFAEE]"
                            onclick={() => { }}
                            bgColor="bg-[#FEFAEE]"
                        />
                    </div>
                )
            }
        </div>
    )
}