import Header from "@/components/Header";
import AboutMeSection from "../components/AboutMeSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactsSection from "../components/ContactsSection";

export default function Home() {
  return (
    <div className="bg-[#F8EDE7] p-0 items-center flex flex-col">
      <Header />
      <AboutMeSection />
      <ProjectsSection />
      <ContactsSection />
    </div>
  );
}
