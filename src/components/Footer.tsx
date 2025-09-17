import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, ExternalLink, Shield, Award } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Initiatives", href: "#initiatives" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Help Center", href: "#help" },
  ];

  const services = [
    { name: "Diploma Verification", href: "#diplomas" },
    { name: "Teacher Licensing", href: "#teachers" },
    { name: "Scholarships", href: "#scholarships" },
    { name: "Assessments", href: "#assessments" },
    { name: "Micro-credentials", href: "#badges" },
  ];

  const resources = [
    { name: "Blockchain Guide", href: "#guide" },
    { name: "Technical Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "Training Materials", href: "#training" },
    { name: "Security Policies", href: "#security" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-maharashtra rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">ME</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  Maharashtra Education
                </h3>
                <p className="text-sm text-muted-foreground">Blockchain Powered</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Pioneering the future of education through secure, transparent, 
              and innovative blockchain technology solutions for Maharashtra's learning ecosystem.
            </p>
            
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-saffron" />
              <span className="text-sm font-medium text-foreground">Government Certified</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-maharashtra-green" />
              <span className="text-sm font-medium text-foreground">ISO 27001 Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-saffron transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-muted-foreground hover:text-maharashtra-green transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    className="text-muted-foreground hover:text-blockchain-blue transition-colors duration-200 flex items-center"
                  >
                    {resource.name}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-saffron" />
                <span>+91 22 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-maharashtra-green" />
                <span>info@maharashtracert.gov.in</span>
              </div>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-blockchain-blue mt-0.5" />
                <span>Mantralaya, Mumbai, Maharashtra 400032</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="py-8 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              © 2024 Maharashtra State Educational Department. All rights reserved.
            </p>
            
            <div className="flex items-center space-x-6 text-xs text-muted-foreground">
              <a href="#privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#accessibility" className="hover:text-foreground transition-colors">
                Accessibility
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="gov-outline" size="sm">
              Newsletter
            </Button>
            <Button variant="maharashtra" size="sm">
              Support
            </Button>
          </div>
        </div>

        {/* Government Notice */}
        <div className="py-6 border-t border-border">
          <div className="bg-accent/50 rounded-lg p-4 text-center">
            <p className="text-sm text-muted-foreground">
              This is an official website of the Government of Maharashtra. 
              All data and credentials are secured using advanced blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;