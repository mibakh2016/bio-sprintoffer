import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import RDAreasSection from "@/components/RDAreasSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ReferencesSection from "@/components/ReferencesSection";
import ResearchSection from "@/components/ResearchSection";
import MoreAboutSection from "@/components/MoreAboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <RDAreasSection />
      <ProjectsSection />
      <ExperienceSection />
      <ReferencesSection />
      <ResearchSection />
      <MoreAboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
