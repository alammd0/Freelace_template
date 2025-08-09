import Image from "next/image";
import Project from "../../public/Project.png";



export default function Portfolio(){
    return (
        <div id="portfolio" className="bg-[#FFFAEF] pt-[100px] flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold tracking-wider uppercase font-style-primary">PORTFOLIO</h2>
                <p className="text-4xl uppercase font-medium font-style-primary -tracking-wider">MY LATEST WORKS</p>
            </div>

            <div className="w-screen md:h-screen h-[800px] relative">
               <Image src={Project} alt="Project" fill className="object-cover" />

               <div className="absolute right-10 bottom-10 flex flex-col gap-6 w-[368px] h-[300px] p-4 text-white bg-[#11141a]/80 rounded-xl">
                   <div className="flex gap-6">
                      <div className="bg-white text-black rounded-full w-fit px-4 py-3 font-style-primary">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-left-icon lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
                      </div>

                      <div  className="text-black rounded-full w-fit px-4 py-2 font-style-primary bg-white/40">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                      </div>
                      
                   </div>
                   <div className="flex gap-4 flex-col">
                     <h3 className="bg-[#FCD68B] text-[#171717] px-4 py-2 w-fit rounded-full font-style-primary">BRANDING</h3>
                     <p className="text-white text-[18px] font-semibold font-style-primary">Steaan</p>
                     <p>Merging modern aesthetics with brand essence, I crafted logos and visuals that not only resonated with each startup&apos;s unique vision but also left a lasting impression.</p>
                   </div>
               </div>
            </div>
        </div>
    )
}