import ProjectsSectionItem from "./ProjectsSectionItem";
import ProjectsSectionItemEnd from "./ProjectsSectionItemEnd";

import flaskIcon from "@/assets/flask.png";
import clapperIcon from "@/assets/clapper.png";
import bookIcon from "@/assets/book.png";

const ProjectsContent = () => {
  return (
    <div className="h-[80vh] w-screen grid grid-cols-2 grid-rows-2">
      <ProjectsSectionItem
        title="Catalyst"
        description="A learning platform for 1st year chemistry students of the School of Chemistry"
        icon={flaskIcon}
        link="https://github.com/jroxasqq/3900-webappers"
        color="green"
      />
      <ProjectsSectionItem
        title="Movie recommender"
        description="Choose a genre of movie, get top 10 recommended movies for that genre"
        icon={clapperIcon}
        link="https://devsoc-unsw.github.io/trainee-pluto-24t1/"
        color="blue"
      />
      <ProjectsSectionItem
        title="StuHDySpaces"
        description="For a series of study spaces on campus, review noise, convenience and privacy"
        icon={bookIcon}
        link="https://github.com/csesoc/trainee-1-23t3"
        color="red"
      />
      <ProjectsSectionItemEnd />
    </div>
  );
};

export default ProjectsContent;
