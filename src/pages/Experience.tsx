import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RDAreasSection from "@/components/RDAreasSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ReferencesSection from "@/components/ReferencesSection";
import ResearchSection from "@/components/ResearchSection";
import MoreAboutSection from "@/components/MoreAboutSection";

const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ExperienceSection />
        <RDAreasSection />
        <ProjectsSection />
        <ReferencesSection />
        <ResearchSection />
        <MoreAboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
