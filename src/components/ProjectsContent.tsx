"use client";

import { useRouter } from "next/navigation";

const ProjectsContent = () => {
  const router = useRouter();

  return (
    <div className="w-screen grid grid-cols-2 flex-1">
      <div
        className="bg-green-300 items-center justify-center flex"
        onClick={() => router.push("https://github.com/jroxasqq/3900-webappers")}
      >
        catalyst
      </div>
      <div
        className="bg-blue-300 items-center justify-center flex"
        onClick={() => router.push("https://devsoc-unsw.github.io/trainee-pluto-24t1/")}
      >
        movie recommender
      </div>
      <div
        className="bg-red-300 items-center justify-center flex"
        onClick={() => router.push("https://github.com/csesoc/trainee-1-23t3")}
      >
        study space rater
      </div>
      <div className="bg-yellow-300 text-3xl font-bold items-center justify-center flex">
        more soon!
      </div>
    </div>
  );
};

export default ProjectsContent;
