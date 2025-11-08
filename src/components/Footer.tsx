import { Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold">Anti Crime Recovery</span>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anti Crime Recovery. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
