import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Users, Building, Settings, ArrowRight, Shield } from "lucide-react";

const StakeholderSection = () => {
  const stakeholders = [
    {
      id: "students",
      title: "Students",
      icon: GraduationCap,
      description: "Access your verified credentials, earn digital badges, and showcase your achievements securely.",
      features: [
        "Digital diploma verification",
        "Skill badges and micro-credentials",
        "Scholarship applications",
        "Secure academic records"
      ],
      cta: "Student Portal",
      color: "saffron"
    },
    {
      id: "teachers",
      title: "Teachers",
      icon: Users,
      description: "Manage your professional credentials, track continuing education, and participate in transparent feedback systems.",
      features: [
        "Digital teaching licenses",
        "Professional development tracking",
        "Feedback management",
        "Certification validation"
      ],
      cta: "Teacher Dashboard",
      color: "maharashtra-green"
    },
    {
      id: "employers",
      title: "Employers",
      icon: Building,
      description: "Instantly verify candidate credentials, trust in authentic qualifications, and make informed hiring decisions.",
      features: [
        "Instant credential verification",
        "Skills validation",
        "Authentic certificate checking",
        "Talent discovery"
      ],
      cta: "Employer Portal",
      color: "blockchain-blue"
    },
    {
      id: "administrators",
      title: "Administrators",
      icon: Settings,
      description: "Streamline educational processes, ensure data integrity, and maintain transparent governance systems.",
      features: [
        "System administration",
        "Data analytics",
        "Process automation",
        "Compliance monitoring"
      ],
      cta: "Admin Console",
      color: "blockchain-purple"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-accent rounded-full text-sm font-medium text-accent-foreground mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Stakeholder Access
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Designed for Every
            <span className="block bg-gradient-to-r from-saffron to-maharashtra-green bg-clip-text text-transparent">
              Education Stakeholder
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our blockchain platform serves the unique needs of each participant in Maharashtra's education ecosystem, 
            providing secure, verified, and transparent solutions for all.
          </p>
        </div>

        {/* Stakeholders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stakeholders.map((stakeholder, index) => {
            const IconComponent = stakeholder.icon;
            
            return (
              <Card 
                key={stakeholder.id}
                className="group hover:shadow-card transition-all duration-300 animate-slide-up text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${
                    stakeholder.color === 'saffron' ? 'from-saffron to-saffron-light' :
                    stakeholder.color === 'maharashtra-green' ? 'from-maharashtra-green to-maharashtra-green-light' :
                    stakeholder.color === 'blockchain-blue' ? 'from-blockchain-blue to-blockchain-purple' :
                    'from-blockchain-purple to-blockchain-blue'
                  } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {stakeholder.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      {stakeholder.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Features List */}
                  <div className="text-left">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {stakeholder.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 ${
                            stakeholder.color === 'saffron' ? 'bg-saffron' :
                            stakeholder.color === 'maharashtra-green' ? 'bg-maharashtra-green' :
                            stakeholder.color === 'blockchain-blue' ? 'bg-blockchain-blue' :
                            'bg-blockchain-purple'
                          }`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={stakeholder.color === 'saffron' ? 'gov-primary' : 'gov-outline'}
                    className="w-full group-hover:shadow-lg transition-all duration-300"
                  >
                    {stakeholder.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl font-bold text-saffron mb-2">500+</div>
            <p className="text-sm text-muted-foreground">Schools Connected</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <div className="text-3xl font-bold text-maharashtra-green mb-2">100K+</div>
            <p className="text-sm text-muted-foreground">Students Served</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-3xl font-bold text-blockchain-blue mb-2">10K+</div>
            <p className="text-sm text-muted-foreground">Teachers Certified</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="text-3xl font-bold text-blockchain-purple mb-2">99.9%</div>
            <p className="text-sm text-muted-foreground">Security Uptime</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderSection;