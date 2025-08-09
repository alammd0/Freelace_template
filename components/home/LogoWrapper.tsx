import logo_1 from "../../public/logo/Logo_1.png";
import logo_2 from "../../public/logo/Logo_2.png";
import logo_3 from "../../public/logo/Logo_3.png";
import logo_4 from "../../public/logo/Logo_4.png";
import logo_5 from "../../public/logo/Logo_5.png";
import logo_6 from "../../public/logo/Logo_6.png";
import logo_7 from "../../public/logo/Logo_7.png";
import Image from "next/image";

export default function LogoWrapper() {
  const logoData = [
    { src: logo_1, alt: "logo_1" },
    { src: logo_2, alt: "logo_2" },
    { src: logo_3, alt: "logo_3" },
    { src: logo_4, alt: "logo_4" },
    { src: logo_5, alt: "logo_5" },
    { src: logo_6, alt: "logo_6" },
    { src: logo_7, alt: "logo_7" },
  ];

  return (
    <div className="absolute w-full">
      <svg width="100%" height="576" viewBox="0 0 1440 576" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" >
        <rect x="1440" y="576" width="1440" height="576" transform="rotate(180 1440 576)" fill="url(#paint0_linear_1_89)" />
        <defs>
          <linearGradient id="paint0_linear_1_89" x1="2160" y1="1251.61" x2="2082.33" y2="644.087" gradientUnits="userSpaceOnUse">
            <stop offset="0.314258" stopColor="#171717" />
            <stop offset="0.474945" stopColor="#9C356D" />
            <stop offset="0.636672" stopColor="#F9784C" />
            <stop offset="0.785994" stopColor="#FCD68B" />
            <stop offset="0.958047" stopColor="#FFFAEF" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute top-60 w-full flex justify-between md:gap-0 overflow-hidden gap-20 p-10">
        {logoData.map((item, index) => (
          <Image
            key={index}
            src={item.src.src}
            alt={item.alt}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
}
