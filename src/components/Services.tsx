import { Card } from "@/components/ui/card";
import { UserX, Search, TrendingUp, Heart, Building2, Bitcoin } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: UserX,
      title: "Identity Theft Recovery",
      description: "Recover accounts and funds compromised through identity theft and unauthorized access.",
    },
    {
      icon: Search,
      title: "Fraud Investigation",
      description: "Investigate and recover assets stolen through various fraud schemes and scams.",
    },
    {
      icon: TrendingUp,
      title: "Investment Scams",
      description: "Specialized recovery of funds lost to fake investment platforms and Ponzi schemes.",
    },
    {
      icon: Heart,
      title: "Romance Scams",
      description: "Recover money lost to romance scams and online dating fraud schemes.",
    },
    {
      icon: Building2,
      title: "Banking Fraud",
      description: "Recover funds lost through wire fraud, unauthorized transfers, and banking scams.",
    },
    {
      icon: Bitcoin,
      title: "Crypto Recovery",
      description: "Advanced blockchain forensics to trace and recover stolen or misplaced cryptocurrency.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive crime investigation and asset recovery solutions for victims of fraud, scams, and financial crimes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card-gradient border-border hover:border-primary transition-all duration-300 hover:shadow-accent-glow"
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
