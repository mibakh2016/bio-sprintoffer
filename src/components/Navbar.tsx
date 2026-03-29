import { useLocation, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    }
    // Otherwise, let the browser navigate to /#hash normally
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary-foreground/10 bg-primary/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold text-primary-foreground tracking-tight">
          ArchitectAI<span className="text-glow">.</span>
        </Link>
        
        <div className="hidden sm:flex items-center gap-8">
          <a href="/#services" onClick={(e) => handleHashClick(e, "services")} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium">Services</a>
          <a href="/#about" onClick={(e) => handleHashClick(e, "about")} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium">About</a>
          <Link to="/expertise" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium">Expertise</Link>
          <a href="/#contact" onClick={(e) => handleHashClick(e, "contact")} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium">Contact</a>
        </div>

        <Button variant="hero" size="sm" asChild>
          <a href="/#contact" onClick={(e) => handleHashClick(e, "contact")}>Book a Sprint</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
