import Image from "next/image";
import Logo_01 from "../../public/Testimonial/Logo_01.png"
import Logo_02 from "../../public/Testimonial/Logo_02.png"
import Logo_03 from "../../public/Testimonial/Logo_03.png"
import Logo_04 from "../../public/Testimonial/Logo_04.png"




export default function Testimonials() {

    const testimonials = [
    {
      logo: Logo_01,
      title: "TechStartup Xperience",
      name: "Sarah Thompson",
      text: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "February 2024",
    },
    {
      logo: Logo_02,
      title: "GlorifiedBrand",
      name: "Sarah Thompson",
      text: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "January 2024",
    },
    {
      logo: Logo_03,
      title: "WorldofStartups",
      name: "Sarah Thompson",
      text: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "November 2023",
    },
    {
      logo: Logo_04,
      title: "StartupNation",
      name: "Sarah Thompson",
      text: "Ability to capture the essence of our vision and translate it into a visually stunning logo exceeded our expectations.",
      date: "April 2023",
    },
  ];

    return (
        <div id="testimonials" className="pt-[90px] flex flex-col gap-5 p-10">

            <div className="flex flex-col items-center justify-center text-white">
                <h1  className="text-xl font-bold tracking-wider uppercase font-style-primary">Testimonial</h1>
                <p   className="text-4xl uppercase font-medium font-style-primary -tracking-wider">WHAT PEOPLE SAY</p>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-4">
                {
                    testimonials.map((item, index) => {
                        return (
                            <div className="bg-[linear-gradient(96.36deg,#FCD68B_0%,#FFFFFF_100%)] px-4 py-6 rounded-2xl font-style-primary flex flex-col gap-2 cursor-pointer hover:scale-105 transition-all duration-100" key={index}>
                                <div className="flex flex-col md:flex-row md:gap-10 gap-4">
                                    <div>
                                        {/* logo */}
                                        <Image src={item.logo} alt="logo" height={40} width={40} className="rounded-full bg-white p-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl font-bold tracking-wider font-style-primary capitalize italic">{item.title}</h2>
                                        <p className="text-[14px] font-medium uppercase font-style-primary">{item.name}</p>
                                    </div>
                                </div>

                                <div className="text-[14px] font-medium font-style-primary">
                                    {item.text}
                                </div>

                                <div className="text-[14px] font-medium font-style-primary">
                                    {item.date}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}