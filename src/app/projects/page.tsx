import Header from "@/components/Header";
import ProjectsContent from "@/components/ProjectsContent";

const page = () => {
  return (
    <div className="h-screen bg-gray-100 items-center flex flex-col">
      <Header />
      <ProjectsContent />
    </div>
  );
};

export default page;
