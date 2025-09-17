import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-blockchain-education.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden maharashtra-pattern">
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Blockchain-Powered Education System
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              <span className="cultural-accent">Empowering Education</span>
              <br />
              <span className="bg-gradient-to-r from-saffron to-maharashtra-green bg-clip-text text-transparent">
                with Blockchain Technology
              </span>
            </h1>
            
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-8 font-medium">
              Maharashtra's Future-Ready Learning Ecosystem
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Transforming education through transparency, security, and innovation. 
              Secure credentials, verified achievements, and trusted learning outcomes for every student.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-saffron rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">Secure & Verified</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-maharashtra rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">Instant Recognition</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-blockchain rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">Trust & Transparency</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="maharashtra" size="lg" className="group">
                Explore Initiatives
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="gov-outline" size="lg">
                Learn About Blockchain
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by Maharashtra's Educational Institutions</p>
              <div className="flex items-center space-x-8 text-xs text-muted-foreground">
                <span>500+ Schools Connected</span>
                <span>100,000+ Students Served</span>
                <span>10,000+ Teachers Certified</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Maharashtra blockchain education system visualization"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-card animate-scale-in max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-blockchain rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Blockchain Verified</p>
                  <p className="text-xs text-muted-foreground">100% Tamper-Proof Records</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-saffron rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-maharashtra rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;