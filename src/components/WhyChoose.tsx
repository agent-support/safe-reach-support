import { Card } from "@/components/ui/card";
import { Award, Microscope, Users, DollarSign } from "lucide-react";
import officerReturningFunds from "@/assets/officer-returning-funds.jpg";

const WhyChoose = () => {
  const reasons = [
    {
      icon: Award,
      title: "Industry Leaders",
      description: "The most trusted name in crime recovery with years of proven success and law enforcement partnerships.",
    },
    {
      icon: Microscope,
      title: "Advanced Investigation",
      description: "Professional investigative methods and forensic techniques developed by our expert team.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Former law enforcement officers, financial investigators, and forensic specialists with decades of experience.",
    },
    {
      icon: DollarSign,
      title: "No Recovery, No Fee",
      description: "We only charge if we successfully recover your funds, guaranteeing our commitment to results.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Anti Crime Recovery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We stand apart from the competition with our proven track record and professional approach to crime recovery.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={officerReturningFunds} 
              alt="Officer returning recovered funds to victim" 
              className="rounded-lg w-full h-auto shadow-accent-glow"
            />
          </div>

          <div className="grid gap-6">
            {reasons.map((reason, index) => (
              <Card 
                key={index}
                className="p-6 bg-card-gradient border-border hover:border-primary transition-all duration-300"
              >
                <div className="flex gap-4">
                  <reason.icon className="h-12 w-12 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
