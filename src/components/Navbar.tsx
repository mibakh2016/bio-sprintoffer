import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sectionLinkClasses = "text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    navigate(`/#${sectionId}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary-foreground/10 bg-primary/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold text-primary-foreground tracking-tight">
          ArchitectAI<span className="text-glow">.</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <button type="button" onClick={() => handleSectionNavigation("services")} className={sectionLinkClasses}>
            Services
          </button>
          <button type="button" onClick={() => handleSectionNavigation("about")} className={sectionLinkClasses}>
            About
          </button>
          <Link to="/expertise" className={sectionLinkClasses}>
            Expertise
          </Link>
          <button type="button" onClick={() => handleSectionNavigation("contact")} className={sectionLinkClasses}>
            Contact
          </button>
        </div>

        <Button variant="hero" size="sm" onClick={() => handleSectionNavigation("contact")}>
          Book a Sprint
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
