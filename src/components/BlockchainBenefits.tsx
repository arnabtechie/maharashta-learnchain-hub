import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Zap, Globe, Lock, CheckCircle } from "lucide-react";

const BlockchainBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Tamper-Proof Security",
      description: "Immutable records ensure credentials cannot be forged or altered, providing ultimate security for educational achievements.",
      stats: "100% Fraud Prevention"
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "All transactions and processes are visible and auditable, building trust among students, institutions, and employers.",
      stats: "Full Audit Trail"
    },
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Real-time credential verification eliminates waiting periods and reduces administrative overhead significantly.",
      stats: "Sub-Second Verification"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Blockchain credentials are internationally recognized and can be verified anywhere in the world instantly.",
      stats: "Worldwide Acceptance"
    },
    {
      icon: Lock,
      title: "Data Privacy",
      description: "Advanced cryptographic protection ensures student data privacy while maintaining verification capabilities.",
      stats: "Bank-Level Encryption"
    },
    {
      icon: CheckCircle,
      title: "Automated Compliance",
      description: "Smart contracts ensure all processes comply with educational standards and government regulations automatically.",
      stats: "100% Compliance"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Why Choose
            <span className="block bg-gradient-blockchain bg-clip-text text-transparent">
              Blockchain Technology?
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the revolutionary advantages that blockchain technology brings to Maharashtra's education system, 
            ensuring trust, security, and efficiency for all stakeholders.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <Card 
                key={index}
                className="group hover:shadow-card hover:border-blockchain-blue/20 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className="w-14 h-14 bg-gradient-blockchain rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground group-hover:text-blockchain-blue transition-colors">
                      {benefit.title}
                    </CardTitle>
                    <div className="text-sm font-medium text-blockchain-blue mt-1">
                      {benefit.stats}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Specifications */}
        <div className="mt-16 bg-gradient-blockchain rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-4">
              Built on Enterprise-Grade Infrastructure
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our blockchain platform leverages cutting-edge technology to deliver 
              unparalleled security, scalability, and performance for Maharashtra's education ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">256-bit</div>
              <p className="text-white/80 text-sm">Encryption Standard</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <p className="text-white/80 text-sm">Transactions/Second</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <p className="text-white/80 text-sm">Uptime Guarantee</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">ISO 27001</div>
              <p className="text-white/80 text-sm">Certified Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainBenefits;