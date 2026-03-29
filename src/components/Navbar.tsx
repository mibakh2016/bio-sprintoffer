import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-primary-foreground/10 bg-primary/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-display text-lg font-bold text-primary-foreground tracking-tight">
          ArchitectAI<span className="text-glow">.</span>
        </a>
        
        <div className="hidden sm:flex items-center gap-8">
          <a href="#services" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium">Services</a>
          <a href="#about" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium">About</a>
          <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-medium">Contact</a>
        </div>

        <Button variant="hero" size="sm" asChild>
          <a href="#contact">Book a Sprint</a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
