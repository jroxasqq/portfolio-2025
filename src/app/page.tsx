import Header from "@/components/Header";
import WelcomeContent from "@/components/WelcomeContent";

export default function Home() {
  return (
    <div className="h-screen bg-gray-100 items-center flex flex-col">
      <Header />
      <WelcomeContent />
    </div>
  );
}
