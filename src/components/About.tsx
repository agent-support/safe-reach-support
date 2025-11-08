import { Card } from "@/components/ui/card";
import forensicsTeam from "@/assets/forensics-team.jpg";
import happyClient from "@/assets/happy-client.jpg";

const About = () => {
  const stats = [
    { value: "98%", label: "Success Rate" },
    { value: "5000+", label: "Cases Resolved" },
    { value: "$200M+", label: "Million $ Recovered" },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">About Anti Crime Recovery</h2>
          <p className="text-xl text-primary">Professional Crime & Fraud Recovery Service</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <img 
              src={forensicsTeam} 
              alt="Forensics team investigating cybercrime" 
              className="rounded-lg w-full h-auto mb-6 shadow-accent-glow"
            />
            <p className="text-lg text-muted-foreground mb-4">
              Anti Crime Recovery is the industry leader in recovering stolen funds from various types of financial crimes. We've developed advanced investigative techniques and forensic methodologies to track, locate, and recover assets that have been:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Stolen through sophisticated scams
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Lost due to fraudulent schemes
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Transferred through wire fraud
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Compromised through cybercrime
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Inaccessible due to fraud or theft
              </li>
            </ul>
          </div>

          <div>
            <img 
              src={happyClient} 
              alt="Satisfied client after successful recovery" 
              className="rounded-lg w-full h-auto mb-6"
            />
            <p className="text-lg text-muted-foreground mb-8">
              With a team of law enforcement experts, financial investigators, and forensic specialists, we've successfully recovered millions in stolen assets for our clients worldwide.
            </p>
            
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-card-gradient border-border">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
