import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const UniversityListData = [
  {
    logo: "/images/university_list/10_Lovely-Professional-University-Online-logo.jpg",
    name: "Amity Online University",
  },
  {
    logo: "/images/university_list/2_chandigarh-distance-university-logo.jpg",
    name: "Chandigarh Distance University",
  },
  {
    logo: "/images/university_list/3_chandigarh-online-university-logo.jpg",
    name: "Chandigarh Online University",
  },
  {
    logo: "/images/university_list/4_datta-meghe-institute-of-higher-education-online-logo.webp",
    name: "Datta Meghe Institute of Higher Education Online",
  },
  {
    logo: "/images/university_list/5_dy-patil-vidyapeeth-university-online.jpg",
    name: "DY Patil Vidyapeeth University Online",
  },
  {
    logo: "/images/university_list/6_GLA-University-Online-logo.jpg",
    name: "GLA University Online",
  },
  {
    logo: "/images/university_list/7_Hindustan-University-logo.jpg",
    name: "Hindustan University",
  },
  {
    logo: "/images/university_list/8_Jain-University-logo.jpg",
    name: "Jain University",
  },
  {
    logo: "/images/university_list/9_Lingayas-Vidyapeeth-University-logo.jpg",
    name: "Lingayas Vidyapeeth University",
  },
  {
    logo: "/images/university_list/10_Lovely-Professional-University-Online-logo.jpg",
    name: "Lovely Professional University Online",
  },

  {
    logo: "/images/university_list/14_manipal-online-logo.png",
    name: "Manipal Online",
  },
  {
    logo: "/images/university_list/15_nmims-university-online-logo.png",
    name: "NMIMS University Online",
  },
];

const UniversityCard = ({ logo, name }) => {
  return (
    <figure className="bg-white rounded-sm border py-3 px-5">
      <Image
        src={logo}
        alt={name}
        width={100}
        height={34}
        style={{ objectFit: "contain" }}
        priority
      />
    </figure>
  );
};

const UniversitySlider = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden sec_mb">
      <Marquee pauseOnHover className="[--duration:20s]">
        {UniversityListData.map((university) => (
          <UniversityCard key={university.name} {...university} />
        ))}
      </Marquee>

    </div>
  );
};

export default UniversitySlider;
