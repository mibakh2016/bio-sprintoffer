import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(180 60% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(180 60% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      <div className="container relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-glow/20 bg-glow/5 px-4 py-1.5 text-sm text-glow mb-8 animate-fade-in">
            <Shield className="h-4 w-4" />
            <span className="font-display">De-Risk Your GenAI Investment</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-primary-foreground mb-6 animate-fade-in-up">
            Ship GenAI apps
          </h1>
          
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mb-10 font-body leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            I'm a software architect who helps teams validate architecture, reduce risk, and accelerate delivery of generative AI applications — through focused, time-boxed sprints.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#contact">
                Book a Sprint <ArrowRight className="ml-1 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#services">How It Works</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
