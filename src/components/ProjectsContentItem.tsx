"use client";

import Image, { StaticImageData } from "next/image";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface ContentItemProps {
  title: string;
  description: string;
  icon: StaticImageData;
  link: string;
  color: string;
}

const ProjectsContentItem = ({ title, description, icon, link, color }: ContentItemProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const router = useRouter();

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`bg-${color}-300 items-center justify-center flex flex-col`}
      onClick={() => router.push(link)}
    >
      {isHovering ? (
        <>
          <div className="pb-5 text-3xl font-bold">{title}</div>
          <div className="text-xl">{description}</div>
        </>
      ) : (
        <Image className="w-50" src={icon} alt="logo of project" />
      )}
    </div>
  );
};

export default ProjectsContentItem;
