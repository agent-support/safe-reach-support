import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Shield className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Anti Crime Recovery</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection("hero")} className="text-foreground hover:text-primary transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
            Services
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="text-foreground hover:text-primary transition-colors">
            Testimonials
          </button>
          <Button onClick={() => scrollToSection("contact")} className="bg-primary text-primary-foreground hover:bg-primary/90">
            CONTACT US
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
