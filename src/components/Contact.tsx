import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Shield, Clock } from "lucide-react";
import { toast } from "sonner";
import officerTakingReport from "@/assets/officer-taking-report.jpg";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Recovery request submitted successfully! Our team will contact you within 24 hours.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      value: "support@antiscamrecovery.site",
    },
    {
      icon: Phone,
      title: "Phone Support",
      value: "+18156008181",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Confidential Process",
      description: "All communications are encrypted and confidential",
    },
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Round-the-clock support for urgent cases",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Start Your Recovery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of recovery specialists is ready to evaluate your case and provide a confidential consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <img 
              src={officerTakingReport} 
              alt="Officer taking crime report" 
              className="rounded-lg w-full h-auto mb-6 shadow-accent-glow"
            />
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-4 bg-card-gradient border-border">
                      <div className="flex items-center gap-3">
                        <info.icon className="h-6 w-6 text-primary" />
                        <div>
                          <div className="text-sm text-muted-foreground">{info.title}</div>
                          <div className="font-semibold">{info.value}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {features.map((feature, index) => (
                <Card key={index} className="p-4 bg-card-gradient border-border">
                  <div className="flex items-start gap-3">
                    <feature.icon className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-card-gradient border-border">
            <h3 className="text-2xl font-bold mb-6">Request Recovery Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" required className="bg-input border-border" />
              </div>
              
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" required className="bg-input border-border" />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required className="bg-input border-border" />
              </div>
              
              <div>
                <Label htmlFor="recoveryType">Select Recovery Type</Label>
                <Select required>
                  <SelectTrigger className="bg-input border-border">
                    <SelectValue placeholder="Choose recovery type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="theft">Theft Recovery</SelectItem>
                    <SelectItem value="lost">Lost Access/Keys</SelectItem>
                    <SelectItem value="scam">Scam Recovery</SelectItem>
                    <SelectItem value="exchange">Exchange Issues</SelectItem>
                    <SelectItem value="banking">Banking Fraud</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="description">Describe Your Situation</Label>
                <Textarea 
                  id="description" 
                  required 
                  rows={4}
                  className="bg-input border-border resize-none"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  I understand that all information will be kept confidential
                </label>
              </div>
              
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Submit Recovery Request
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
