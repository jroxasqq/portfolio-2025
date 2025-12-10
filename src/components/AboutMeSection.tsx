import Image from "next/image";
import geometricImage from "../assets/geometric-object.png";

const AboutMeSection = () => {
  return (
    <div className="relative">
      <div className="h-screen w-screen justify-evenly content-center flex">
        <div className="content-center">
          <Image className="h-100 w-100" src={geometricImage} alt="image of geometric object" />
        </div>
        <div className="content-center">
          <p className="text-[6.5em] font-extrabold text-[#5445F6]">ABOUT ME</p>
          <p className="text-5xl text-[#5445F6]">
            <span className="text-[#5445F6]/60">%#:%^/ /</span> JUSTIN ROXAS
          </p>
          <p className="text-5xl text-[#5445F6]">
            WEB DEVELOPER <span className="text-[#5445F6]/60">/ /&#%</span>
          </p>
          <p className="text-5xl text-[#5445F6]">
            <span className="text-[#5445F6]/60">#&^!%*^#&*~^&!/ /</span> WEB
          </p>
          <p className="text-5xl text-[#5445F6]">
            DESIGNER <span className="text-[#5445F6]/60">/ /^#@$^@#*</span>
          </p>
          <p className="text-5xl text-[#5445F6]">
            <span className="text-[#5445F6]/60">$!%&!^@#/ /</span> ASIAN FILM
          </p>
          <p className="text-5xl text-[#5445F6]">
            LOVER <span className="text-[#5445F6]/60">/ /@?&^#/ / </span>IDEAS
          </p>
          <p className="text-5xl text-[#5445F6]">
            INTO REALITY <span className="text-[#5445F6]/60">/ /@$&^/ / </span>
          </p>
        </div>
        <div className="content-center">
          <Image className="h-100 w-100" src={geometricImage} alt="image of geometric object" />
        </div>
      </div>
      <div className="text-xl font-bold text-black/60 absolute bottom-5 left-17">
        projects below ↘
      </div>
    </div>
  );
};

export default AboutMeSection;
