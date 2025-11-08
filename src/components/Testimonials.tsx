import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael T.",
      location: "New York, USA",
      text: "After losing 5 BTC to a sophisticated phishing attack, I thought my funds were gone forever. Anti Crime Recovery tracked and recovered every coin within 3 weeks.",
      initials: "MT",
    },
    {
      name: "Sarah L.",
      location: "London, UK",
      text: "My exchange account was frozen with over $100,000 in assets. After months of no response, Anti Crime Recovery resolved the issue in just 10 days.",
      initials: "SL",
    },
    {
      name: "David K.",
      location: "Toronto, Canada",
      text: "I lost access to my hardware wallet containing my life savings in Ethereum. Anti Crime Recovery restored access without compromising security.",
      initials: "DK",
    },
    {
      name: "Jennifer R.",
      location: "Singapore",
      text: "After falling victim to a DeFi rug pull, Anti Crime Recovery traced the funds through multiple wallets and recovered 85% of my initial investment.",
      initials: "JR",
    },
    {
      name: "Robert M.",
      location: "Sydney, Australia",
      text: "I accidentally sent a large amount of USDT to the wrong address. Anti Crime Recovery not only traced the funds but negotiated the return with the recipient.",
      initials: "RM",
    },
    {
      name: "Thomas H.",
      location: "Berlin, Germany",
      text: "Our company lost significant funds in a business email compromise. Anti Crime Recovery worked with law enforcement to track and recover our assets.",
      initials: "TH",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our recovery services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card-gradient border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
