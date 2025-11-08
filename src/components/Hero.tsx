import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bitcoin, Shield, Lock, Package } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    { icon: Bitcoin, title: "Crypto Recovery" },
    { icon: Shield, title: "Fraud Investigation" },
    { icon: Lock, title: "Scam Recovery" },
    { icon: Package, title: "Asset Recovery" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3,
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Recover Your <span className="text-primary">Stolen Assets</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary mb-6">
              Professional Scam & Fraud Recovery Service
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in recovering stolen funds from scams, fraud, and cybercrime with our expert investigation team and proven recovery methods.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                RECOVER MY FUNDS
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection("about")}
                className="border-primary text-primary hover:bg-primary/10"
              >
                LEARN MORE
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 bg-card-gradient border-border hover:border-primary transition-all duration-300 hover:shadow-accent-glow"
              >
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
