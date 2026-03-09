import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-display font-semibold tracking-widest uppercase text-accent mb-3">Get Started</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's de-risk your next move.
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Start with a free 30-minute discovery call. We'll discuss your GenAI challenges and I'll tell you honestly whether a sprint makes sense.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="mailto:hello@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Call
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
