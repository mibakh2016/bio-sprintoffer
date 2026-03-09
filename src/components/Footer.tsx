const Footer = () => {
  return (
    <footer className="border-t border-border py-10 bg-muted/30">
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <span className="font-display font-semibold text-foreground">ArchitectAI<span className="text-accent">.</span></span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
