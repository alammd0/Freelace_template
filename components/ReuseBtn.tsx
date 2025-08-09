interface ReuseBtnProps {
    bgColor:string,
    textColor:string,
    hoverBgColor:string,
    hoverTextColor:string,
    onclick : () => void, 
    text : string
}

export default function ReuseBtn({ bgColor, textColor, hoverBgColor, onclick, text, hoverTextColor}: ReuseBtnProps) {
    return (
       <button className={`${bgColor} ${textColor} ${hoverBgColor} ${hoverTextColor} px-4 py-2 rounded-full w-fit uppercase font-style-primary font-medium text-[14px] cursor-pointer transition-all duration-200
        border-1 ${bgColor === "bg-black" ? "border-white" : "border-[#FEFAEE]"}`} onClick={onclick}>
         {text}
       </button>
    )
}